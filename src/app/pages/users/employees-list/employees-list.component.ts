import { Component, OnInit } from '@angular/core';
import { Building, BuildingData } from 'app/@core/data/building';
import { Employee, EmployeeData } from 'app/@core/data/employee';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[];
  buildings: Building[];
  loading = true;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      columnTitle: 'Actions',
      position: 'right',
    },
    columns: {
      id: {
        title: '#',
        type: 'number',
        width: '5rem',
        editable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      buildingCode: {
        title: 'Building',
        type: 'string',
        width: '5rem',
        editor: {
          type: 'list',
          config: { list: [] },
        },
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      telephone: {
        title: 'Telephone',
        type: 'string',
      },
      representativeName: {
        title: 'Representative',
        type: 'string',
        editor: {
          type: 'list',
          config: { list: [] },
        },
      },
      fullAddress: {
        title: 'Address',
        type: 'string',
        width: '25rem',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private employeeService: EmployeeData, private buildingService: BuildingData) {
    this.loading = true;
    this.loadData().then(_ => this.loading = false);
  }

  private async loadData() {
    await this.loadBuildings();
    await this.loadEmployees();
  }

  private async loadBuildings(): Promise<void> {
    return new Promise((resolve, _) => {
      this.buildingService.getData().subscribe(buildings => {
        this.buildings = buildings;

        // Load list of all buildings
        const buildingOptions: { value: string; title: string; }[] = buildings.map(building =>
          ({ value: building.shortName, title: building.shortName }));
        this.settings.columns.buildingCode.editor.config.list = buildingOptions;
        this.settings = Object.assign({}, this.settings);

        resolve();
      });
    });
  }

  private async loadEmployees(): Promise<void> {
    return new Promise((resolve, _) => {
      this.employeeService.getData().subscribe(employees => {
        employees.forEach(employee => {
          employee.buildingCode = employee?.building?.shortName;
          employee.representativeName = employee?.representative?.name ? employee.representative.name : 'N/A';
        });

        // Load list of possible representatives
        const representativeOptions: { value: string; title: string; }[] = employees.map(employee =>
          ({ value: employee.name, title: employee.name }));
        this.settings.columns.representativeName.editor.config.list = representativeOptions;
        this.settings = Object.assign({}, this.settings);

        this.employees = employees;
        this.source.load(this.employees);
        resolve();
      });
    });
  }

  ngOnInit(): void {
  }

  onCreateConfirm(event): void {
    const newEmployee = this.getEmployeeWithFullBuildingAndRepresentative(event);
    this.loading = true;
    this.employeeService.addEmployee(newEmployee).subscribe(res => {
      this.loadEmployees().then(_ => this.loading = false);
    });
  }

  onEditConfirm(event): void {
    const newEmployee = this.getEmployeeWithFullBuildingAndRepresentative(event);
    this.loading = true;
    this.employeeService.updateEmployee(newEmployee).subscribe(() => {
      this.loadEmployees().then(() => this.loading = false);
    });
  }

  private getEmployeeWithFullBuildingAndRepresentative(event: any): Employee {
    const employee: Employee = event.newData;
    employee.building = this.buildings.find(b => b.shortName === employee.buildingCode);
    employee.representative = this.employees.find(e => e.name === employee.representativeName);
    return employee;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.loading = true;
      this.employeeService.deleteEmployee(event.data.id).subscribe(res => {
        this.loadEmployees().then(_ => this.loading = false);
      });
    } else {
      event.confirm.reject();
    }
  }
}

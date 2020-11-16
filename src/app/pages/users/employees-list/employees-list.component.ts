import { Component, OnInit } from '@angular/core';
import { Person, PersonData } from 'app/@core/data/person';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {

  employees: Person[];
  loading = true;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      columnTitle: 'Actions',
      position: 'right'
    },
    columns: {
      id: {
        title: '#',
        type: 'number',
        width: '5rem',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      buildingCode: {
        title: 'Building',
        type: 'string',
        width: '5rem',
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
      },
      fullAddress: {
        title: 'Address',
        type: 'string',
        width: '25rem',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private personService: PersonData) {
    this.loading = true;
    this.personService.getData().subscribe(persons => {
      persons.forEach(
        p => {
          p.buildingCode = p?.building?.shortName;
          p.representativeName = p?.representative?.name ? p.representative.name : 'N/A';
        });

      this.employees = persons;
      this.source.load(this.employees);
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}

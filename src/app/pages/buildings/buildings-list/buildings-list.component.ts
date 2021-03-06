import { Component, OnInit } from '@angular/core';
import { Building, BuildingData } from 'app/@core/data/building';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.scss'],
})
export class BuildingsListComponent implements OnInit {

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
      shortName: {
        title: 'Code',
        type: 'string',
      },
      fullName: {
        title: 'Full Name',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private buildingService: BuildingData) {
    this.loading = true;
    this.buildingService.getData().subscribe(buildings => {
      this.buildings = buildings;
      this.source.load(buildings);
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  onCreateConfirm(event): void {
    this.loading = true;
    this.buildingService.addBuilding(event.newData).subscribe(res => {
      this.loading = false;
      this.source.append(res);
    });
  }

  onEditConfirm(event): void {
    this.loading = true;
    this.buildingService.updateBuilding(event.newData).subscribe(res => {
      this.loading = false;
      res ? event.confirm.resolve() : event.confirm.reject();
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.loading = true;
      this.buildingService.deleteBuilding(event.data.id).subscribe(res => {
        this.loading = false;
        res ? event.confirm.resolve() : event.confirm.reject();
      });
    } else {
      event.confirm.reject();
    }
  }
}

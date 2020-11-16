import { Component, OnInit } from '@angular/core';
import { Driver, DriverData } from 'app/@core/data/driver';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss'],
})
export class DriversListComponent implements OnInit {

  drivers: Driver[];
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
      email: {
        title: 'Email',
        type: 'string',
      },
      telephone: {
        title: 'Telephone',
        type: 'string',
      },
      company: {
        title: 'Company',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private driverService: DriverData) {
    this.loading = true;
    this.driverService.getData().subscribe(drivers => {
      this.drivers = drivers;
      this.source.load(this.drivers);
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

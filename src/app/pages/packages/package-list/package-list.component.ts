import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { StatusRendererComponent } from './status-renderer.component';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent {
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
      },
      barcode: {
        title: 'Barcode',
        type: 'string',
      },
      building: {
        title: 'Building',
        type: 'string',
      },
      recipient: {
        title: 'Recipient',
        type: 'string',
      },
      timeReceived: {
        title: 'Time Received',
        type: 'string',
      },
      status: {
        title: 'status',
        type: 'custom',
        renderComponent: StatusRendererComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data = [{
    id: 1,
    barcode: '1313131',
    building: 'D42',
    recipient: 'John Doe',
    timeReceived: '2020-10-30 12:42:35',
    status: 'erfasst'
  }];

  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    this.source.load(this.data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

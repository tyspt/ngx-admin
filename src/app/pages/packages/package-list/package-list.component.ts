import { Component } from '@angular/core';
import { PackageData } from 'app/@core/data/package';
import { LocalDataSource } from 'ng2-smart-table';

import { StatusRendererComponent } from './status-renderer.component';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      id: {
        title: '#',
        type: 'number',
        width: '5rem',
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

  constructor(private service: PackageData) {
    const data = this.service.getData();
    this.source.load(data);
  }
}

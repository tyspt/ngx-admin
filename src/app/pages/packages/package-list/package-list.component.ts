import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { PackageData } from 'app/@core/data/package';
import { LocalDataSource } from 'ng2-smart-table';
import { PackageAddComponent } from '../package-add/package-add.component';
import { PackageDetailComponent } from '../package-detail/package-detail.component';

import { StatusRendererComponent } from './status-renderer.component';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
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
      timeCreated: {
        title: 'Time Created',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'custom',
        renderComponent: StatusRendererComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private packageService: PackageData,
    private dialogService: NbDialogService
  ) {
    const data = this.packageService.getData();
    this.source.load(data);
  }

  showPackageDetail(event) {
    this.dialogService.open(PackageDetailComponent, {
      context: {
        package: event?.data
      },
      autoFocus: false,
    });
  }
  

  showPackageAdd(event) {
    this.dialogService.open(PackageAddComponent, {
      context: {
        package: event?.data
      },
      autoFocus: false,
    });
  }
}

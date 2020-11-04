import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Package } from 'app/@core/data/package';
import { LocalDataSource } from 'ng2-smart-table';

import { PackageDetailComponent } from '../package-detail/package-detail.component';
import { StatusRendererComponent } from './status-renderer.component';

@Component({
  selector: 'ngx-shared-smart-table',
  templateUrl: './shared-smart-table.component.html',
  styleUrls: ['./shared-smart-table.component.scss']
})
export class SharedSmartTableComponent implements OnInit {

  @Input() packages: Package[];

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
      recipientBuilding: {
        title: 'Building',
        type: 'string',
      },
      recipientName: {
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
    private dialogService: NbDialogService,
  ) {}

  ngOnInit(): void {
    // extract nested data fields into first level so that smart table can work with it as column
    this.packages.forEach(p => {
      p.recipientName = p.recipient.name;
      p.recipientBuilding = p.recipient.building;
    });
    this.source.load(this.packages);
   }

  showPackageDetail(pkg: Package) {
    this.dialogService.open(PackageDetailComponent, {
      context: { package: pkg, },
      autoFocus: false,
    });
  }

}

import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Package } from 'app/@core/data/package';
import { LocalDataSource } from 'ng2-smart-table';

import { PackageDetailComponent } from '../package-detail/package-detail.component';
import { StatusRendererComponent } from './status-renderer.component';

@Component({
  selector: 'ngx-shared-smart-table',
  templateUrl: './shared-smart-table.component.html',
  styleUrls: ['./shared-smart-table.component.scss'],
})
export class SharedSmartTableComponent implements OnInit, OnChanges {

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
      type: {
        title: 'Type',
        type: 'string',
      },
      barcode: {
        title: 'Barcode',
        type: 'string',
      },
      orderNumber: {
        title: 'SAP Order',
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
      senderName: {
        title: 'Sender',
        type: 'string',
      },
      createdTimestamp: {
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
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

  // extract nested data fields into first level so that smart table can work with it as column
  private loadData() {
    this.packages.forEach(p => {
      p.recipientName = p.recipient.name;
      p.recipientBuilding = p.recipient.building.shortName;
      p.senderName = p.sender.name;
      p.createdTimestamp = this.datePipe.transform(p.createdTimestamp, 'medium');
    });
    this.source.load(this.packages);
  }

  showPackageDetail(pkg: Package): void {
    this.dialogService.open(PackageDetailComponent, {
      context: { package: pkg },
      autoFocus: false,
    });
  }
}

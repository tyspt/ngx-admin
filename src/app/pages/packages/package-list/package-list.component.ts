import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Package, PackageData } from 'app/@core/data/package';
import { LocalDataSource } from 'ng2-smart-table';

import { PackageAddComponent } from '../package-add/package-add.component';
import { PackageDetailComponent } from '../package-detail/package-detail.component';
import { StatusRendererComponent } from './status-renderer.component';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent implements OnInit {
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
    private packageService: PackageData,
    private dialogService: NbDialogService,
    private activatedRoute: ActivatedRoute,
  ) {
    const data = this.packageService.getData();
    // extract nested data fields into first level so that smart table can work with it as column
    data.forEach(p => {
      p.recipientName = p.recipient.name;
      p.recipientBuilding = p.recipient.building;
    });
    this.source.load(data);
  }

  ngOnInit(): void {
    // Show package detail popup if route contains a package id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const pkg = this.packageService.getPackagebyId(id);
      setTimeout(() => {
        this.showPackageDetail(pkg);
      }, 100);
    }
  }

  showPackageDetail(pkg: Package) {
    this.dialogService.open(PackageDetailComponent, {
      context: {
        package: pkg,
      },
      autoFocus: false,
    });
  }

  showPackageAdd(event) {
    this.dialogService.open(PackageAddComponent, {
      context: {
        package: event?.data,
      },
      autoFocus: false,
    });
  }
}

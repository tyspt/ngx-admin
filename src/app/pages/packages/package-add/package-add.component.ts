import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Package, PackageData, Status, Type } from 'app/@core/data/package';

import { QrPrintoutComponent } from './qr-printout/qr-printout.component';

@Component({
  selector: 'ngx-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
})
export class PackageAddComponent implements OnInit {

  package: Package;

  constructor(
    protected ref: NbDialogRef<PackageAddComponent>,
    private dialogService: NbDialogService,
    private packageService: PackageData,
    ) { }

  ngOnInit(): void {
  }

  createPackage() {
    this.dismiss();
    const pkg = {
      barcode: '',
      recipient: {
        name: '',
        email: '',
        telephone: '',
        building: '',
        fullAddress: '',
      },
      timeCreated: '',
      representative: {},
      sender: {
        name: '',
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    };
    const result = this.packageService.addPackage(pkg);
    this.dialogService.open(QrPrintoutComponent, {
      context: { qrContent: result.id },
      autoFocus: false,
    });
  }

  dismiss() {
    this.ref.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Package, PackageData, Status, Type } from 'app/@core/data/package';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { QrPrintoutComponent } from './qr-printout/qr-printout.component';

@Component({
  selector: 'ngx-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
})
export class PackageAddComponent implements OnInit {

  package: Package;
  loading = false;

  packageTypeNgModel = 'npm';
  trackingNumberNgModel;
  orderNumberNgModel: string;
  senderNameNgModel;
  recipientNameNgModel: string;
  recipientEmailNgModel: string;
  recipientTelephoneNgModel: string;
  recipientBuildingNgModel;
  recipientAddressNgModel;
  representativeNameNgModel: string;

  orderNumberOptions: string[] = ['SAP164646164', 'SAP223232323', 'SAP365556565', 'SAP464646646', 'SAP546464146', 'SAP677978897', 'SAP878794454', 'SAP994842616'];
  filteredorderNumberOptions$: Observable<string[]>;

  constructor(
    protected ref: NbDialogRef<PackageAddComponent>,
    private dialogService: NbDialogService,
    private packageService: PackageData,
  ) { }

  ngOnInit(): void {
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.orderNumberOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredorderNumberOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredorderNumberOptions$ = this.getFilteredorderNumberOptions(this.orderNumberNgModel);
  }

  onSelectionChange($event) {
    this.filteredorderNumberOptions$ = this.getFilteredorderNumberOptions($event);
    this.loading = true;
    setTimeout(() => {
      this.senderNameNgModel = 'Max Mustermann';
      this.recipientNameNgModel = 'Anna Musterfrau';
      this.recipientEmailNgModel = 'max.mustermann@continental.com';
      this.recipientTelephoneNgModel = '0164-61616641';
      this.recipientBuildingNgModel = '2';
      this.recipientAddressNgModel = 'Seybothstraße 2, K210/2/1 93053 Regensburg';
      this.loading = false;
    }, 2000);
  }

  createPackage() {
    this.dismiss();
    this.package = {
      id: undefined,
      barcode: this.trackingNumberNgModel,
      recipient: {
        name: this.recipientNameNgModel,
        email: this.recipientEmailNgModel,
        telephone: this.recipientTelephoneNgModel,
        building: this.recipientBuildingNgModel,
        fullAddress: this.recipientAddressNgModel,
      },
      timeCreated: new Date().toString(),
      representative: {
        name: this.representativeNameNgModel,
      },
      sender: {
        name: this.senderNameNgModel,
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    };
    const result = this.packageService.addPackage(this.package);
    this.dialogService.open(QrPrintoutComponent, {
      context: { qrContent: result.id },
      autoFocus: false,
    });
  }

  dismiss() {
    this.ref.close();
  }
}

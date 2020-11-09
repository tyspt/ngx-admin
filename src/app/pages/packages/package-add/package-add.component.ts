import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Package, PackageData, PackageType } from 'app/@core/data/package';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { QrPrintoutComponent } from './qr-printout/qr-printout.component';

@Component({
  selector: 'ngx-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
})
export class PackageAddComponent implements OnInit {

  package: Package = {
    id: undefined,
    barcode: '',
    orderNumber: undefined,
    recipient: {
      name: '',
      email: '',
      telephone: '',
      building: {
        id: undefined,
        shortName: '',
      },
      fullAddress: '',
    },
    representative: {
      name: '',
    },
    sender: {
      name: '',
    },
    status: undefined,
    type: PackageType.INBOUND,
  };
  loading = false;

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
    this.filteredorderNumberOptions$ = this.getFilteredorderNumberOptions(this.package.orderNumber);
  }

  onSelectionChange($event) {
    this.filteredorderNumberOptions$ = this.getFilteredorderNumberOptions($event);
    this.loading = true;
    setTimeout(() => {
      this.package.sender.name = 'Anna Musterfrau';
      this.package.recipient.name = 'Max Mustermann';
      this.package.recipient.email = 'max.mustermann@continental.com';
      this.package.recipient.telephone = '0164-61616641';
      this.package.recipient.building = {
        id: 3,
        shortName: 'K210',
      };
      this.package.recipient.fullAddress = 'Seybothstraße 2, K210/2/1 93053 Regensburg';
      this.loading = false;
    }, 2000);
  }

  createPackage() {
    const result = this.packageService.addPackage(this.package);
    this.loading = true;
    setTimeout(() => {
      this.dismiss();
      this.dialogService.open(QrPrintoutComponent, {
        context: { qrContent: result.id.toString() },
        autoFocus: false,
      });
    }, 2000);
  }

  dismiss() {
    this.ref.close();
  }
}

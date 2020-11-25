import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Building, BuildingData } from 'app/@core/data/building';
import { Employee, EmployeeData } from 'app/@core/data/employee';
import { Package, PackageData, PackageStatus, PackageType } from 'app/@core/data/package';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CameraPreviewComponent } from './camera-preview/camera-preview.component';
import { QrPrintoutComponent } from './qr-printout/qr-printout.component';

@Component({
  selector: 'ngx-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
})
export class PackageAddComponent implements OnInit {

  packageType: PackageType;
  package: Package = {
    id: undefined,
    barcode: '',
    orderNumber: undefined,
    recipient: {
      id: undefined,
      name: '',
      email: '',
      telephone: '',
      building: {
        id: undefined,
      },
      fullAddress: '',
    },
    representative: {
      name: '',
    },
    sender: {
      id: undefined,
      name: '',
    },
    status: PackageStatus.CREATED,
    type: PackageType.INBOUND,
  };
  buildings: Building[];
  loading = true;

  orderNumberOptions: string[] = ['SAP164646164', 'SAP223232323', 'SAP365556565', 'SAP464646646', 'SAP546464146', 'SAP677978897', 'SAP878794454', 'SAP994842616'];
  filteredorderNumberOptions$: Observable<string[]>;

  employeeOptions: Employee[] = [];
  filteredEmployeeOptions$: Observable<string[]>;

  constructor(
    protected ref: NbDialogRef<PackageAddComponent>,
    private dialogService: NbDialogService,
    private packageService: PackageData,
    private buildingService: BuildingData,
    private employeeService: EmployeeData,
  ) { }

  ngOnInit(): void {
    this.buildingService.getData().subscribe(buildings => {
      this.buildings = buildings;
      this.loading = !(this.employeeOptions && this.buildings);
    });

    this.employeeService.getData().subscribe(employees => {
      this.employeeOptions = employees;
      this.loading = !(this.employeeOptions && this.buildings);
    });

    this.package.type = this.packageType;
  }

  createPackage(): void {
    this.loading = true;
    this.packageService.addPackage(this.package).subscribe(result => {
      this.dialogService.open(QrPrintoutComponent, { context: { qrContent: result.id.toString() }, autoFocus: false })
        .onClose.subscribe(_ => this.dismiss());
    });
  }

  startCameraPreview(): void {
    this.dialogService.open(CameraPreviewComponent, {
      context: {}, autoFocus: false,
    })
      .onClose.subscribe(result => result && this.fillFormWithDummyData());
  }

  dismiss(): void {
    this.ref.close();
  }

  private fillFormWithDummyData(): void {
    this.loading = true;
    setTimeout(() => {
      this.package.sender.id = 2;
      this.package.sender.name = 'Anna Musterfrau';
      this.package.recipient.id = 1;
      this.package.recipient.name = 'Max Mustermann';
      this.package.recipient.email = 'max.mustermann@continental.com';
      this.package.recipient.telephone = '0164-61616641';
      this.package.recipient.building = {
        id: 3,
        shortName: 'K210',
      };
      this.package.recipient.fullAddress = 'Seybothstraße 2, K210/2/1 93053 Regensburg';
      this.loading = false;
    }, 1000);
  }

  /* *************************************** Filtering orderNumber options *************************************** */
  getFilteredorderNumberOptions(value: string): Observable<string[]> {
    return of(value).pipe(map(filterString =>
      this.orderNumberOptions.filter(optionValue =>
        optionValue.toLowerCase().includes(filterString.toLowerCase()))));
  }

  onOrderNumberChange() {
    this.filteredorderNumberOptions$ = this.getFilteredorderNumberOptions(this.package.orderNumber);
  }

  onOrderNumberSelectionChange($event) {
    this.filteredorderNumberOptions$ = this.getFilteredorderNumberOptions($event);
    this.fillFormWithDummyData();
  }

  /* *************************************** Filtering employee options *************************************** */
  getFilteredEmployeeOptions(value: string): Observable<string[]> {
    return of(value).pipe(map(filterString =>
      this.employeeOptions
        .map(employee => employee.name)
        .filter(optionValue => optionValue.toLowerCase().includes(filterString.toLowerCase()))));
  }

  onEmployeeChange($event) {
    const employeeName = $event.target.value;
    this.filteredEmployeeOptions$ = this.getFilteredEmployeeOptions(employeeName);
  }

  onEmployeeSelectionChange(selectedValue: string, origin: ('sender' | 'recipient' | 'representative')) {
    this.filteredorderNumberOptions$ = this.getFilteredEmployeeOptions(selectedValue);

    if (this.employeeOptions?.length) {
      const selectedEmployee = this.employeeOptions.find(employee => employee?.name === selectedValue);
      switch (origin) {
        case 'recipient':
          this.package.recipient = Object.assign({}, selectedEmployee);
          break;
        case 'sender':
          this.package.sender = Object.assign({}, selectedEmployee);
          break;
        case 'representative':
          this.package.representative = Object.assign({}, selectedEmployee);
          break;
      }
    }
  }
}

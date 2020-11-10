import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Building, BuildingData } from 'app/@core/data/building';
import { Package, PackageData, PackageStatus, PackageType } from 'app/@core/data/package';
import { Person, PersonData } from 'app/@core/data/person';
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

  personOptions: Person[] = [];
  filteredPersonOptions$: Observable<string[]>;

  constructor(
    protected ref: NbDialogRef<PackageAddComponent>,
    private dialogService: NbDialogService,
    private packageService: PackageData,
    private buildingService: BuildingData,
    private personService: PersonData,
  ) { }

  ngOnInit(): void {
    this.buildingService.getData().subscribe(buildings => {
      this.buildings = buildings;
      this.loading = !(this.personOptions && this.buildings);
    });

    this.personService.getData().subscribe(persons => {
      this.personOptions = persons;
      this.loading = !(this.personOptions && this.buildings);
    });
  }

  createPackage() {
    this.loading = true;
    this.packageService.addPackage(this.package).subscribe(result => {
      this.dialogService.open(QrPrintoutComponent, { context: { qrContent: result.id.toString() }, autoFocus: false })
        .onClose.subscribe(_ => this.dismiss());
    });
  }

  dismiss() {
    this.ref.close();
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
    }, 2000);
  }

  /* *************************************** Filtering person options *************************************** */
  getFilteredPersonOptions(value: string): Observable<string[]> {
    return of(value).pipe(map(filterString =>
      this.personOptions
        .map(person => person.name)
        .filter(optionValue => optionValue.toLowerCase().includes(filterString.toLowerCase()))));
  }

  onPersonChange($event) {
    const personName = $event.target.value;
    this.filteredPersonOptions$ = this.getFilteredPersonOptions(personName);
  }

  onPersonSelectionChange(selectedValue: string, origin: ('sender' | 'recipient' | 'representative')) {
    this.filteredorderNumberOptions$ = this.getFilteredPersonOptions(selectedValue);

    if (this.personOptions?.length) {
      const selectedPerson = this.personOptions.find(person => person?.name === selectedValue);
      switch (origin) {
        case 'recipient':
          this.package.recipient = Object.assign({}, selectedPerson);
          break;
        case 'sender':
          this.package.sender = Object.assign({}, selectedPerson);
          break;
        case 'representative':
          this.package.representative = Object.assign({}, selectedPerson);
          break;
      }
    }
  }
}

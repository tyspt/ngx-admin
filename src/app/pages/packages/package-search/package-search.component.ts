import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Package, PackageData } from 'app/@core/data/package';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { PackageDetailComponent } from '../package-detail/package-detail.component';

@Component({
  selector: 'ngx-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss'],
})
export class PackageSearchComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private activatedRoute: ActivatedRoute,
    private packageService: PackageData
  ) { }

  options: string[];
  filteredOptions$: Observable<string[]>;

  @ViewChild('autoInput') input;

  ngOnInit() {
    // load list of barcodes
    this.options = this.packageService.getData().map(p => p.barcode);
    // remove duplicates
    this.options = this.options.filter((item, index) => this.options.indexOf(item) === index);
    this.filteredOptions$ = of(this.options);

    // Show package detail popup if route contains a package id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const pkg = this.packageService.getPackagebyId(id);
      setTimeout(() => {
        this.showPackageDetail(pkg);
      }, 100);
    }
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }

  searchPackage(): void {
    const barcode = this.input.nativeElement.value;
    const pkg = this.packageService.getPackagebyBarcode(barcode);
    this.showPackageDetail(pkg);
  }

  private showPackageDetail(pkg: Package) {
    if (pkg) {
      this.dialogService.open(PackageDetailComponent, {
        context: {
          package: pkg,
        },
        autoFocus: false,
      });
    } else {
      this.toastrService.danger('Please make sure to fill in the correct number', `Package number does not exist!`);
      this.input.nativeElement.value = '';
    }
  }
}

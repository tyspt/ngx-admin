import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PackageData } from 'app/@core/data/package';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss'],
})
export class PackageSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private packageService: PackageData
  ) { }

  options: string[];
  filteredOptions$: Observable<string[]>;

  @ViewChild('autoInput') input;

  ngOnInit() {
    this.options = this.packageService.getData().map(p => p.barcode);
    this.filteredOptions$ = of(this.options);
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
    const id = this.packageService.getPackagebyBarcode(barcode);
    this.router.navigate(['pages', 'packages', id]);
  }
}

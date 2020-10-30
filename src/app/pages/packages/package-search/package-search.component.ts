import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss']
})
export class PackageSearchComponent implements OnInit {

  constructor() { }

  options: string[];
  filteredOptions$: Observable<string[]>;

  @ViewChild('autoInput') input;

  ngOnInit() {
    this.options = ['7943963707', '2741725288', '6662965167', '6532223894', '6532223894'];
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

  // TODO: perform search
  searchPackage(): void {
    console.log("search clicked")
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss']
})
export class PackageSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: perform search
  searchPackage(): void {
    console.log("search clicked")
  }
}

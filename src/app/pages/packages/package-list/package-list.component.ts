import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {

  packages = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }
}

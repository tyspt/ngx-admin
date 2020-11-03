import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {

  packages = [{
    barcode: '1313131',
    building: 'D42',
    recipient: 'John Doe',
    timeReceived: '2020-10-30',
    status: 'erfasst'
  }]

  constructor() { }

  ngOnInit(): void {
  }
}

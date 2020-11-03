import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-package-list-item',
  templateUrl: './package-list-item.component.html',
  styleUrls: ['./package-list-item.component.scss']
})
export class PackageListItemComponent implements OnInit {

  @Input() package;

  constructor() { }

  ngOnInit(): void {
  }

}

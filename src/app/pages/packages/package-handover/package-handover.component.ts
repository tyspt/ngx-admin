import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-package-handover',
  templateUrl: './package-handover.component.html',
  styleUrls: ['./package-handover.component.scss']
})
export class PackageHandoverComponent implements OnInit {

  stepIndex = 0;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  next() {
    this.stepIndex++;
  }

  cancel() {
    this.location.back();
  }
}

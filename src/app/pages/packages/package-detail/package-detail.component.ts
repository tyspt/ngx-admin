import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Package } from 'app/@core/data/package';

@Component({
  selector: 'ngx-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss'],
})
export class PackageDetailComponent implements OnInit {

  @Input() package: Package;

  constructor(protected ref: NbDialogRef<PackageDetailComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }
}

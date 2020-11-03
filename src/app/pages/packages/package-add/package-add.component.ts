import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Package } from 'app/@core/data/package';

@Component({
  selector: 'ngx-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
})
export class PackageAddComponent implements OnInit {

  @Input() package: Package;

  constructor(protected ref: NbDialogRef<PackageAddComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

}

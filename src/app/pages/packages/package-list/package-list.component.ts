import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Package, PackageData } from 'app/@core/data/package';

import { PackageAddComponent } from '../package-add/package-add.component';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent implements OnInit {

  packages: Package[];
  loading = true;

  constructor(
    private packageService: PackageData,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
    this.loadPackages();
  }

  private loadPackages() {
    this.loading = true;
    this.packageService.getData().subscribe(packages => {
      this.packages = packages;
      this.loading = false;
    });
  }

  showPackageAdd(event) {
    this.dialogService.open(PackageAddComponent, {
      context: {}, autoFocus: false,
    }).onClose.subscribe(_ => this.loadPackages());
  }
}

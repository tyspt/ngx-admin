import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Package, PackageData } from 'app/@core/data/package';

import { PackageDetailComponent } from '../package-detail/package-detail.component';

@Component({
  selector: 'ngx-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.scss'],
})
export class PackageSearchComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private activatedRoute: ActivatedRoute,
    private packageService: PackageData,
  ) { }

  trackingNumber: string;

  ngOnInit() {
    // Show package detail popup if route contains a package id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const pkg = this.packageService.getPackagebyId(+id);
      setTimeout(() => {
        this.showPackageDetail(pkg);
      }, 100);
    }
  }

  searchPackage(): void {
    const barcode = this.trackingNumber;
    const pkg = this.packageService.getPackagebyBarcode(barcode);
    this.showPackageDetail(pkg);
  }

  private showPackageDetail(pkg: Package) {
    if (pkg) {
      this.dialogService.open(PackageDetailComponent, {
        context: {
          package: pkg,
        },
        autoFocus: false,
      });
    } else {
      this.toastrService.danger('Please make sure to fill in the correct number', `Package number does not exist!`);
      this.trackingNumber = '';
    }
  }
}

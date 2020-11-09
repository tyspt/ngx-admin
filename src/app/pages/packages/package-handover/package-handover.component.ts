import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Package, PackageData, PackageStatus } from 'app/@core/data/package';

import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'ngx-package-handover',
  templateUrl: './package-handover.component.html',
  styleUrls: ['./package-handover.component.scss'],
})
export class PackageHandoverComponent implements OnInit {

  stepIndex = 0;

  todoPackages: Package[];
  donePackages: Package[];

  constructor(
    private location: Location,
    private dialogService: NbDialogService,
    private packageService: PackageData,
  ) { }

  ngOnInit(): void {
    this.packageService.getData()
      .subscribe(packages =>
        this.todoPackages = packages.filter(p => p.status === PackageStatus.CREATED || p.status === PackageStatus.IN_HANDOVER));

    this.packageService.getData()
      .subscribe(packages =>
        this.donePackages = packages.filter(p => p.status === PackageStatus.IN_TRANSPORT));

    // Simulate driver app scan delay
    setTimeout(() => this.stepIndex++, 10000);
  }

  showConfirmationDialog() {
    this.dialogService.open(ConfirmationPopupComponent, {
      context: { packages: this.donePackages },
      autoFocus: false,
    });
  }

  cancel() {
    this.location.back();
  }
}

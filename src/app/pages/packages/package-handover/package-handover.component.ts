import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Package, PackageData, Status } from 'app/@core/data/package';

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
    this.todoPackages = this.packageService.getData()
      .filter(p => p.status === Status.ERFASST || p.status === Status.SORTIERT);
    this.donePackages = this.packageService.getData()
      .filter(p => p.status === Status.IM_TRANSPORT);

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

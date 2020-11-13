import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { HandoverData } from 'app/@core/data/handover';
import { Package, PackageData, PackageStatus } from 'app/@core/data/package';
import { interval, Subject } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'ngx-package-handover',
  templateUrl: './package-handover.component.html',
  styleUrls: ['./package-handover.component.scss'],
})
export class PackageHandoverComponent implements OnInit, OnDestroy {

  handoverStep: 'qr-view' | 'table-view' | 'confirmation-view' = 'qr-view';

  // QR code that contains a randomly generated uuid used for pairing with driver app
  uuid = uuidv4();
  qrdata = JSON.stringify({ action: 'handover', data: this.uuid });
  loading = false;

  candidatePackages: Package[];
  scannedPackages: Package[];

  private unsubscribeQRRefresh$ = new Subject<void>();
  private unsubscribePackageDataRefresh$ = new Subject<void>();

  constructor(
    private location: Location,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private packageService: PackageData,
    private handoverService: HandoverData,
  ) { }

  ngOnInit(): void {
    this.queryHandoverStatus();
  }

  ngOnDestroy(): void {
    this.unsubscribeQRRefresh$.next();
    this.unsubscribeQRRefresh$.complete();

    this.unsubscribePackageDataRefresh$.next();
    this.unsubscribePackageDataRefresh$.complete();
  }

  private queryHandoverStatus() {
    // Continiously check whether the QR code has been scanned and data has been updated, the action will expire after
    // 100 failed requests
    interval(3000)
      .pipe(
        take(100),
        takeUntil(this.unsubscribeQRRefresh$))
      .subscribe(() =>
        this.handoverService.findByUuid(this.uuid).subscribe(() => {
          this.unsubscribeQRRefresh$.next(); // stop qr status refresh
          console.clear();
          this.handoverStep = 'table-view';
          this.loadPackages();
        }));
  }

  private loadPackages() {
    // Refreshes data until leaving table-view
    interval(5000)
      .pipe(
        startWith(0),
        takeUntil(this.unsubscribePackageDataRefresh$),
      )
      .subscribe(_ => {
        this.packageService.getData().subscribe(packages =>
          this.candidatePackages = packages.filter(p =>
            p.status === (PackageStatus.CREATED || PackageStatus.COLLECTED)),
        );

        this.handoverService.findByUuid(this.uuid).subscribe(handover =>
          this.scannedPackages = handover.packages,
        );
      });
  }

  showConfirmationDialog() {
    this.unsubscribePackageDataRefresh$.next(); // stop the package table refresh

    this.handoverStep === 'confirmation-view';
    this.dialogService.open(ConfirmationPopupComponent, {
      context: {
        packages: this.scannedPackages,
        uuid: this.uuid,
      },
      autoFocus: false,
    });
  }

  rollback() {
    this.loading = true;
    this.handoverService.rollback(this.uuid).subscribe(_ => {
      this.toastrService.success('Packages status have reverted to their original state.', `Rollback Done`);
      this.location.back();
    });
  }
}

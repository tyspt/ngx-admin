import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { HandoverData } from 'app/@core/data/handover';
import { Package, PackageData, PackageStatus, PackageType } from 'app/@core/data/package';
import { environment } from 'environments/environment';
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

  loading = false;
  handoverStep: 'qr-view' | 'table-view' | 'confirmation-view';

  // Time system waits between QR code / handover list refreshs
  refreshRate = environment.refreshRate;

  // QR code that contains an uuid used for pairing with driver app
  uuid: string;
  qrdata: string;

  candidatePackages: Package[];
  scannedPackages: Package[];

  private unsubscribeQRRefresh$ = new Subject<void>();
  private unsubscribePackageDataRefresh$ = new Subject<void>();

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private packageService: PackageData,
    private handoverService: HandoverData,
  ) { }

  ngOnInit(): void {
    const uuid = this.activatedRoute.snapshot.paramMap.get('uuid');
    if (!uuid) {
      // Display QR view with a randomly generated handover uuid
      this.handoverStep = 'qr-view';
      this.uuid = uuidv4();
      this.qrdata = JSON.stringify({ action: 'handover', data: this.uuid });
      this.queryHandoverStatus();
    } else {
      // Skip QR view and directly go into table-view
      this.handoverStep = 'table-view';
      this.uuid = uuid;
      this.loadPackages();
    }
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
    interval(this.refreshRate)
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
    interval(this.refreshRate)
      .pipe(
        startWith(0),
        takeUntil(this.unsubscribePackageDataRefresh$),
      )
      .subscribe(_ => {
        this.packageService.getData().subscribe(packages =>
          this.candidatePackages = packages.filter(p =>
            (p.type === PackageType.INBOUND && p.status === PackageStatus.CREATED) ||
            (p.type === PackageType.OUTBOUND && p.status === PackageStatus.IN_TRANSPORT)),
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

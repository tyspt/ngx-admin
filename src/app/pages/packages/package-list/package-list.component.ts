import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Package, PackageData, PackageType } from 'app/@core/data/package';
import { Subscription } from 'rxjs';

import { PackageAddComponent } from '../package-add/package-add.component';

@Component({
  selector: 'ngx-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent implements OnInit, OnDestroy {

  packages: Package[];
  loading = true;

  type: 'inbound' | 'oubound';
  routerSubscription$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private packageService: PackageData,
    private dialogService: NbDialogService,
  ) {
    this.routerSubscription$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const oldType = this.type;
        this.type = this.activatedRoute.snapshot.params.type;
        oldType !== this.type && this.loadPackages();
      }
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.routerSubscription$.unsubscribe();
  }

  loadPackages() {
    this.loading = true;
    this.packageService.getData().subscribe(packages => {
      this.packages = packages.filter(p => p.type.toString().toLowerCase() === this.type);
      this.loading = false;
    });
  }

  showPackageAdd(event) {
    this.dialogService.open(PackageAddComponent, {
      context: {
        packageType: this.type === 'inbound' ? PackageType.INBOUND : PackageType.OUTBOUND,
      }, autoFocus: false,
    }).onClose.subscribe(_ => this.loadPackages());
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HandoverListComponent } from './handover-list/handover-list.component';
import { PackageAddComponent } from './package-add/package-add.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PackageHandoverComponent } from './package-handover/package-handover.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { PackagesComponent } from './packages.component';

const routes: Routes = [{
  path: '',
  component: PackagesComponent,
  children: [
    { path: '', component: PackageSearchComponent },
    { path: 'search', component: PackageSearchComponent },
    { path: 'search/:id', component: PackageSearchComponent },
    { path: 'list/:type', component: PackageListComponent },
    { path: 'add', component: PackageAddComponent },
    { path: 'handovers', component: HandoverListComponent },
    { path: 'handovers/add', component: PackageHandoverComponent },
    { path: 'handovers/edit/:uuid', component: PackageHandoverComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagesRoutingModule { }

export const routedComponents = [
  PackagesComponent,
  PackageListComponent,
  PackageSearchComponent,
  PackageDetailComponent,
  PackageAddComponent,
  PackageHandoverComponent,
  HandoverListComponent,
];

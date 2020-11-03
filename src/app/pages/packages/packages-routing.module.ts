import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageAddComponent } from './package-add/package-add.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { PackagesComponent } from './packages.component';

const routes: Routes = [{
  path: '',
  component: PackagesComponent,
  children: [
    {
      path: '',
      component: PackageListComponent
    },
    {
      path: 'search',
      component: PackageSearchComponent,
    },
    {
      path: 'add',
      component: PackageAddComponent
    }],
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
];

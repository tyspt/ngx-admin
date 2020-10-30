import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageListComponent } from './package-list/package-list.component';
import { PackagesComponent } from './packages.component';

const routes: Routes = [{
  path: '',
  component: PackagesComponent,
  children: [{
    path: 'list',
    component: PackageListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagesRoutingModule { }

export const routedComponents = [
  PackagesComponent,
  PackageListComponent
];

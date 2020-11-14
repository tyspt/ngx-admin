import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingsListComponent } from './buildings-list/buildings-list.component';
import { BuildingsComponent } from './buildings.component';


const routes: Routes = [{
  path: '',
  component: BuildingsComponent,
  children: [
    {
      path: 'list',
      component: BuildingsListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingsRoutingModule { }

export const routedComponents = [
  BuildingsComponent,
  BuildingsListComponent,
];

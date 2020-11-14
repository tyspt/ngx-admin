import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministratorsListComponent } from './administrators-list/administrators-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { UsersComponent } from './users.component';


const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    {
      path: 'employees',
      component: EmployeesListComponent,
    },
    {
      path: 'drivers',
      component: DriversListComponent,
    },
    {
      path: 'administrators',
      component: AdministratorsListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [
  UsersComponent,
  EmployeesListComponent,
  DriversListComponent,
  AdministratorsListComponent,
];

import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbRadioModule,
  NbSearchModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';
import { PackageListItemComponent } from './package-list/package-list-item/package-list-item.component';

@NgModule({
  imports: [
    ThemeModule,
    PackagesRoutingModule,
    NbAutocompleteModule,
    NbSearchModule,
    NbCardModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbIconModule,
    NbListModule
  ],
  exports: [],
  declarations: [
    ...routedComponents,
    PackageListItemComponent
  ],
})
export class PackagesModule { }

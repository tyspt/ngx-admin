import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSearchModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';

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
  ],
  exports: [],
  declarations: [
    ...routedComponents
  ],
})
export class PackagesModule { }

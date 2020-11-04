import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {
  NbActionsModule,
  NbAutocompleteModule,
  NbBadgeModule,
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
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PackageAddComponent } from './package-add/package-add.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { StatusRendererComponent } from './package-list/status-renderer.component';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';

@NgModule({
  entryComponents: [StatusRendererComponent],
  imports: [
    ThemeModule,
    PackagesRoutingModule,
    GoogleMapsModule,
    NbAutocompleteModule,
    NbSearchModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbIconModule,
    NbListModule,
    Ng2SmartTableModule,
    NbBadgeModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
    StatusRendererComponent,
    PackageDetailComponent,
    PackageAddComponent,
  ],
})
export class PackagesModule { }

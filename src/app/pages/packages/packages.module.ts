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
import { QRCodeModule } from 'angularx-qrcode';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { StatusRendererComponent } from './package-list/status-renderer.component';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';

@NgModule({
  entryComponents: [StatusRendererComponent],
  imports: [
    ThemeModule,
    PackagesRoutingModule,
    GoogleMapsModule,
    QRCodeModule,
    Ng2SmartTableModule,
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
    NbBadgeModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
    StatusRendererComponent,
  ],
})
export class PackagesModule { }

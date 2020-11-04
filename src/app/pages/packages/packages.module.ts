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
import { QrPrintoutComponent } from './package-add/qr-printout/qr-printout.component';
import { ConfirmationPopupComponent } from './package-handover/confirmation-popup/confirmation-popup.component';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';
import { SharedSmartTableComponent } from './shared-smart-table/shared-smart-table.component';
import { StatusRendererComponent } from './shared-smart-table/status-renderer.component';

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
    SharedSmartTableComponent,
    ConfirmationPopupComponent,
    QrPrintoutComponent,
  ],
})
export class PackagesModule { }

import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  NbSpinnerModule,
  NbUserModule,
} from '@nebular/theme';
import { QRCodeModule } from 'angularx-qrcode';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WebcamModule } from 'ngx-webcam';

import { ThemeModule } from '../../@theme/theme.module';
import { CameraPreviewComponent } from './package-add/camera-preview/camera-preview.component';
import { ConfirmationPopupComponent } from './package-handover/confirmation-popup/confirmation-popup.component';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';
import { QrPrintoutComponent } from './qr-printout/qr-printout.component';
import { SharedSmartTableComponent } from './shared-smart-table/shared-smart-table.component';
import { StatusRendererComponent } from './shared-smart-table/status-renderer.component';

@NgModule({
  entryComponents: [StatusRendererComponent],
  imports: [
    ThemeModule,
    PackagesRoutingModule,
    GoogleMapsModule,
    QRCodeModule,
    WebcamModule,
    FormsModule,
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
    NbSpinnerModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
    StatusRendererComponent,
    SharedSmartTableComponent,
    ConfirmationPopupComponent,
    QrPrintoutComponent,
    CameraPreviewComponent,
  ],
  providers: [ DatePipe ],
})
export class PackagesModule { }

import { NgModule } from '@angular/core';
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
import { StatusRendererComponent } from './package-list/status-renderer.component';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PackageAddComponent } from './package-add/package-add.component';

@NgModule({
  entryComponents: [StatusRendererComponent],
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

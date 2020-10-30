import { NgModule } from '@angular/core';
import { NbCardModule, NbSearchModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    PackagesRoutingModule,
    NbSearchModule,
    NbCardModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents
  ],
})
export class PackagesModule { }

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    PackagesRoutingModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents
  ],
})
export class PackagesModule { }

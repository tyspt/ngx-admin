import { NgModule } from '@angular/core';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, UsersRoutingModule } from './users-routing.module';

@NgModule({
  entryComponents: [],
  imports: [
    ThemeModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbSpinnerModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
  providers: [],
})
export class UsersModule { }

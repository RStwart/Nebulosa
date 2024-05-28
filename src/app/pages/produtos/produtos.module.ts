import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ProdutosRoutingModule, routedComponents } from './produtos-routing.module';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ProdutosRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    // FsIconComponent,
  ],
})
export class ProdutosModule { }
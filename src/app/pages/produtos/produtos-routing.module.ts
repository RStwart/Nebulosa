import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { CadProdutosComponent } from './cad-produtos/cad-produtos.component';
// import { TreeGridComponent } from './tree-grid/tree-grid.component';

const routes: Routes = [{
  path: '',
  component: ProdutosComponent,
  children: [
    {
      path: 'cad-produtos',
      component: CadProdutosComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule { }

export const routedComponents = [
  ProdutosComponent,
  CadProdutosComponent,
  // TreeGridComponent,
];

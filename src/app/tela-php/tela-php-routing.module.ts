import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaPhpPage } from './tela-php.page';

const routes: Routes = [
  {
    path: '',
    component: TelaPhpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaPhpPageRoutingModule {}

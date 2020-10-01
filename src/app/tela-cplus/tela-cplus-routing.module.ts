import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCplusPage } from './tela-cplus.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCplusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCplusPageRoutingModule {}

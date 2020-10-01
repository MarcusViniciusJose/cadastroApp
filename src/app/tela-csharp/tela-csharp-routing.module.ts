import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCsharpPage } from './tela-csharp.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCsharpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCsharpPageRoutingModule {}

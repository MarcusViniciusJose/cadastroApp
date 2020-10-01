import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaJavaPage } from './tela-java.page';

const routes: Routes = [
  {
    path: '',
    component: TelaJavaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaJavaPageRoutingModule {}

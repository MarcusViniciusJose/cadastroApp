import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaHtml5Page } from './tela-html5.page';

const routes: Routes = [
  {
    path: '',
    component: TelaHtml5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaHtml5PageRoutingModule {}

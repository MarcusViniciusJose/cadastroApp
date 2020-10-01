import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaHtml5PageRoutingModule } from './tela-html5-routing.module';

import { TelaHtml5Page } from './tela-html5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaHtml5PageRoutingModule
  ],
  declarations: [TelaHtml5Page]
})
export class TelaHtml5PageModule {}

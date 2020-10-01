import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCssPageRoutingModule } from './tela-css-routing.module';

import { TelaCssPage } from './tela-css.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCssPageRoutingModule
  ],
  declarations: [TelaCssPage]
})
export class TelaCssPageModule {}

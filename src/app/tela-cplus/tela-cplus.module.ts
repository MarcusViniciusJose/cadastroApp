import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCplusPageRoutingModule } from './tela-cplus-routing.module';

import { TelaCplusPage } from './tela-cplus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCplusPageRoutingModule
  ],
  declarations: [TelaCplusPage]
})
export class TelaCplusPageModule {}

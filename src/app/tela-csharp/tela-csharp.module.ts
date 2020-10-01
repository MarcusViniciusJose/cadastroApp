import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCsharpPageRoutingModule } from './tela-csharp-routing.module';

import { TelaCsharpPage } from './tela-csharp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCsharpPageRoutingModule
  ],
  declarations: [TelaCsharpPage]
})
export class TelaCsharpPageModule {}

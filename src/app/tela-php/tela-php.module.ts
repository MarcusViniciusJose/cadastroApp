import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaPhpPageRoutingModule } from './tela-php-routing.module';

import { TelaPhpPage } from './tela-php.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaPhpPageRoutingModule
  ],
  declarations: [TelaPhpPage]
})
export class TelaPhpPageModule {}

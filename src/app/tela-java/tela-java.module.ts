import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaJavaPageRoutingModule } from './tela-java-routing.module';

import { TelaJavaPage } from './tela-java.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaJavaPageRoutingModule
  ],
  declarations: [TelaJavaPage]
})
export class TelaJavaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarArchivosPageRoutingModule } from './cargar-archivos-routing.module';

import { CargarArchivosPage } from './cargar-archivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarArchivosPageRoutingModule
  ],
  declarations: [CargarArchivosPage]
})
export class CargarArchivosPageModule {}

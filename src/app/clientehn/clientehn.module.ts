import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { ClientehnPageRoutingModule } from './clientehn-routing.module';
import { ClientehnPage } from './clientehn.page';
import { MaskitoModule } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientehnPageRoutingModule,
    MaskitoModule,
    SharedPipesModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ClientehnPage]
})
export class ClientehnPageModule {}

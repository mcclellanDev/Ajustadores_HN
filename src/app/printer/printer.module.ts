import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinterPageRoutingModule } from './printer-routing.module';

import { PrinterPage } from './printer.page';
import { FormularioPageModule } from "../formulario/formulario.module";

@NgModule({
    declarations: [PrinterPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrinterPageRoutingModule,
        FormularioPageModule
    ]
})
export class PrinterPageModule {}

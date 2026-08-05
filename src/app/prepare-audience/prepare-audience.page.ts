import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { abogadosAudiencias } from '../interfaces/arrays';
import * as $ from 'jquery';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-prepare-audience',
  templateUrl: './prepare-audience.page.html',
  styleUrls: ['./prepare-audience.page.scss'],
})
export class PrepareAudiencePage implements OnInit {
  idAtencion: any; isLoading:boolean = false; results = []; abogadoNombre:string; lugarAudiencia:string;
  fechaAudiencia:any; formateadaAudiencia:any; idTablaDeAjustador:any;
  abogadosAudiencias = []; idAbogado: any;  laFecha: any;  formattedDate: any;
  dateFormat: any;  timeFormat: any;  idAgente: any; canScheduleAudience:boolean = false;
  private readonly missingClientDataMessage = 'No es posible agendar esta audiencia todavía. Primero se deben enviar los datos del formulario de cliente para generar la información base de la atención.';
  
  
  constructor(private router: Router, private alert: AlertController, private api:ApiService, private toaster:ToastService) { 
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    console.log(state.data[1])
    this.idAtencion = state.data[1].idAtencion;

    console.log('La atencion es '+this.idAtencion);
    

  }

  ngOnInit() {
    console.log('La atencion es '+this.idAtencion);
    console.log('EL agente actual es '); console.dir(this.api.currentUser);
    this.idAgente = this.api.currentUser.ProveedorAgenteId;

    setTimeout(() => {
      this.api.Abogados(3).pipe( 
        finalize(async ()=>{
          console.log('fin');
        })
      ).subscribe(
         (res) =>{
          if (res) {
            this.abogadosAudiencias = res;
            this.results = res;
            console.log('LOs abogados son ')
            console.dir(this.abogadosAudiencias)
          }
          
        },
        async (res) => {
          
          const alert = await this.alert.create({
            header:'HELP',
            message:res.error.Message,
            buttons:['Ok']
            
          });
          await alert.present();
        }
      )

      this.api.ObtenerIdTablaAjustador(this.idAtencion).pipe( 
        finalize(async ()=>{
          console.log('fin');
        })
      ).subscribe(
         (res) =>{

          //alert('Este es el id de tabla de ajustador '+res.length);
          if (Array.isArray(res) && res.length > 0 && res[0]?.IdAudiencia) {

            //alert('Este es el id de tabla de ajustador '+res);
            console.log('Este es el id de tabla de ajustador ');
            console.dir(res);
            //alert('Este es el id de tabla de ajustador '+res[0].IdAudiencia);
            this.canScheduleAudience = true;
            $('#submitAudience').prop('disabled', false);
            let disId = res[0].IdAudiencia.toString();
            this.idTablaDeAjustador = res[0].IdAudiencia.toString();//disId.replace(/,/g, '');
            console.dir('Este es el id de tabla de ajustador '+this.idTablaDeAjustador);
            console.dir(this.idTablaDeAjustador);
            /**/
          } else {
            this.blockAudienceScheduling();
          }

         }, (error) => {
          console.log('Este es el error '+error);
          console.dir(error.error.Message);
          this.blockAudienceScheduling();
         }

        )
    }, 1000);
    
    
    this.abogadoNombre = 'Seleccionar Abogado';
  }

  closeAbogadosSearch(){
    $('#abogadosDatos').fadeIn('xslow');
    $('#abogadosLista').fadeOut('xslow');
  }

  handleInput(event){
    const query = event.target.value.toLowerCase();
    this.results = this.abogadosAudiencias.filter((d) => 
      d.AgenteNombre.toLowerCase().indexOf(query) > -1
    );
  }

  goSearch() {
    this.results = this.abogadosAudiencias;
    console.dir(this.results);
    $('#abogadosDatos').fadeOut('xslow');
    $('#abogadosLista').fadeIn('xslow');
  }

  selectAbogado(index, abogadoId){
    this.idAbogado = abogadoId;
    for (let index = 0; index < this.abogadosAudiencias.length; index++) {
      const element = this.abogadosAudiencias[index];
      if (abogadoId==element.IdAjustador) {
        console.log('El abogado seleccionado es '+element.AgenteNombre);
        this.abogadoNombre = element.AgenteNombre;
        setTimeout(() => {
          $('#closeAbogadosSearchButton').click();
        }, 300);
      }
    }
    
  }

  setLugarAudiencia(event){
    console.log('target : '+event.target.value);
    console.log('detail : '+event.detail.value);
    console.log('lugarAudiencia : '+this.lugarAudiencia);
  }

  marcarFechaAudiencia(fechaAudiencia){
    this.laFecha = new Date(fechaAudiencia).toISOString();

    this.formateadaAudiencia = new Date(fechaAudiencia).toLocaleString(); 
    this.dateFormat = fechaAudiencia.split('T')[0]; 
    let timeString = this.formateadaAudiencia.split(', ')[1];

    console.log('Hora completa : '+fechaAudiencia.split('T')[1]);
    this.timeFormat = timeString.split(' ')[0];

    setTimeout(() => {
      this.formattedDate = this.formatDateForSQL();
    }, 300);
  }

  formatDateForSQL() {
    let date = new Date(this.fechaAudiencia); 
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes (1-12)
    const day = String(date.getDate()).padStart(2, '0'); // Día del mes
    const hours = String(date.getHours()).padStart(2, '0'); // Horas (0-23)
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutos (0-59)
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Segundos (0-59)
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

  audienceSave(){
    if (!this.canScheduleAudience || !this.idTablaDeAjustador) {
      this.blockAudienceScheduling();
      return;
    }
    
    let agente:any = localStorage.getItem('ajustadorActual');
    let agenteActual:any = JSON.parse(agente);
    //let idAgente = agenteActual.ProveedorAgenteId;
    this.isLoading = true;
    let jsonAudiencia = {
      IdAjustadorAudiencia: this.idTablaDeAjustador,
      RefProveedorAgenteAbogadoId: this.idAbogado,
      AgendarAudiencia: 1,
      FechaHora: this.formattedDate,
      Fecha: this.dateFormat,
      Hora: this.timeFormat,
      Lugar: this.lugarAudiencia,
      idAgente: this.idAgente
    }

    this.api.ActualizarAudicion(jsonAudiencia).pipe( 
      finalize(async ()=>{
        console.log('fin');
      })
    ).subscribe(
       (res) =>{
        if (res) {
          this.toaster.presentToastAlert('Audiencia Actualizada exitosamente!', 'top', 'primary', 10000);
          this.isLoading = false;
        }
       },
       (error) => {
        console.log('Este es el error '+error);
        console.dir(error.error.Message);
        this.toaster.presentToastAlert(error.error.Message, 'top', 'danger', 10000);
        this.isLoading = false;
       }
      )

  }

  private blockAudienceScheduling() {
    this.canScheduleAudience = false;
    this.idTablaDeAjustador = null;
    this.isLoading = false;
    $('#submitAudience').prop('disabled', true);
    this.toaster.presentToastDangerOk(this.missingClientDataMessage, 'middle', 'audiencia-pendiente');
  }

}

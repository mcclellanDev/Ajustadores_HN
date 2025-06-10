import { StorageService } from './../services/storage.service';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-end-process',
  templateUrl: './end-process.page.html',
  styleUrls: ['./end-process.page.scss'],
})
export class EndProcessPage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  idAtencion:any;   codigoReclamoFicohsa: any;  codigoBPMFicohsa: any; dataInterval: any; storageCache:any=[]; isLoading:boolean=false;
  constructor(private routeActive: ActivatedRoute, private storageService:StorageService,
    private router:Router) { 
    this.routeActive.queryParams.subscribe(params => {
      this.idAtencion= params.Id; this.codigoReclamoFicohsa = params.CodigoReclamoFicohsa; this.codigoBPMFicohsa = params.CodigoBPMFicohsa;
    })
  }

  ngOnInit() {
    this.dataInterval = setInterval(() => { this.checkStorage() }, 1000);
    this.outletDeactivate();
  }

  outletDeactivate(){
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tab1")
        this.outlet.deactivate();
    });
  }

  checkStorage(){
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect') == 0) {
        this.storageCache.push(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('danioPic') == 0) {
        this.storageCache.push(localStorage.key(i));
      } 
      if (localStorage.key(i).indexOf('danioOtro') == 0) {
        this.storageCache.push(localStorage.key(i));
      } 

      if (localStorage.key(i).indexOf('datos-') == 0) {
        this.storageCache.push(localStorage.key(i));
      } 

      if (localStorage.key(i).indexOf('dataProcess') == 0) {
        this.storageCache.push(localStorage.key(i));
      } 

      
      if (i == (localStorage.length-1)) {
        this.isLoading = false;
        if (this.storageCache.length>0) {
          console.log('limpiando ... ')
          this.storageService.clearSiniestroArrays();
          this.clearSegmentsStorage();
        }else{
          
          this.storageCache = [];
          clearInterval(this.dataInterval);
        }
      }
    }
  }

  goHome() {
    window.location.reload();
  }

  clearSegmentsStorage() {

    // Segmento Solicitante
    localStorage.removeItem('dataProcess-CorreoElectronico');
    localStorage.removeItem('dataProcess-FechaNacimientoConductor');
    localStorage.removeItem('dataProcess-Edad');
    localStorage.removeItem('dataProcess-TerceroResponsable');
    localStorage.removeItem('dataProcess-LicenciaEstadoCulpable');
    
    localStorage.removeItem('elTipoLicencia');
    localStorage.removeItem('elGenero');
    localStorage.removeItem('elParentesco');
    localStorage.removeItem('tipoSolicitante');
    localStorage.removeItem('elSolicitante');
    localStorage.removeItem('tipoCobertura');
    localStorage.removeItem('laCobertura');
    localStorage.removeItem('elNombreCliente');
    localStorage.removeItem('laIdentidadCliente');
    localStorage.removeItem('elTelefonoOrigen');
    localStorage.removeItem('elCorreoElectronico');

    // Segmento Vehiculo
    localStorage.removeItem('elTipoPesado');
    localStorage.removeItem('elKilometraje');

    // Segmento Caracteristicas
    localStorage.removeItem('elTraslado');
    localStorage.removeItem('elTipoGrua');
    localStorage.removeItem('elTallerId');
    localStorage.removeItem('elTallernombre');
    localStorage.removeItem('elTallerOtro');
    localStorage.removeItem('elTallerOtroDireccion');
    localStorage.removeItem('laObservacionTaller');
    localStorage.removeItem('elTipoCombustibleId');
    localStorage.removeItem('elTipoCombustible');
    localStorage.removeItem('elAC');
    localStorage.removeItem('elBA');
    localStorage.removeItem('elCentra');
    localStorage.removeItem('laTransmisionId');
    localStorage.removeItem('laTransmision');
    localStorage.removeItem('elRetrovisor');
    localStorage.removeItem('elOverfender');
    localStorage.removeItem('laColaPato');
    localStorage.removeItem('laCinta');
    localStorage.removeItem('losRines');

    // Segmento Danios
    localStorage.removeItem('elCompromisoPago');
    localStorage.removeItem('elCompromisoPagoObservacion');
    localStorage.removeItem('laReserva');
    localStorage.removeItem('elTipoSiniestro');
    localStorage.removeItem('laDescripcion');
    localStorage.removeItem('lasObservaciones');

    localStorage.removeItem('coords-latitud');
    localStorage.removeItem('coords-longitud');
    
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clearSiniestroArrays(){
    // variables cliente
    localStorage.removeItem('dataProcess-Nombre');
    localStorage.removeItem('dataProcess-AutoridadInvolucrada');
    localStorage.removeItem('dataProcess-NombreConductor');
    localStorage.removeItem('dataProcess-IdentidaConductor');
    localStorage.removeItem('dataProcess-Poliza');
    localStorage.removeItem('dataProcess-NombreAtribuyeAccidente');
    localStorage.removeItem('dataProcess-TelefonoConductor');
    localStorage.removeItem('dataProcess-TelefonoAsegurado');
    localStorage.removeItem('dataProcess-CelularConductor');
    localStorage.removeItem('dataProcess-CelularAsegurado');
    localStorage.removeItem('dataProcess-CorreoElectronico');
    localStorage.removeItem('dataProcess-Licencia');
    localStorage.removeItem('dataProcess-Blindado');
    localStorage.removeItem('dataProcess-FechaNacimientoConductor');
    localStorage.removeItem('dataProcess-Edad');
    localStorage.removeItem('dataProcess-AseguradoUsoPoliza');
    localStorage.removeItem('dataProcess-PorqueNoUsoServicioAsistencia');
    localStorage.removeItem('dataProcess-PruebaAlcoholemia');
    localStorage.removeItem('dataProcess-AgendarAudiencia');
    localStorage.removeItem('dataProcess-VehiculoDetenido');
    localStorage.removeItem('dataProcess-ConductorDetenido');
    localStorage.removeItem('dataProcess-VehiculoVolcado');
    localStorage.removeItem('dataProcess-DireccionEnvioCorrespondencia');
    localStorage.removeItem('dataProcess-DireccionConductor');
    localStorage.removeItem('dataProcess-DondeSeEncuentraVehiculo');
    localStorage.removeItem('dataProcess-TerceroResponsable');
    localStorage.removeItem('dataProcess-UbicacionVehiculoDetenido');
    localStorage.removeItem('dataProcess-DescripcionAudiencia');
    localStorage.removeItem('dataProcess-LicenciaEstado');
    localStorage.removeItem('dataProcess-Vigencia');
    localStorage.removeItem('dataProcess-RefTipoLicenciaId');
    localStorage.removeItem('dataProcess-TipoLicencia');
    localStorage.removeItem('dataProcess-NumeroUnidad');
    localStorage.removeItem('dataProcess-DescripcionTercerosMuertos');
    localStorage.removeItem('dataProcess-DescripcionTercerosHeridos');
    localStorage.removeItem('dataProcess-Descripcion');
    localStorage.removeItem('dataProcess-DescripcionDanio');
    localStorage.removeItem('dataProcess-RefTipoConductorId');
    localStorage.removeItem('dataProcess-TercerosMuertos');
    localStorage.removeItem('dataProcess-TercerosHeridos');
    localStorage.removeItem('dataProcess-Parentesco');
    localStorage.removeItem('dataProcess-Poliza');
    localStorage.removeItem('dataProcess-Latitud');
    localStorage.removeItem('dataProcess-Longitud');
    localStorage.removeItem('dataProcess-AnioVehiculo');
    localStorage.removeItem('dataProcess-ModeloVehiculo');
    localStorage.removeItem('dataProcess-PlacaVehiculo');
    localStorage.removeItem('dataProcess-ColorVehiculo');
    localStorage.removeItem('dataProcess-MarcaVehiculo');
    localStorage.removeItem('dataProcess-ChasisVehiculo');
    localStorage.removeItem('dataProcess-Motor');
    

    // variables ajustador
    localStorage.removeItem('datos-Identificacion');
    localStorage.removeItem('datos-IdentidaConductor');
    localStorage.removeItem('datos-Nombre');
    localStorage.removeItem('datos-NombreConductor');
    localStorage.removeItem('datos-Licencia');
    localStorage.removeItem('datos-TipoLicencia');
    localStorage.removeItem('datos-RefTipoLicenciaId');
    localStorage.removeItem('datos-Sexo');
    localStorage.removeItem('datos-Parentesco');
    localStorage.removeItem('datos-RefTipoSolicitanteInformeAjusteId');
    localStorage.removeItem('datos-Identificacion');
    localStorage.removeItem('datos-IdentidaConductor');
    localStorage.removeItem('datos-TipoAcuerdoFicohsa');
    localStorage.removeItem('datos-TelefonoConductor');
    localStorage.removeItem('datos-CelularConductor');
    localStorage.removeItem('datos-CorreoElectronico');
    localStorage.removeItem('datos-MarcaVehiculo');
    localStorage.removeItem('datos-ModeloVehiculo');
    localStorage.removeItem('datos-ChasisVehiculo');
    localStorage.removeItem('datos-PlacaVehiculo');
    localStorage.removeItem('datos-Poliza');
    localStorage.removeItem('datos-Kilometraje');
    localStorage.removeItem('datos-TallerMecanicoId');
    localStorage.removeItem('datos-ObservacionTaller');
    localStorage.removeItem('datos-RefTipoCombustibleId');
    localStorage.removeItem('datos-AC');
    localStorage.removeItem('datos-BolsaAire');
    localStorage.removeItem('datos-CierreCentralizado');
    localStorage.removeItem('datos-Mecanico');
    localStorage.removeItem('datos-RetrovisorElectronico');
    localStorage.removeItem('datos-Overfenders');
    localStorage.removeItem('datos-ColaPato');
    localStorage.removeItem('datos-CintaDecorativa');
    localStorage.removeItem('datos-Rines');
    localStorage.removeItem('datos-DescripcionDanio');
    localStorage.removeItem('datos-CulpableCompromisoPago');
    localStorage.removeItem('datos-ObservacionCompromisoPago');
    localStorage.removeItem('datos-Observaciones');
    localStorage.removeItem('datos-ObservacionesFinales');
    localStorage.removeItem('datos-DanioLataralIzquierdo');
    localStorage.removeItem('datos-DanioLateralDerecho');
    localStorage.removeItem('datos-VehiculoVolcado');
    localStorage.removeItem('datos-DanioFrontal');
    localStorage.removeItem('datos-DanioTrasero');
    localStorage.removeItem('datos-FechaHora');
    localStorage.removeItem('datos-AnioVehiculo');

    localStorage.removeItem('deudaSent');
    

    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('daniosSelectOtro') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('TipoReparacion') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('TipoReparacionIndex') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('TipoReparacionX') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('TipoReparacionIndexX') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('daniosSelectCulpa') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('TipoReparacionCulpa') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('TipoReparacionCulpaIndex') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('danioPic') == 0) {
          localStorage.removeItem(localStorage.key(i));
      } 
      if (localStorage.key(i).indexOf('danioOtro') == 0) {
        localStorage.removeItem(localStorage.key(i));
      } 
      if (localStorage.key(i).indexOf('danioOtroCulpa') == 0) {
        localStorage.removeItem(localStorage.key(i));
      } 
      if (localStorage.key(i).indexOf('deuda-') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }

      if (localStorage.key(i).indexOf('acompaniante-') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }

      if (localStorage.key(i).indexOf('lesionados-') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('propiedadesprivadas-') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  }
}

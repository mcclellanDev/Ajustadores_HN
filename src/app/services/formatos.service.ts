import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatosService {
  fHora:any;
  constructor() { }

  formatearFechaSiniestro(mydate){
    console.log("Esta es mi fecha :");
    console.log(mydate);
    var dateFormat = mydate.split('T')[0]; 
    var timeFormat = mydate.split('T')[1];

    
    this.fHora = timeFormat.toString().substring(0,5);
    let anio = dateFormat.toString().substring(0,4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);

    let laFormateada = dia+'-'+mes+'-'+anio;
     console.log(laFormateada);
     let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
     }
     console.dir(fechaArray);
     return fechaArray;
  }

  formatearFechaNacimiento(mydate){
    console.log("Esta es mi fecha :");
    console.log(mydate);
    var dateFormat = mydate.split('T')[0]; 
    var timeFormat = mydate.split('T')[1];

    
    this.fHora = timeFormat.toString().substring(0,5);
    let anio = dateFormat.toString().substring(0,4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);

    let laFormateada = dia+'-'+mes+'-'+anio;
     console.log(laFormateada);
     let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
     }
     console.dir(fechaArray);
     return fechaArray;
  }

  formatearVigencia(Vdate){
    var dateFormat = Vdate.split('T')[0]; 
    //console.log('dateFormat '+ dateFormat)
    let dia = dateFormat.toString().substring(0,2);
    let mes = dateFormat.toString().substring(3, 5);
    let anio = dateFormat.toString().substring(6);

    let laFormateada = anio+'-'+mes+'-'+dia;
    //this.calcularVigencia(laFormateada);
     return laFormateada;
  }

  calcularVigencia(Vdate){
    let now = new Date().toISOString();
    let nowDate = now.split('T')[0];
    let vigente:boolean;
    //console.log('Licencia está vigente? ');
    console.log(new Date(nowDate)+', '+new Date(Vdate));
    //console.log(nowDate > Vdate);
    if(new Date(nowDate) > new Date(Vdate)){
      vigente = false;
    }else{
      vigente = true;
    }

    return vigente;
  }

  compararFechas(SFecha, IFecha){
    let brakePoint = 'T';
    
    if (SFecha.toString().indexOf('T') == -1) {
      SFecha = SFecha.toISOString();
    }else{}

    
    if (IFecha.toString().indexOf('T') == -1) {
      IFecha = IFecha.toISOString();
    }else{}

    

    let valida:boolean;
    alert(SFecha.split(brakePoint)[0]+', '+IFecha.split(brakePoint)[0]+', '+((SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0])));
    console.log(SFecha.split(brakePoint)[0]+', '+IFecha.split(brakePoint)[0]);
    console.log(SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]);
    if(SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]){
      valida = true;
    }else{
      valida = false;
    }
    return valida;
  }


  desformatearFecha(Ddate){
    let revertida;
    revertida = new Date(Ddate).toISOString();
     return revertida;
  }
}

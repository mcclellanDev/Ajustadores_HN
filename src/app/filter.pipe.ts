import { filter } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], buscar:string, tipo: number): any[] {
    if (buscar ==="" || buscar === " "){
      return value;
    }else{
      if(tipo ===1 ){
        var arreglo = value.filter( data =>{
          return data.DESCRIPCION.toString().toLowerCase().includes(buscar.toString().toLocaleLowerCase())
        });
        return arreglo;
      }
      if (tipo === 2){
        var arreglo = value.filter( data =>{
          return data.Cliente.toString().toLowerCase().includes(buscar.toString().toLocaleLowerCase())
        });
        return arreglo;
      }
      else{
        return value;
      }
      
    }
  }

}

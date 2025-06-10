import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {
  paisId: number;

  constructor() { }

  convertCountryCode(codigoPais){
    
    if (codigoPais == 'HN') {
      this.paisId = 3;
    }
    if (codigoPais == 'GT') {
      this.paisId = 4;
    }
    //alert('Mi Id de país es '+this.paisId)
    return this.paisId;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  limpiarCache(){
    localStorage.removeItem('dSignatureAsegurado');
    localStorage.removeItem('firmasAsegurados');window.location.reload();
    
  }
}

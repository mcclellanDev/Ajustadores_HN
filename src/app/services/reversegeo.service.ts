import { Injectable } from '@angular/core';
import { imagePrefix, banderaPais, fondos } from '../environments/default-images';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ActionSheetController, AlertController, LoadingController, ToastController, Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ReversegeoService {
  laLocalidad: NativeGeocoderResult[];
  miLocalidad: string;
  miPais: string;
  miPaisNombre: string;
  banderaPais: any;
  codigoPais: string;

  constructor(private geo: NativeGeocoder, private platform:Platform) { }

  locate(latitud, longitud){
    if (this.platform.is('android')) {
      this.geo.reverseGeocode(latitud, longitud).then((result: NativeGeocoderResult[]) => {
        this.laLocalidad = result;
        console.log("Mi localidad es ");
        console.dir(this.laLocalidad)
        this.miLocalidad = JSON.stringify(this.laLocalidad);
        this.miPais = this.laLocalidad[0].countryCode;
        this.miPaisNombre = this.laLocalidad[0].countryName;
        localStorage.setItem('codigoPais', this.miPais);
        localStorage.setItem('nombrePais', this.miPaisNombre);
        localStorage.setItem('miLocalidad', this.miLocalidad);
        this.identificarPais();
      })
    }else{
      this.miPais = "HN";
      this.identificarPais();
    }
  }

  identificarPais() {
    //alert('Identificando...')
    if (this.miPais == "HN") {
      this.banderaPais = banderaPais;
      this.codigoPais = 'hn';
      //this.getTipoLicencia(3);
    } else if (this.miPais == "GT") {
      this.banderaPais = '../../assets/img/flag-round-gt.png';
      this.codigoPais = 'gt';
      //this.getTipoLicencia(4);
    }
  }
}

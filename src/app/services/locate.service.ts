import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@capacitor/geolocation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocateService {
  laLocalidad:any=[];
  miLocalidad:any=[];
  coordinates:any;
  geoInterval:any;
  miPais:any;
  miPaisNombre:any;

  constructor(private geo:NativeGeocoder) { }

  async getCountry(){
    this.coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000
    });
    console.log("Tengo unas coordenadas ");
    console.dir(this.coordinates);  
    let precision = this.coordinates.coords.accuracy;

    if (precision < 30) {
      clearInterval(this.geoInterval);
        this.geo.reverseGeocode(this.coordinates.coords.latitude, this.coordinates.coords.longitude).then((result: NativeGeocoderResult[]) =>
      {
        this.laLocalidad = result;
        console.log("Mi localidad es ");
        console.dir(this.laLocalidad)
        this.miLocalidad = JSON.stringify(this.laLocalidad);
        this.miPais = this.laLocalidad[0].countryCode;
        this.miPaisNombre = this.laLocalidad[0].countryName;
        localStorage.setItem('codigoPais', this.miPais);
        localStorage.setItem('nombrePais', this.miPaisNombre);
      })
    }else{
      this.geoInterval = setInterval(()=>{this.getCountry()} ,  1000);
    } 
  }
}

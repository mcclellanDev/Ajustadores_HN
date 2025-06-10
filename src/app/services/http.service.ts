import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = environment.api_url;
  constructor(private httpClient: HttpClient) 
  { }
  request = async ( data:any, urlRequest:string) => {
    const options ={
      url: `${this.apiUrl}`+urlRequest,
      headers:{'X-Fake-Header':'Fake-Value',
                'Content-Type': 'application/json',
                "Accept": "*/*",

      },
      data: data
    }
    console.log(data)
    console.log(options);
    const reponse: HttpResponse= await CapacitorHttp.post(options);
    return from(CapacitorHttp.post(options));
    //return CapacitorHttp.post(options);
  };
  consulta(data: any, url: string) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    console.log(`${this.apiUrl}`+url)
    return this.httpClient.post(`${this.apiUrl}`+url, data, { headers });
  }
}

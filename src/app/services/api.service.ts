import { environment, environment_local } from 'src/environments/environment';
import { ItemsData, cacheIndexArray, valoresPredeterminados } from './../environments/predeterminados';
import { User } from './../interfaces/user';
import { helpFilesUrl } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap, switchMap, finalize, catchError, timeout, map } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Capacitor, CapacitorHttp, HttpResponse } from '@capacitor/core';
import { firmaDemoAjustador, emptySignature, emptySignatureWhite } from '../environments/signatures';
import { RequestOptions } from 'https';
import { promise } from 'protractor';
import * as xml2js from 'xml2js';
import * as $ from 'jquery';
import { ToastService } from './toast.service';
import { error } from 'console';
import { versionAndroid } from '../interfaces/variables';
import { SavedLoginSessionsService } from './saved-login-sessions.service';
import { BpmClaimValidationResponse } from '../interfaces/bpm-claim-validation';
import {
  HTTP_TIMEOUT_BPM_MS,
  HTTP_TIMEOUT_DEFAULT_MS,
  HTTP_TIMEOUT_PHOTOS_MS,
  HTTP_TIMEOUT_SINIESTRO_MS,
  NETWORK_NO_RESPONSE_MESSAGE,
  toNetworkHttpError,
  unwrapCapacitorHttpData
} from '../utils/http-network.util';
//Constantes
const ACCESS_TOKEN_KEY = 'MY_ACCESS_CODE' //this change maybe later
const USER_DATA = 'MY_USER_DATA' // CHANGE LATER TOO
const PUSH_TOKEN = 'MY_PUSH_TOKEN'// the value is generate by onesignal is send when login
const APP_VERSION_KEY = 'APP_VERSION_CODE';
const PENDING_SESSION_RECOVERY_KEY = 'pendingSessionRecovery';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  firmaDemoAjustador:any = firmaDemoAjustador
  emptySignature:any= emptySignature
  emptySignatureWhite:any = emptySignatureWhite
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  currentAccessToken= null;
  currentUser: User = null;
  urlRequest:string;
  // Environment test
  /*
  whiteList=[`${environment.api_url}/Login/Autenticacion`]

  apiUrl = environment.api_url;
  */
  
  // Environment producción
 whiteList=[`${environment.api_url}/Login/Autenticacion`] 
 apiUrl = environment.api_url;

  filesUrl = helpFilesUrl.api_url;
  idAtencion: string;
  siniestroData: any = [];
  coberturas: any = [];
  private silentLoginPromise: Promise<boolean> | null = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private toaster: ToastService,
    private savedSessions: SavedLoginSessionsService
  ) {
    localStorage.setItem('apiUrl', this.apiUrl);
  }
   async request(urlRequest:string, data:any){
    const options ={
      url: this.apiUrl+urlRequest,
      headers:{'X-Fake-Header':'Fake-Value'},
      params: data
    }
    console.log(options);
    const response: HttpResponse = await CapacitorHttp.post(options);
  }
  async loadToken(): Promise<boolean>{
    const token=  await Preferences.get({key: ACCESS_TOKEN_KEY}); // maybe need use JSON.parse
    const user = await Preferences.get({key: USER_DATA});// this is the local variable user
    if(token && token.value && user && user.value){
      this.currentAccessToken= token.value;
      this.currentUser = JSON.parse(user.value);
      this.isAuthenticated.next(true);
      localStorage.setItem('ajustadorActual', user.value);
      return true;
    }else{
      this.isAuthenticated.next(false);
      return false;
    }
  }

  private normalizeListResponse(res: any): any[] {
    if (res == null) {
      return [];
    }
    return Array.isArray(res) ? res : [res];
  }

  private unwrapHttpList(source$: Observable<any>): Observable<any> {
    return source$.pipe(
      map((res: any) => this.normalizeListResponse(unwrapCapacitorHttpData(res))),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }

  private authHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*'
    };
    if (this.currentAccessToken) {
      headers.Authorization = this.currentAccessToken;
    }
    return headers;
  }

  private postForSend(url: string, body: any, timeoutMs: number, normalizeList = false): Observable<any> {
    const request$ = Capacitor.isNativePlatform()
      ? from(this.postWithCapacitorHttp(url, body, timeoutMs))
      : this.http.post(url, body).pipe(timeout(timeoutMs));

    return request$.pipe(
      switchMap((res: any) => {
        const payload = unwrapCapacitorHttpData(res);
        return of(normalizeList ? this.normalizeListResponse(payload) : payload);
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }

  private async postWithCapacitorHttp(url: string, body: any, timeoutMs: number): Promise<any> {
    try {
      const response = await CapacitorHttp.post({
        url,
        headers: this.authHeaders(),
        data: body,
        connectTimeout: Math.min(timeoutMs, HTTP_TIMEOUT_SINIESTRO_MS),
        readTimeout: timeoutMs
      });
      const data = unwrapCapacitorHttpData(response);
      if (typeof response?.status === 'number' && response.status >= 400) {
        throw new HttpErrorResponse({
          status: response.status,
          statusText: 'Error',
          url,
          error: data || { Message: NETWORK_NO_RESPONSE_MESSAGE }
        });
      }
      return data;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        throw error;
      }
      throw toNetworkHttpError(error, url);
    }
  }

  async hasAppVersionChanged(): Promise<boolean> {
    const stored = await Preferences.get({ key: APP_VERSION_KEY });
    const currentVersion = versionAndroid.versionCodigo;
    if (!stored?.value) {
      return true;
    }
    return stored.value !== currentVersion;
  }

  async markCurrentAppVersion(): Promise<void> {
    await Preferences.set({ key: APP_VERSION_KEY, value: versionAndroid.versionCodigo });
    this.clearPendingSessionRecovery();
  }

  setPendingSessionRecovery(): void {
    sessionStorage.setItem(PENDING_SESSION_RECOVERY_KEY, '1');
  }

  isPendingSessionRecovery(): boolean {
    return sessionStorage.getItem(PENDING_SESSION_RECOVERY_KEY) === '1';
  }

  clearPendingSessionRecovery(): void {
    sessionStorage.removeItem(PENDING_SESSION_RECOVERY_KEY);
  }

  async canRecoverSessionSilently(): Promise<boolean> {
    const credentials = await this.getStoredLoginCredentials();
    return !!(credentials.User && credentials.Password);
  }

  async persistPasswordChange(
    email: string,
    password: string,
    options?: { fromActiveSession?: boolean }
  ): Promise<void> {
    await this.savedSessions.saveSession(
      email,
      password,
      this.currentUser?.NombreAgente
    );
    this.clearPendingSessionRecovery();

    if (options?.fromActiveSession) {
      await this.markCurrentAppVersion();
    }
  }
  MisAtenciones(credentials:any): Observable<any> {
    console.log(credentials);
    return this.unwrapHttpList(
      this.http.get(`${this.apiUrl}/Proveedor/ObtenerMisAtenciones?IdProveedorAgente=${credentials}`)
    );
  }
  BuscarMisAtenciones(criteria: {
    IdProveedorAgente?: number;
    FechaDesde?: string | null;
    FechaHasta?: string | null;
    NombreAsegurado?: string | null;
    Offset?: number;
    PageSize?: number;
  }): Observable<any> {
    const idProveedorAgente = this.resolveProveedorAgenteId(criteria.IdProveedorAgente);
    if (!idProveedorAgente) {
      return throwError(() => ({
        error: { Message: 'No se encontró el IdProveedorAgente de la sesión activa.' }
      }));
    }

    const jsonBuscar = {
      IdProveedorAgente: idProveedorAgente,
      FechaDesde: criteria.FechaDesde ?? null,
      FechaHasta: criteria.FechaHasta ?? null,
      NombreAsegurado: criteria.NombreAsegurado?.trim() || '',
      Offset: criteria.Offset ?? 0,
      PageSize: criteria.PageSize && criteria.PageSize > 0 ? criteria.PageSize : 100,
    };

    console.log('[BuscarMisAtenciones] payload', jsonBuscar);

    return this.http.post(`${this.apiUrl}/Proveedor/BuscarMisAtenciones`, jsonBuscar).pipe(
      switchMap((res: any) => {
        const payload = this.extractBuscarMisAtencionesItems(res);
        return from(Promise.all(payload));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }

  private extractBuscarMisAtencionesItems(res: any): any[] {
    if (Array.isArray(res)) {
      return res;
    }

    if (!res || typeof res !== 'object') {
      return [];
    }

    if (Array.isArray(res.Items)) {
      return res.Items;
    }

    if (Array.isArray(res.items)) {
      return res.items;
    }

    if (Array.isArray(res.Data)) {
      return res.Data;
    }

    if (Array.isArray(res.data)) {
      return res.data;
    }

    return [];
  }

  private resolveProveedorAgenteId(explicitId?: any): number {
    const candidates: any[] = [explicitId, this.currentUser?.ProveedorAgenteId];

    try {
      const storedUser = localStorage.getItem('ajustadorActual');
      if (storedUser) {
        candidates.push(JSON.parse(storedUser)?.ProveedorAgenteId);
      }
    } catch (error) {
      console.warn('[ApiService] No se pudo leer ajustadorActual:', error);
    }

    for (const candidate of candidates) {
      const parsed = Number(candidate);
      if (Number.isFinite(parsed) && parsed > 0) {
        return parsed;
      }
    }

    return 0;
  }

  MisAtencionesActivas(credentials:any): Observable<any> {
    console.log(credentials);

    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerMisAtencionesActivas?IdProveedorAgente=${credentials}`).pipe(
      switchMap((res: any) => {
        if (!Array.isArray(res)) {
          return of([]);
        }
        return from(Promise.all(res));
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return of([]);
        }
        return throwError(() => error);
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }

  // get /api/Proveedor/ContarOtrosDanios
  ContarOtrosDanios(): Observable<any> {

    // 3912
   return this.http.get(`${this.apiUrl}/Proveedor/ContarOtrosDanios`).pipe(
      switchMap(( res: any  ) => of(this.normalizeListResponse(res))),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
  }

  // post /api/Proveedor/GuardarTiposPersonasSiniestros
  GuardarLesionado(credentials:any): Observable<any> {
    let body = {
      Nombre: credentials.Nombre,
      Telefono: credentials.Telefono,
      Direccion: credentials.Direccion,
      DescripcionLesion: credentials.DescripcionLesion,
      DireccionHospitalizacion: credentials.DireccionHospitalizacion,
      TipoPersonaSiniestro: credentials.TipoPersonaSiniestro,
      RefAjustadorAudienciaId: credentials.RefAjustadorAudienciaId
    }

    return this.http.post(`${this.apiUrl}/Proveedor/GuardarTiposPersonasSiniestros`,body).pipe(
      //switchMap((tokens: {accessToken, refreshToken }) => {
        switchMap(( res: any  ) => {
        return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )

  }


  // post /api/Proveedor/GuardarTiposPersonasSiniestros
  GuardarPersonaSiniestro(credentials:any): Observable<any> {
    let body = {
      Nombre: credentials.Nombre,
      Telefono: credentials.Telefono,
      Direccion: credentials.Direccion,
      DescripcionLesion: credentials.DescripcionLesion,
      DireccionHospitalizacion: credentials.DireccionHospitalizacion,
      TipoPersonaSiniestro: credentials.TipoPersonaSiniestro,
      RefAjustadorAudienciaId: credentials.RefAjustadorAudienciaId
    }

    return this.http.post(`${this.apiUrl}/Proveedor/GuardarTiposPersonasSiniestros`,body).pipe(
      //switchMap((tokens: {accessToken, refreshToken }) => {
        switchMap(( res: any  ) => {
        return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )

  }

  //Guardar Tercero
  GuardarTerceros(credentials:any): Observable<any> {
    let body = {
      RefAjustadorAudienciaId: credentials.RefAjustadorAudienciaId,
        NombreCompleto: credentials.NombreCompleto,
        Identificacion: credentials.Identificacion,
        DPI_Pasaporte: credentials.DPI_Pasaporte,
        Telefono: credentials.Telefono,
        Celular: credentials.Telefono,
        Vigencia: credentials.Vigencia,
        TipoLicencia: credentials.TipoLicencia,
        Licencia: credentials.Licencia,
        Edad: credentials.Edad,
        Sexo: credentials.Sexo,
        Culpalble: credentials.Culpalble,
        Afectado: credentials.Afectado,
        Marca: credentials.Marca,
        Modelo: credentials.Modelo,
        TipoVehiculo: credentials.TipoVehiculo,
        Anio: credentials.Anio,
        Placa: credentials.Placa,
        Color: credentials.Color,
        Chasis: credentials.Chasis,
        Motor: credentials.Motor,
        RefAgenteProveedorId: credentials.RefAgenteProveedorId,
        TipoTercero: credentials.TipoTercero
    }

    
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarTercerosReclamo`,body).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }
  //Guardar Propiedad 
  GuardarPropiedadTercero(credentials:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarPropiedadDaniadaSiniestro_HN`,credentials).pipe(
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

  private normalizeImageUploadPayload(credentials: any): any[] {
    const items = Array.isArray(credentials)
      ? credentials
      : credentials
        ? [credentials]
        : [];

    return items.map((item) => {
      if (!item || typeof item !== 'object') {
        return item;
      }

      const normalized = { ...item };

      if (typeof normalized.Foto === 'string' && normalized.Foto.includes(',')) {
        normalized.Foto = normalized.Foto.split(',')[1];
      }

      if (normalized.IdAtencion != null && normalized.IdAtencion !== '') {
        const parsedId = parseInt(String(normalized.IdAtencion), 10);
        if (!Number.isNaN(parsedId)) {
          normalized.IdAtencion = parsedId;
        }
      }

      return normalized;
    });
  }

  //Guardar Firmas
  GuardarFirmaAsegurado(credentials:any): Observable<any> {
    const body = this.normalizeImageUploadPayload(credentials);
    return this.http.post(`${this.apiUrl}/Proveedor/SubirFirmas`, body).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   //POST /api/Proveedor/SubirFirmaAjustador
   GuardarFirmaAjustador(credentials:any): Observable<any> {
    let body = {
      FotoFirma: credentials.Firma,
      IdAgente: credentials.IdAgente
    }
    return this.http.post(`${this.apiUrl}/Proveedor/SubirFirmaAjustador`,body).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // POST /api/FicohsaHN/Subir_Archivos_WSFH
   GuardarArchivoSiniestro(credentials:any): Observable<any> {
    let body = {
      filetxt: credentials.filetxt,
      CodigoSolicitud_BPM: credentials.CodigoSolicitud_BPM,
      NombreTipoExtensionFile: credentials.NombreTipoExtensionFile
    }
    return this.http.post(`${this.apiUrl}/FicohsaHN/Subir_Archivos_WSFH`,body).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // POST /api/FicohsaHN/Valida_Lista_Coberturas
   Valida_Lista_Coberturas(cobertura:any): Observable<any> {
    console.log('cobertura'); console.dir(cobertura)

    let body = {
      pNumPoliza: cobertura.pNumPoliza,
      pNumSiniestro: cobertura.pNumSiniestro,
      pNumCertificado: cobertura.pNumCertificado,
      pNumEndoso: cobertura.pNumEndoso,
      pNumAsegurado: cobertura.pNumAsegurado
    }
    return this.http.post(`${this.apiUrl}/FicohsaHN/Valida_Lista_Coberturas`,body).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
        if (res.length == 0) {
          this.toaster.presentToastAlert('Esta póliza no cuenta con cobertura para servicios legales. Consulte con su proveedor de servicios. ', 'top', 'danger', 10000);
        }else{
          localStorage.setItem('coberturas', JSON.stringify(res));
        }
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // POST /api/FicohsaHN/Consulta_Causas_HN
   ObtenerCausasPorCobertura(codigoCobertura:any): Observable<any> {
    const cCodCobert = (codigoCobertura || '').toString().trim();
    const body = {
      pCodProd: (valoresPredeterminados[0]?.Producto || 'AU01').toString(),
      cCodCobert
    };
    return this.http.post(`${this.apiUrl}/FicohsaHN/Consulta_Causas_HN`, body).pipe(
      switchMap((res: any) => {
        const causas = this.normalizeCausasPorCoberturaResponse(res);
        return of(causas);
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
   }

   private normalizeCausasPorCoberturaResponse(res: any): any[] {
    const parsed = this.parsePossibleJsonResponse(res);
    const items = this.extractCausasCollection(parsed);

    return items
      .map((item) => this.mapCausaPorCoberturaItem(item))
      .filter((item) => !!item.COD_CAUSA || !!item.DESCRIPCION_CAUS);
   }

   private parsePossibleJsonResponse(value: any): any {
    if (typeof value !== 'string') {
      return value;
    }

    const trimmed = value.trim();
    if (!trimmed) {
      return value;
    }

    try {
      return JSON.parse(trimmed);
    } catch {
      return value;
    }
   }

   private extractCausasCollection(res: any, depth = 0): any[] {
    if (!res || depth > 5) {
      return [];
    }

    const parsed = this.parsePossibleJsonResponse(res);
    if (Array.isArray(parsed)) {
      return parsed;
    }

    if (typeof parsed !== 'object') {
      return [];
    }

    const directKeys = [
      'data', 'Data', 'result', 'Result', 'causas', 'Causas',
      'lista', 'Lista', 'items', 'Items', 'table', 'Table',
      'value', 'Value', '$values',
      'Consulta_Causas_HN', 'consulta_Causas_HN',
      'Consulta_Causas_HNResult', 'consulta_Causas_HNResult',
      'NewDataSet'
    ];

    for (const key of directKeys) {
      const candidate = parsed?.[key];
      const nested = this.extractCausasCollection(candidate, depth + 1);
      if (nested.length) {
        return nested;
      }
    }

    if (this.looksLikeCausaRow(parsed)) {
      return [parsed];
    }

    for (const value of Object.values(parsed)) {
      const nested = this.extractCausasCollection(value, depth + 1);
      if (nested.length) {
        return nested;
      }
    }

    return [];
   }

   private looksLikeCausaRow(item: any): boolean {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      return false;
    }

    return !!this.pickCausaField(item, 'code') || !!this.pickCausaField(item, 'description');
   }

   private mapCausaPorCoberturaItem(item: any): { COD_CAUSA: string; DESCRIPCION_CAUS: string } {
    const codigo = this.pickCausaField(item, 'code');
    const descripcion = this.pickCausaField(item, 'description');

    return {
      COD_CAUSA: codigo || descripcion,
      DESCRIPCION_CAUS: descripcion || codigo,
    };
   }

   private pickCausaField(item: any, kind: 'code' | 'description'): string {
    if (!item || typeof item !== 'object') {
      return '';
    }

    const explicitCodeKeys = [
      'COD_CAUSA', 'Cod_Causa', 'cod_Causa', 'codigoCausa', 'CodigoCausa',
      'cCodCaus', 'cCOD_CAUSA', 'cCAUSAField', 'cCodCausa', 'CCODCAUS',
      'codCausa', 'CodCausa', 'cod_causa', 'Codigo_Causa', 'codigo_causa',
      'cCodCausField', 'cOD_CAUSAField', 'Codigo', 'codigo', 'Code', 'code'
    ];
    const explicitDescKeys = [
      'DESCRIPCION_CAUS', 'Descripcion_Caus', 'descripcion_Caus', 'descripcionCausa', 'DescripcionCausa',
      'pDesCaus', 'pDESCRIPCION_CAUSA', 'dESCRIPCIONField', 'dESCRIPCION_CAUSAField',
      'pDesCausa', 'descripcion', 'Descripcion', 'DESCRIPCION', 'nombreCausa', 'NombreCausa',
      'pDescripcionCaus', 'dESCRIPCION_CAUSField', 'Nombre', 'nombre', 'Label', 'label'
    ];

    const keys = kind === 'code' ? explicitCodeKeys : explicitDescKeys;
    for (const key of keys) {
      const value = item?.[key];
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        return String(value).trim();
      }
    }

    for (const [key, value] of Object.entries(item)) {
      if (value === undefined || value === null || String(value).trim() === '') {
        continue;
      }

      const normalizedKey = key.toLowerCase();
      if (kind === 'code' && /(cod|code).*(caus|causa)|^(causa|ccod)/.test(normalizedKey)) {
        return String(value).trim();
      }
      if (kind === 'description' && /(desc|descripcion|nombre).*(caus|causa)|^pdes/.test(normalizedKey)) {
        return String(value).trim();
      }
    }

    return '';
   }

  //Guardar fotos
  GuardarFotos(credentials:any): Observable<any> {
    const body = this.normalizeImageUploadPayload(credentials);
    return this.postForSend(`${this.apiUrl}/Proveedor/SubirFotosSiniestro`, body, HTTP_TIMEOUT_PHOTOS_MS, true);
   }

   // POST /api/Proveedor/SubirFotografiaAjustador
  GuardarFotoAjustador(credentials:any): Observable<any> {
    let body = {
      Fotografia: credentials[0].Fotografia,
      IdAgente: credentials[0].IdAgente
    }
    console.log("body en el envio de la fotografia del ajustador ");
    console.dir(credentials)
    return this.postForSend(`${this.apiUrl}/Proveedor/SubirFotografiaAjustador`, body, HTTP_TIMEOUT_PHOTOS_MS, true);
   }

   //Envio de token push
  SendToken(credentials:any): Observable<any> {
    return this.postForSend(
      `${this.apiUrl}/Proveedor/TokenPushOneSignal?IdProveedorAgente=${credentials.IdProveedorAgente}&TokenPush=${credentials.TokenPush}`,
      {},
      HTTP_TIMEOUT_DEFAULT_MS,
      true
    );
  }
  //Guardar Siniestros
  GuardarSiniestro(credentials:any): Observable<any> {
    return this.postForSend(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, credentials, HTTP_TIMEOUT_SINIESTRO_MS);
   }

   // POST /api/Proveedor/GuardarCacheCliente
   GuardarCacheCliente(credentials:any): Observable<any> {
    this.idAtencion = localStorage.getItem('idAtencion');
    console.log('Cache en api');
    console.dir(credentials)
    let cacheData = {};

    for (let index = 0; index < cacheIndexArray.length; index++) {
      const element = cacheIndexArray[index];
      let key = element.title;
      let valor = credentials[key];
      cacheData[key] = valor;

      if (index == (cacheIndexArray.length-1)) {
        cacheData['IdAtencion'] = parseInt(this.idAtencion); 

        console.log('Esta data voy a enviar'); console.dir(cacheData);
      }
    }

    return this.http.post(`${this.apiUrl}/Proveedor/GuardarCacheCliente`,cacheData).pipe(
      switchMap(( res: any  ) => {
        return of(res);
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
   }

   handleSiniestroData(siniestroData:any) {
    let nombre:any; let valor:any;
    console.log('Siniestro en api');
    console.dir(siniestroData);


    for (let index = 0; index < siniestroData.length; index++) {
      const elementE = siniestroData[index];
      const duplicados = this.siniestroData.filter(item => item.nombre === elementE.nombre);
      console.log('Duplicados de '+elementE.nombre+' son: '+duplicados.length);

      if (duplicados.length === 0) {
        nombre = elementE.nombre; valor = elementE.valor;
        this.siniestroData[nombre] = valor;
        //this.siniestroData.push({nombre: valor});
      }

      if (index == (siniestroData.length-1)) {
        console.log('Siniestro corregido en api');
        console.dir(this.siniestroData)
        setTimeout(() => {
          this.GuardarSiniestroHN(this.siniestroData).pipe( 
                finalize(async ()=>{
                  })
                ).subscribe(
                  async (res) =>{
                    console.log('Siniestro guardado');
                    console.dir(res);
                  }
                )
        }, 600);
      }
    }
   }

   GuardarSiniestroHN(envioData:any): Observable<any> {
  console.log('Siniestro en api');
  console.dir(envioData)
    return this.postForSend(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, envioData, HTTP_TIMEOUT_SINIESTRO_MS);
   }

   GuardarSiniestroHN_Sin_Poliza(siniestroData:any): Observable<any> {
    //alert('Aqui voy otra vez');
    console.log('Soy un feliz envío sin póliza =) '); console.dir(siniestroData);

    return this.postForSend(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, siniestroData, HTTP_TIMEOUT_SINIESTRO_MS);
   }

   GuardarInformeAjustador(credentials:any): Observable<any> {
    console.log('Informe ajustador en api');
    console.dir(credentials);
    let siniestroData = {}

    for (let index = 0; index < credentials.length; index++) {
      const element = credentials[index];
      console.log(element.nombre+', '+element.valor)
      if (element.valor != null || element.valor != undefined) {
        siniestroData[element.nombre] =element.valor
      }

      if (index == (ItemsData.length-1)) {
        console.dir(siniestroData)
      }
      
    }
    
    return this.postForSend(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, siniestroData, HTTP_TIMEOUT_SINIESTRO_MS);
   }

   /*

   

    for (let index = 0; index < ItemsData.length; index++) {
      const element = ItemsData[index];
      console.log(element.nombre)
      console.log(credentials[element.nombre])

      let valor = credentials[element.nombre];
      
      
    }
*/

   // POST /api/Proveedor/GuardaInformerAjustador_HN
   /*
   GuardarInforme(credentials:any): Observable<any> {
    console.log('Informe en api');
    console.dir(credentials)
    let siniestroData = {}
    for (let index = 0; index < ItemsData.length; index++) {
      const element = ItemsData[index];
      console.log(element.nombre)
      console.log(credentials[element.nombre])
      let valor = credentials[element.nombre];
      if (valor != null || valor != undefined) {
        siniestroData[element.nombre] =valor
      }

      if (index == (ItemsData.length-1)) {
        console.dir(siniestroData)
      }
    }
    return this.http.post(`${this.apiUrl}/Proveedor/GuardaInformerAjustador_HN`,siniestroData).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        return of(res);
      }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }
*/
   

  //Datos tipos de siniestros
  tipoDeSiniestros(): Observable<any> {
   return this.http.post(`${this.apiUrl}/Proveedor/TiposDeSiniestroFicohsa`,{}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        
      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
   )
  }

  // POST /api/Proveedor/ActualizarFiniquito
  ActualizarFiniquito(credentials:any): Observable<any> {
    console.log(credentials);
   return this.http.post(`${this.apiUrl}/Proveedor/ActualizarFiniquito?RefAtencionId=${credentials.RefAtencionId}&NumeroReclamo=${credentials.NumeroReclamo}&TipoCoberturaFicohsa=${credentials.TipoCoberturaFicohsa}`,{}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        console.log(res)
        if (res=== null){
          res = "yes"
        }
      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
   )
  }

  // post /api/Proveedor/ObtenerAgenteProveedor
  ObtenerAgenteProveedor(agenteId:number): Observable<any> {
    let finiquitoData = {
      agenteId: agenteId
    }
   return this.http.post(`${this.apiUrl}/Proveedor/ObtenerAgenteProveedor?agenteId=${agenteId}}`,finiquitoData).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        console.log(res)
        if (res=== null){
          res = "yes"
        }
      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
   )
  }

  // POST /api/Proveedor/ObtenerFiniquito
  ObtenerFiniquito(RefAtencionId:number): Observable<any> {
    let finiquitoData = {
      RefAtencionId: RefAtencionId
    }
   return this.http.post(`${this.apiUrl}/Proveedor/ObtenerFiniquito?RefAtencionId=${RefAtencionId}}`,finiquitoData).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        console.log(res)
        if (res=== null){
          res = "yes"
        }
      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
   )
  }

  //Cambio de estado de expediente
  cambiarEstadoOrden(credentials:any): Observable<any> {
    console.log(credentials);
   return this.http.post(`${this.apiUrl}/Proveedor/TomarORCancelarAtencion?IdAtencion=${credentials.id}&Estado=${credentials.estado}`,{}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        console.log(res)
        if (res=== null){
          res = "yes"
        }
      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
   )
  }

  // POST /api/Proveedor/ActualizaLogAtencion
  ActualizaLogAtencion(credentials:any): Observable<any> {
    console.log('Para actualizar el estado de '+credentials)
    console.log(credentials);
   return this.http.post(`${this.apiUrl}/Proveedor/ActualizaLogAtencion?IdAtencion=${credentials}`,{}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        console.log(res)
        if (res=== null){
          res = "yes"
        }
      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
   )
  }

  // Retomar lista de ajutadores para reasignar 
  Ajustadores(credentials:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/Proveedor/ListadoAjustadores?IdPais=${credentials}`).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // get /api/Proveedor/ListadoAbogados
   Abogados(credentials:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/Proveedor/ListadoAbogados?IdPais=${credentials}`).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }


  // Hacer cambio de asignacion asignar a otro.
  Reasignar(credentials:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/ReAsignarExpediente?IdAtencion=${credentials.IdAtencion}&IdAgenteProveedor=${credentials.IdAgenteProveedor}`,{}).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

  //Datos de expedientes
  Expediente(credentials:any): Observable<any> {
   return this.http.get(`${this.apiUrl}/Proveedor/ObtenerDatosExpedientes?IdAtencion=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        localStorage.setItem('elExpediente', JSON.stringify(res));

      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
  }

  //get /api/Proveedor/ObtenerDatosDeAtencion 
  DatosDeAtencion(credentials:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerDatosDeAtencion?IdAtencion=${credentials}`).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
        console.log("Hasta este punto, todo bien : "+ res.length);
        //console.dir(res[0]);
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   //GET /api/Proveedor/ObtenerCacheCliente
  ObtenercacheCliente(credentials:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerCacheCliente?IdAtencion=${credentials}`).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
        console.log("Datos del caché del cliente : "+ res.length);
        //console.dir(res[0]);
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // post /api/Proveedor/ObtenerDaniosExtras
   ObtenerDaniosExtras(IdAtencion:any, TipoEntidad:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/ObtenerDaniosExtras?RefAtencionId=${IdAtencion}&TipoEntidad=${TipoEntidad}`,{}).pipe(
       switchMap(( res: any  ) => of(this.normalizeListResponse(res))),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // post /api/Proveedor/ActualizarTipoReparacion
   ActualizarTipoReparacion(Id:number, Tipo:any, indexFront:number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarTipoReparacion?Id=${Id}&Tipo=${Tipo}&indexFront=${indexFront}`,{}).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }


   // post /api/Proveedor/ActualizarIndexFront
   ActualizarIndexFront(Id:number, indexFront:number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarIndexFront?Id=${Id}&indexFront=${indexFront}`,{}).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
    )
   }

   // post /api/Proveedor/ActualizarEstadoDanioExtraAtencion
   ActualizarEstadoDanioExtraAtencion(RefAtencionId:number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarEstadoDanioExtraAtencion?Id=${RefAtencionId}`,{}).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
    )
   }

   // post /api/Proveedor/EliminaDanioExtra
   EliminaDanioExtra(Id:number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/EliminaDanioExtra?Id=${Id}`,{}).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // POST /api/Proveedor/GuardarIdTablaAjustador
   GuardarIdTablaAjustador(IdAtencion:any, IdAgenteProveedor:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarIdTablaAjustador?IdAtencion=${IdAtencion}&IdTablaAjustador=${IdAgenteProveedor}`,{}).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // post /api/Proveedor/ActualizarAudicion
   ActualizarAudicion(audicion): Observable<any> {

    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarAudicion?IdAjustadorAudiencia=${audicion.IdAjustadorAudiencia}&RefProveedorAgenteAbogadoId=${audicion.RefProveedorAgenteAbogadoId}
      &AgendarAudiencia=${audicion.AgendarAudiencia}&FechaHora=${audicion.FechaHora}&Fecha=${audicion.Fecha}&Hora=${audicion.Hora}&Lugar=${audicion.Lugar}&idAgente=${audicion.idAgente}`,{audicion}).pipe(
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   ObtenerIdTablaAjustador(IdAtencion:any): Observable<any> {
    const atencionId = Number(IdAtencion);
    const payload = {
      IdAtencion: atencionId,
      RefAtencionId: atencionId
    };
   return this.http.post(
    `${this.apiUrl}/Proveedor/ObtenerIdTablaAjustador?RefAtencionId=${atencionId}&IdAtencion=${atencionId}`,
    payload
   ).pipe(
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
  }

  // POST /api/Proveedor/ObtenerEstadoLog
  ObtenerEstadoLog(IdAtencion:any): Observable<any> {
   return this.http.post(`${this.apiUrl}/Proveedor/ObtenerEstadoLog?IdAtencion=${IdAtencion}`,{}).pipe(
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
  }


  //Recuperar Contraseña
  recuperarContrasena(credentials:any): Observable<any> {
    console.log(credentials);
    this.whiteList.push(`${this.apiUrl}/Login/RecuperarPassword?user=${credentials}`)
   return this.http.post(`${this.apiUrl}/Login/RecuperarPassword?user=${credentials}`,credentials).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
      switchMap(( res: any  ) => {
        console.log(res)
      return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
   )
  }
  //cambiar password
  cambiarPassword(credentials:any): Observable<any> {
    console.log(credentials);
    this.whiteList.push(`${this.apiUrl}/Login/ActualizarPassword?user=${credentials.user}&password=${credentials.password}`);
   return this.http.post(`${this.apiUrl}/Login/ActualizarPassword?user=${credentials.user}&password=${credentials.password}`,null);
  }
    //Validar OTP
    
    validarOtp(credentials:any): Observable<any> {
      console.log(credentials);
      this.whiteList.push(`${this.apiUrl}/Login/ValidarClave?clave=${credentials.clave}&user=${credentials.user}`)
     return this.http.post(`${this.apiUrl}/Login/ValidarClave?clave=${credentials.clave}&user=${credentials.user}`,null
      )
    }
  //Login Api

  //POST /api/Login/SubirVideo
  GuardarVideo(file: File, idAtencion: number): Observable<any> {
    this.currentAccessToken = null;
    const formData: FormData = new FormData();
    formData.append('File', file, file.name);
    formData.append('IdAtencion', idAtencion.toString());
    formData.append('IdProveedor', this.currentUser.ProveedorAgenteId);

    return this.http.post(this.filesUrl, formData)
    .pipe(
        (e) => {
          try
          {
            console.log(e);
            return from(e);
          } 
          catch(ex)
          {
            console.log(ex);
          }
        },
        tap(_ => {
          //this.isAuthenticated.next(true);
          console.log("X1");
        })
      )
    
  }

  
  login(credentials:any): Observable<any> {
    console.log('Login credentials:', credentials);
    console.dir(credentials);
    return this.http.post(`${this.apiUrl}/Login/Autenticacion`, credentials).pipe(
      //switchMap((tokens: {accessToken, refreshToken }) => {
        switchMap(( Data:{ ProveedorAgenteId,
          ProveedorName,
          TipoAgente,
          Correo,
          ProveedorId,
          Usuario,
          NombreAgente,
          Token,
          Foto,
          Lat,
          Long,
          Movil,
          IdPaid,
          Pais,
          Firma,
          UsuarioBPM}) => {
        console.log(Data[0], 'los datos');
        this.currentAccessToken = Data[0].Token;
        this.currentUser = Data[0];

        localStorage.setItem('ajustadorActual', JSON.stringify(Data[0]));
        localStorage.setItem('correoActual', credentials.User);
        localStorage.setItem('passwordActual', credentials.Password);
       // this.userData.next(Data[0].Data[0]);
        //this.user = Data.Data;
        const storeAccess = Preferences.set({key: ACCESS_TOKEN_KEY, value: Data[0].Token});
        const userData = Preferences.set({key: USER_DATA, value: JSON.stringify(Data[0])});
        return from(Promise.all([storeAccess, userData]));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
        void this.markCurrentAppVersion();
      })
    )
  }

  refreshSessionSilently(): Promise<boolean> {
    if (this.silentLoginPromise) {
      return this.silentLoginPromise;
    }

    this.silentLoginPromise = this.executeSilentLogin().finally(() => {
      this.silentLoginPromise = null;
    });

    return this.silentLoginPromise;
  }

  private async executeSilentLogin(): Promise<boolean> {
    const credentials = await this.getStoredLoginCredentials();

    if (!credentials.User || !credentials.Password) {
      return false;
    }

    return new Promise<boolean>((resolve) => {
      this.login(credentials).subscribe(
        async () => {
          await this.markCurrentAppVersion();
          resolve(true);
        },
        () => resolve(false)
      );
    });
  }

  private async getStoredLoginCredentials(): Promise<{ User: string, Password: string }> {
    let user = await this.readSecureValue('User');
    if (!user) {
      user = localStorage.getItem('correoActual') || '';
    }

    let password = await this.readSecureValue('Password');
    if (!password) {
      password = localStorage.getItem('passwordActual') || '';
    }

    if (user) {
      const savedPassword = await this.savedSessions.getPassword(user);
      if (savedPassword && savedPassword !== password) {
        password = savedPassword;
        await this.savedSessions.syncPrimaryCredentials(user, password);
      } else if (savedPassword && !password) {
        password = savedPassword;
        await this.savedSessions.syncPrimaryCredentials(user, password);
      }
    }

    return { User: user, Password: password };
  }

  private async readSecureValue(key: string): Promise<string> {
    try {
      const result = await SecureStoragePlugin.get({ key });
      return result?.value || '';
    } catch {
      return '';
    }
  }

  

  // POST /api/Login/EnviarNotificacionAccidente
  EnviarNotificacionEmail(credentials:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/Login/EnviarNotificacionAccidente?IdAtencion=${credentials}`).pipe(
     //switchMap((tokens: {accessToken, refreshToken }) => {
       switchMap(( res: any  ) => {
         localStorage.setItem('Email enviado', res);
       return from(Promise.all(res));
     }),
     tap(_ => {
       this.isAuthenticated.next(true);
     })
   )
   }

   // POST /api/Login/GetAppVersion

   GetAppVersion(credentials:any): Observable<any> {
    let versionData = {
      plataforma:credentials
    }
    return this.http.post(`${this.apiUrl}/Login/GetAppVersion?plataforma=${credentials}`,versionData).pipe(
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
   }


   GetAppVersionProveedores(credentials:any): Observable<any> {
    let versionData = {
      plataforma:credentials
    }
    return this.http.post(`${this.apiUrl}/Login/GetAppVersion?plataforma=${credentials}`,versionData).pipe(
       switchMap(( res: any  ) => {
       return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
   }



// GET ALL LIST
  ListTiposDeFotografia(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeFotografia`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoSiniestroFicohsa(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeSiniestroFicohsa`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoConductor(): Observable<any> {
//    console.log("Aqui llamo a los tipos de conductor");
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeConductor`).pipe(
      switchMap(( res: any  ) => {
        localStorage.setItem('tiposDeConductor', JSON.stringify(res));
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoGenero(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeGenero`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  //GET /api/SeleccionMultiple/TiposDeParentescoFicohsa
  ListTipoParentesco(idPais:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeParentescoFicohsa?IdPais=${idPais}`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  //GET /api/SeleccionMultiple/TiposDeSiniestroFicohsa
  ListTipoSiniestro(idPais:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeSiniestroFicohsa?IdPais=${idPais}`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoDeAudiencia(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeAudiencia`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoCombustible(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeCombustible`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoFoto(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/SeleccionMultiple/TipoDeFotografia`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  //Omar McClellan, 11 de Septiembre de 2023
  //Tipo licencia cambia a un solo endpoint llamado TipoDeLicencia y recibe id de pais 3 para Honduras, 4 para Guatemala
  TipoDeLicencia(paisId:any) : Observable<any> {
    return this.unwrapHttpList(
      this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicencia?IdPais=${paisId}`)
    );
  }

  TipoDeVehiculo(paisId:any) : Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeVehiculosFicohsa?IdPais=${paisId}`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  // Lista de los 100 daños más comunes
  //GET /api/SeleccionMultiple/ListadoDanioAlVehiculoFicohsa
  listDanios(): Observable<any>{
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/ListadoDanioAlVehiculoFicohsa`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  // GET /api/SeleccionMultiple/ListadoTalleresFicohsa
  ListTalleres() : Observable<any>{
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/ListadoTalleresFicohsa`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  // GET /api/Proveedor/ListaTipoAcuerdos
  ListarTiposAcuerdo(): Observable<any>{
    return this.http.get(`${this.apiUrl}/Proveedor/ListaTipoAcuerdos`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  //GET /api/Proveedor/ListaFotografiasFirmasAtencion
//  obtenerFirmaPorAtencion(atencionId:any, TipoFotoFirma:any) : Observable<any> {
  obtenerFotoPorAtencion(atencionId:any, TipoFotoFirma:any) : Observable<any> {
    let body:any = {
      IdAtencion:atencionId,
      TipoFotoFirma:TipoFotoFirma
    }
    // ?IdAtencion=${atencionId}&TipoFotoFirma=${TipoFotoFirma}
    return this.http.post(`${this.apiUrl}/Proveedor/ListaFotografiasFirmasAtencion`, body).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  obtenerFotoPorAtencionRaw(atencionId:any, TipoFotoFirma:any) : Observable<any> {
    let body:any = {
      IdAtencion:atencionId,
      TipoFotoFirma:TipoFotoFirma
    }

    return this.http.post(`${this.apiUrl}/Proveedor/ListaFotografiasFirmasAtencion`, body).pipe(
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  // GET /api/Proveedor/VectorGpsAtencion
  obtenerCoordenadasPorAtencion(atencionId:any, Tipo:any) : Observable<any> {
    return this.unwrapHttpList(
      this.http.get(`${this.apiUrl}/Proveedor/VectorGpsAtencion?IdAtencion=${atencionId}&Tipo=${Tipo}`)
    );
  }

  // POST /api/Proveedor/ActualizarCordenadasAjustador
  // ?IdTablaAjustador=${credentials.IdTablaAjustador}&CodigoBPMFicohsa=${credentials.CodigoBPMFicohsa}&CodigoReclamoFicohsa=${credentials.CodigoReclamoFicohsa}
  setAjuPosition(credentials:any): Observable<any> {
    return this.postForSend(
      `${this.apiUrl}/Proveedor/ActualizarCordenadasAjustador?Longitud=${credentials.Longitud}&Latitud=${credentials.Latitud}&IdProveedorAgente=${credentials.RefUsuarioId}`,
      {},
      HTTP_TIMEOUT_DEFAULT_MS,
      true
    );
  }


  // POST /api/Proveedor/InsertarCoordenadasAtencionAgenteProveedor
  setPositionNRoute(credentials:any): Observable<any> {
    const jsonPosition = {
      Latitud: credentials.Latitud,
      Longitud: credentials.Longitud,
      RefAtencionId: credentials.RefAtencionId,
      RefUsuarioId: credentials.RefUsuarioId,
      Tipo: credentials.Tipo,
      FechaRegistro: new Date().toISOString(),
      Contador: credentials.Contador
    };
    return this.postForSend(
      `${this.apiUrl}/Proveedor/InsertarCoordenadasAtencionAgenteProveedor`,
      jsonPosition,
      HTTP_TIMEOUT_DEFAULT_MS,
      true
    );
  }


  // POST /api/Proveedor/InsertarConvenioReparacionTaller
  insertarConvenioReparacion(credentials:any): Observable<any> {
      const jsonRepara = {
        CodigoDanioVehiculo: credentials.codigoDanio,
        Descripcion: credentials.descripcionDanio,
        Fotografia: credentials.fotografia,
        IdAtencion: credentials.idAtencion,
        RefTipoFotoId: credentials.refTipofotoId,
        TipoEntidad: credentials.TipoEntidad,
        TipoReparacion: credentials.TipoReparacion,
        FechaRegistro: new Date().toISOString(),
      }
      
      return this.http.post(`${this.apiUrl}/Proveedor/InsertarConvenioReparacionTaller`, jsonRepara).pipe(
      switchMap(( res: any  ) => {
        console.log('Respuesta de ingresar la Convenio Taller ');
        console.dir(res);
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
    /**/
  }

  // post /api/Proveedor/InsertarConvenioReparacionTallerExtra
  InsertarConvenioReparacionTallerExtra(credentials:any): Observable<any> {
    const jsonRepara = 
    {
      RefAtencionId: credentials.RefAtencionId,
      DescripcionDeDanio: credentials.DescripcionDeDanio,
      FechaRegistro: credentials.FechaRegistro,
      UsuarioId: credentials.UsuarioId,
      TipoEntidad: credentials.TipoEntidad,
      TipoReparacion: credentials.TipoReparacion,
      CodigoDanioVehiculo: credentials.CodigoDanioVehiculo,
      indexFront: credentials.indexFront
    }
    
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarConvenioReparacionTallerExtra`, jsonRepara).pipe(
    switchMap(( res: any  ) => {
      console.log('Respuesta de ingresar la Convenio Taller Extra ');
      console.dir(res);
      return of(this.normalizeListResponse(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
  /**/
}

  //POST /api/Proveedor/InsertarFiniquitoManual
  /*
  {
  "NumeroReclamo": "string",
  "FechaDesde": "2023-11-15T17:24:18.116Z",
  "FechaHasta": "2023-11-15T17:24:18.116Z",
  "NombreCliente": "string",
  "TipoCoberturaFicohsa": "string",
  "FechaFirma": "2023-11-15T17:24:18.116Z",
  "FirmaCliente": "string",
  "NombreQuienRecibe": "string",
  "IdentidadQuienRecibe": "string",
  "NumeroCheque": "string",
  "FechaDelCheque": "2023-11-15T17:24:18.116Z",
  "ValorDelCheque": 0,
  "NombreAFavor": "string",
  "Poliza": "string",
  "RefAtencionId": 0,
  "Marca": "string",
  "Modelo": "string",
  "Anio": 0,
  "Placa": "string",
  "Chasis": "string",
  "Motor": "string"
}

    {
  "NumeroReclamo": "string", // despues de crear el reclamo
  "FechaDesde": "2023-11-14T19:55:55.849Z", // Input directo
  "FechaHasta": "2023-11-14T19:55:55.849Z", // Input directo
  "NombreCliente": "string", // de la info del asegurado
  "TipoCoberturaFicohsa": "string", // Input directo
  "FechaFirma": "2023-11-14T19:55:55.849Z", // Input directo
  "FirmaCliente": "string", // Desde el canvas
  "NombreQuienRecibe": "string", // Input directo
  "IdentidadQuienRecibe": "string", // Input directo
  "NumeroCheque": "string", // Input directo
  "FechaDelCheque": "2023-11-14T19:55:55.849Z", // Input directo
  "ValorDelCheque": 0, // Input directo
  "NombreAFavor": "string", // Input directo
  "Poliza": "string", // de la info del asegurado
  "RefAtencionId": 0, // de la info del asegurado
  "Marca": "string", // de la info del asegurado
  "Modelo": "string", // de la info del asegurado
  "Anio": 0, // de la info del asegurado
  "Placa": "string", // de la info del asegurado
  "Chasis": "string", // de la info del asegurado
  "Motor": "string" // de la info del asegurado
}
    */
  insertarFiniquitoManual(credentials:any): Observable<any> {
    const jsonFiniquito = {
      NumeroReclamo: credentials.NumeroReclamo,
      FechaDesde: credentials.FechaDesde,
      FechaHasta: credentials.FechaHasta,
      RefAtencionId: credentials.RefAtencionId,
      NombreCliente: credentials.NombreCliente,
      TipoCoberturaFicohsa: credentials.TipoCoberturaFicohsa,
      FechaFirma: credentials.FechaFirma,
      FirmaCliente: credentials.FirmaCliente,
      NombreQuienRecibe: credentials.NombreQuienRecibe,
      IdentidadQuienRecibe: credentials.IdentidadQuienRecibe,
      NumeroCheque: credentials.NumeroCheque,
      FechaDelCheque: credentials.FechaDelCheque,
      ValorDelCheque: credentials.ValorDelCheque,
      NombreAFavor: credentials.NombreAFavor,
      Poliza: credentials.Poliza,
      Marca: credentials.Marca,
      Modelo: credentials.Modelo,
      Anio: credentials.Anio,
      Placa: credentials.Placa,
      Chasis: credentials.Chasis,
      Motor: credentials.Motor
    }
    
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarFiniquitoManual`, jsonFiniquito).pipe(
    switchMap(( res: any  ) => {
      console.log('Respuesta de ingresar el finiquito ');
      console.dir(res);
    return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
  /**/
}


  // POST /api/Proveedor/InsertarReconocimientoDeDeuda
  insertarReconocimientoDeuda(credentials:any): Observable<any> {
      const jsonDeuda = {
        Id: 0,
        NombreDeudor: credentials.NombreDeudor,
        IdentidadDeudor: credentials.IdentidadDeudor,
        Celular: credentials.Celular,
        Domicilio: credentials.Domicilio,
        CorreoElectronico: credentials.CorreoElectronico,
        LugarDeTrabajo: credentials.LugarDeTrabajo,
        NombreContacto: credentials.NombreContacto,
        CelularContacto: credentials.CelularContacto,
        FechaRegistroDocumento: credentials.FechaRegistroDocumento,
        Marca: credentials.Marca,
        Modelo: credentials.Modelo,
        Anio: credentials.Anio,
        Placa: credentials.Placa,
        NombreAsegurado: credentials.NombreAsegurado,
        MarcaImplicado: credentials.MarcaImplicado,
        ModeloImplicado: credentials.ModeloImplicado,
        AnioImplicado: credentials.AnioImplicado,
        PlacaImplicado: credentials.PlacaImplicado,
        MotorImplicado : credentials.MotorImplicado,
        ChasisImplicado: credentials.ChasisImplicado,
        NombrePersonaPropiedadImplicada: credentials.NombrePersonaPropiedadImplicada,
        DanioCausadoObservacion: credentials.DanioCausadoObservacion,
        RefAtencionId: credentials.RefAtencionId,
        FechaRegistro: credentials.FechaRegistro,
        FirmaDeudor: credentials.FirmaDeudor,//this.firmaDemoAjustador.split(',')[1]// credentials.FirmaDeudor,
        Ciudad: credentials.Ciudad,
        TelefonoCulpable:credentials.TelefonoCulpable,
        LicenciaCulpable:credentials.LicenciaCulpable,
        TipoLicencia:credentials.TipoLicencia,
        FechaVencimientoLicencia:credentials.FechaVencimientoLicencia,
        NombreDireccionPropietarioVehiculoImplicado:credentials.NombreDireccionPropietarioVehiculoImplicado,
        CompromisoDePago:credentials.CompromisoDePago,
        Observaciones:credentials.Observaciones,
        Edad:credentials.Edad,
        RefTipoFotografiaIdAdeudado:credentials.RefTipoFotografiaIdAdeudado,
        RefTipoFotografiaIdBeneficiario:credentials.RefTipoFotografiaIdBeneficiario
      }
      
      return this.http.post(`${this.apiUrl}/Proveedor/InsertarReconocimientoDeDeuda`, jsonDeuda).pipe(
//      return this.http.post(`${this.apiUrl}/Proveedor/InsertarReconocimientoDeDeuda?IdTablaAjustador=${credentials.IdTablaAjustador}&CodigoBPMFicohsa=${credentials.CodigoBPMFicohsa}&CodigoReclamoFicohsa=${credentials.CodigoReclamoFicohsa}`, {}).pipe(
      switchMap(( res: any  ) => {
        console.log('Respuesta de ingresar la deuda ');
        console.dir(res);
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  /*
  ListLicenciaHn(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicenciaHN`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  
  ListLicenciaHn(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicenciaHN`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListLicenciaGT(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicenciaGT`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  */
  ListTipoDeEntidadComunicativa(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeEntidadComunicativa`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  // GET /api/Proveedor/ListaVehiculosFicohsa
  ListMarcasVehiculosFicohsa(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Proveedor/ListaVehiculosFicohsa`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoDeSolicitanteInformeAjuste(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeSolicitanteInformeAjuste`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListTipoDePersonaSiniestro(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDePersonaSiniestro`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  

//End list
  //https://gist.github.com/AnndresRodriguez/a4216e3f82f45fc4514dc954f967fe9a#file-models-json

//POST /api/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico (produccion: pruebas controladas)
GuardarBPM(credentials:any): Observable<any> {
  console.log("Las credenciales que me envias son :");
  console.table(credentials); // hasta aqui funciona

  /*
  let misdatos ={
    Chasis: "5XYPG4A3XGG076002",
    puntoServicio: "307",
    Poliza: "2001069268",
    Certificado: "1",
    NombreAsegurado: " ROLVIN FERNANDO FIGUEROA ZEPEDA",
    Sucursal: "0001",
    Producto: "AU01",
    Cobertura: "AU01",
    Ramo: "0002",
    FechaOcurrencia: "2024-05-21T16:39:36",
    Causa: "A001",
    ValorReserva: "2500",
    UsuarioBPM: "HN15169",
    Latitud: "14.0985125",
    Longitud: "-87.1849219",
    NombreConductor: " ROLVIN FERNANDO FIGUEROA ZEPEDA",
    Genero: "M",
    Parentesco: "0001",
    Observacion: "40129"
}



*/
let misdatos ={
  Chasis: credentials.Chasis,
  puntoServicio: credentials.puntoServicio,
  Poliza: credentials.Poliza,
  Certificado: credentials.Certificado,
  NombreAsegurado: credentials.NombreAsegurado,
  Sucursal: credentials.Sucursal,
  Producto: credentials.Producto,
  Cobertura: credentials.Cobertura,
  Ramo: credentials.Ramo,
  FechaOcurrencia: credentials.FechaOcurrencia,
  Causa: credentials.Causa,
  ValorReserva: credentials.ValorReserva,
  UsuarioBPM: credentials.UsuarioBPM,
  Latitud: credentials.Latitud,
  Longitud: credentials.Longitud,
  NombreConductor: credentials.NombreConductor,
  Genero: credentials.Genero,
  Parentesco: credentials.Parentesco,
  Observacion: credentials.Observacion
}

    return this.postForSend(`${this.apiUrl}/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico`, misdatos, HTTP_TIMEOUT_BPM_MS, true);
}

//POST /api/FicohsaHN/ValidarDatosReclamoBpm
ValidarDatosReclamoBpm(payload: { IdAtencion: number; Chasis: string }): Observable<BpmClaimValidationResponse> {
  return this.http.post<BpmClaimValidationResponse>(`${this.apiUrl}/FicohsaHN/ValidarDatosReclamoBpm`, {
    IdAtencion: payload.IdAtencion,
    Chasis: payload.Chasis
  }).pipe(
    switchMap((res: any) => of(Array.isArray(res) ? res[0] : res)),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  );
}

//POST /api/Proveedor/ActualizarCodigoBPMAjustador
ActualizarBPM(credentials:any): Observable<any> {
  console.log("Las credenciales para actualizar son :");
  console.table(credentials); // hasta aqui funciona
    const jsonUpdate = {
      IdTablaAjustador: credentials.IdTablaAjustador,
      CodigoBPMFicohsa: credentials.CodigoBPMFicohsa,
      CodigoReclamoFicohsa: credentials.CodigoReclamoFicohsa
    }
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarCodigoBPMAjustador?IdTablaAjustador=${credentials.IdTablaAjustador}&CodigoBPMFicohsa=${credentials.CodigoBPMFicohsa}&CodigoReclamoFicohsa=${credentials.CodigoReclamoFicohsa}`, {jsonUpdate}).pipe(
    switchMap(( res: any  ) => {
      console.log('Respuesta de ingresar la nueva atencion ');
      console.dir(res);
    return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
}

setPushToken(push: string){
  //this.currentPushToken = push;
  const storePushToken = Preferences.set({key:PUSH_TOKEN, value: push })
}

//POST /api/Proveedor/InsertarLesionesHospitalizacion
insertarHospitalizacion(credentials:any): Observable<any> {
  console.log("Las credenciales para actualizar son :");
  console.table(credentials); // hasta aqui funciona
    const jsonUpdate = {
      IdAjustadorAudiencia: credentials.IdAjustadorAudiencia,
      TipoLesionesTercerosAfectados: credentials.TipoLesionesTercerosAfectados,
      NombreHospital: credentials.NombreHospital
    }
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarLesionesHospitalizacion?IdAjustadorAudiencia=${credentials.IdAjustadorAudiencia}&TipoLesionesTercerosAfectados=${credentials.TipoLesionesTercerosAfectados}&NombreHospital=${credentials.NombreHospital}`, {}).pipe(
    switchMap(( res: any  ) => {
      console.log('Respuesta de ingresar la nueva atencion ');
      console.dir(res);
    return from(Promise.all(res));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
}


logout() {
      this.currentAccessToken = null;
     this.currentUser = null;
      // Remove all stored tokens
      localStorage.setItem('previous', this.router.url);
      const deleteAccess = Preferences.remove({ key: ACCESS_TOKEN_KEY });
      const deleteUserData = Preferences.remove({ key: USER_DATA });
      const deleteSecureUser = SecureStoragePlugin.remove({ key: 'User' }).catch(() => null);
      const deleteSecurePassword = SecureStoragePlugin.remove({ key: 'Password' }).catch(() => null);
      localStorage.removeItem('correoActual');
      localStorage.removeItem('passwordActual');
      localStorage.removeItem('ajustadorActual');
      this.isAuthenticated.next(false);
      this.router.navigateByUrl('login', { replaceUrl: true });
      return from(Promise.all([deleteAccess, deleteUserData, deleteSecureUser, deleteSecurePassword]))//, deleteRefresh]));

  //  }),
  //  tap(_ => {
      // this.isAuthenticated.next(false);
      // this.router.navigateByUrl('/', { replaceUrl: true });
   // })
 // ).subscribe();
}

// // Load the refresh token from storage
// // then attach it as the header for one specific API call
// getNewAccessToken() {
//   const refreshToken = from(Preferences.get({ key: REFRESH_TOKEN_KEY }));
//   return refreshToken.pipe(
//     switchMap(token => {
//       if (token && token.value) {
//         const httpOptions = {
//           headers: new HttpHeaders({
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token.value}`
//           })
//         }
//         return this.http.get(`${this.url}/auth/refresh`, httpOptions);
//       } else {
//         // No stored refresh token
//         return of(null);
//       }
//     })
//   );
// }

// // Store a new access token
// storeAccessToken(accessToken) {
//   this.currentAccessToken = accessToken;
//   return from(Preferences.set({ key: ACCESS_TOKEN_KEY, value: accessToken }));
// }
}

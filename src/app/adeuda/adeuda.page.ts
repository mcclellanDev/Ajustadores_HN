import { Component, OnInit } from '@angular/core';
import { emptySignature } from '../environments/signatures';
import { logoFicohsa } from '../environments/default-images';
import { ApiService } from '../services/api.service';
import { resolveAttentionCurrency } from '../utils/currency-display.util';
import { ToastService } from '../services/toast.service';
import { AlertController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { meses } from '../environments/calendario';
import { Entidades } from '../interfaces/extras';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adeuda',
  templateUrl: './adeuda.page.html',
  styleUrls: ['./adeuda.page.scss'],
})
export class AdeudaPage implements OnInit {
meses:any=meses;emptySignature:any= emptySignature

isLoading: boolean=false;openModal: boolean = false;fechaParrafo:any;fechaPie:any;acuerdoDeuda:any;
adeudaCompleta:boolean=false;deviceWidth:any;deviceHeight:any;idAtencion:any;telFijo:any;laPoliza:any;
fsLogo:any;now:any;diaPie :any;mesPie :any;anioPie:any;dia :any;mes :any;anio:any;isSigned:any;
  ya: boolean=false;  atencionId: number;  expediente: any;  moneda: any;  miMoneda: string; isEmptySignature:boolean=true;
  deudaSent: any;  daniosSelectCulpable: any = []; daniosSelectC :any = [];  isDeudaSent: boolean;  danios: any = [];
  daniosSelectAju:any = []; daniosCulpable:any=[];
  debtorSignature: string;
  commonDamages: any[] = [];
  manualDamages: any[] = [];
// datos a arreglar
// poliza, agregar del cliente
// fecha formato
// 

  constructor(private api:ApiService, private toaster: ToastService, private toast:ToastController,
    private alertController: AlertController, private router: Router) {
    this.idAtencion = localStorage.getItem('idAtencion');
    this.deudaSent = localStorage.getItem('deudaSent');

    if (this.deudaSent) {
      this.isDeudaSent = this.deudaSent.toString().split('-')[0] === 'true';
      const deudaSentId = this.deudaSent.toString().split('-')[1];
      if (!(this.isDeudaSent === true && this.idAtencion === deudaSentId)) {
        this.isDeudaSent = false;
      }
    }

    this.isLoading = true;
    this.loadAdeudaDraftFromStorage(true);
    this.getDanios();
    this.fsLogo = logoFicohsa;
  }

  private loadAdeudaDraftFromStorage(initializeDates: boolean): void {
    this.idAtencion = localStorage.getItem('idAtencion');
    this.telFijo = localStorage.getItem('telFijo');
    this.acuerdoDeuda = this.readJson(this.scopedKey('deuda'), {});
    this.daniosSelectCulpable = this.normalizeDamageList(this.readJson(this.scopedKey('daniosSelectCulpa'), []));
    this.resolveAgreementDamageLists();
    this.laPoliza =
      this.acuerdoDeuda?.PolizaExterna ||
      localStorage.getItem('datos-Poliza') ||
      localStorage.getItem('poliza');
    this.isSigned = localStorage.getItem(`acuerdoDeudaEnviado-${this.idAtencion}`);
    this.adeudaCompleta = this.isSigned === 'true';
    this.ya = this.adeudaCompleta;

    if (!initializeDates) {
      return;
    }

    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();

    const daDate = localStorage.getItem('FechaRegistro') || new Date().toISOString();
    const datePart = daDate.split('T')[0];
    this.dia = datePart.substring(8, 10);
    this.mes = datePart.substring(5, 7);
    this.anio = datePart.substring(0, 4);
    const mesIndex = Math.max(0, Math.min(11, parseInt(this.mes, 10) - 1));
    this.fechaParrafo = `${this.dia} de ${this.meses[mesIndex]?.mes || ''} de ${this.anio}`;
    this.fechaPie = `${this.diaPie} días del mes de ${this.meses[this.mesPie]?.mes || ''} de ${this.anioPie}`;
  }

  private readJson<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        return fallback;
      }

      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }

  private scopedKey(prefix: string, suffix?: any): string {
    const attentionId = (this.idAtencion || this.atencionId || localStorage.getItem('idAtencion') || '').toString();
    return suffix !== undefined && suffix !== null
      ? `${prefix}-${attentionId}-${suffix}`
      : `${prefix}-${attentionId}`;
  }

  private normalizeDamageList(value: unknown): any[] {
    return Array.isArray(value) ? value : [];
  }

  private getAffiliateCommonDamages(): any[] {
    const storedCommonDamages = this.normalizeDamageList(this.readJson('daniosSelectAju', []));
    if (storedCommonDamages.length > 0) {
      return storedCommonDamages;
    }

    if (!Array.isArray(this.danios) || this.danios.length === 0) {
      return [];
    }

    const selectedIds = new Set<number>();
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (key?.startsWith('daniosSelect-')) {
        const parsedValue = Number(localStorage.getItem(key));
        if (!Number.isNaN(parsedValue)) {
          selectedIds.add(parsedValue);
        }
      }
    }

    return this.danios.filter((damage) => selectedIds.has(Number(damage.Id)));
  }

  private getAffiliateManualDamagesFromStorage(): any[] {
    const manualDamages: any[] = [];
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (key?.startsWith('danioOtro-')) {
        const storedDamage = this.readOptionalJson(key);
        if (storedDamage) {
          manualDamages.push(storedDamage);
        }
      }
    }

    return manualDamages;
  }

  private resolveAgreementDamageLists(): void {
    this.commonDamages = this.getAffiliateCommonDamages();
    this.manualDamages = this.normalizeDamageList(this.manualDamages);
    if (this.manualDamages.length === 0) {
      this.manualDamages = this.getAffiliateManualDamagesFromStorage();
    }
    this.acuerdoDeuda.DaniosComunes = this.commonDamages;
    this.acuerdoDeuda.DaniosManuales = this.manualDamages;
  }

  private resolveDamageKey(damage: { Id?: unknown; Codigo?: unknown }): string {
    const damageId = damage?.Id ?? damage?.Codigo;
    return damageId === null || damageId === undefined ? '' : String(damageId);
  }

  async getDanios(){
    this.daniosSelectAju = [];
    let losDanios:any;
    losDanios = localStorage.getItem('daniosSelectAju');
    this.daniosSelectAju = JSON.parse(losDanios || '[]') || [];
    console.log('Danios desde localstorage');
    console.dir(this.daniosSelectAju);
    
    this.isLoading = true;
    this.api.listDanios().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.danios = res;
        this.resolveAgreementDamageLists();

        console.log('Todos los daños');
        console.dir(this.danios);
        for (let index = 0; index < localStorage.length; index++) {
          const element = localStorage.getItem(localStorage.key(index));
          if (localStorage.key(index).indexOf(this.scopedKey('daniosSelectCulpa')) == 0) {
            console.log('Este daño : '+element)
          }
        }

      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'danios');
      }

    )

    this.api.ObtenerDaniosExtras(this.idAtencion, Entidades[0].tipoEntidad).subscribe(
      (res) => {
        this.manualDamages = this.normalizeDamageList(res);
        this.resolveAgreementDamageLists();
      },
      () => {
        this.resolveAgreementDamageLists();
      }
    );
  }

  ngOnInit() {
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      
      this.atencionId = parseInt(this.idAtencion, 10);

      this.api.Expediente(this.atencionId).pipe( 
        finalize(async ()=>{
          console.log('fin')
        })
      ).subscribe(
         (res) =>{
          console.log(res, 'respuesta');
          this.expediente= res;
          this.miMoneda = resolveAttentionCurrency(this.expediente[0]);
          this.moneda = this.miMoneda;

          console.log('Asi está armado el acuerdo');
          console.dir(this.expediente[0])
          this.acuerdoDeuda.Anio = this.expediente[0].Year;
          this.acuerdoDeuda.Ciudad = this.expediente[0].Ciudad;
          this.acuerdoDeuda.FechaRegistro = this.expediente[0].FechaRegistro;
          this.acuerdoDeuda.Marca = this.expediente[0].Marca;
          this.acuerdoDeuda.Modelo = this.expediente[0].Modelo;
          this.acuerdoDeuda.NombreAsegurado = this.expediente[0].Cliente;
          this.acuerdoDeuda.Placa = this.expediente[0].NumeroPlaca;
          this.acuerdoDeuda.PolizaExterna = this.expediente[0].PolizaExterna;
          this.laPoliza = this.expediente[0].PolizaExterna || this.laPoliza;
          this.acuerdoDeuda.FechaRegistroDocumento = new Date().toISOString();
          this.acuerdoDeuda.DanioCausadoObservacion = this.acuerdoDeuda.Observaciones;
          console.dir(this.acuerdoDeuda);
          this.isLoading = false;
          this.miMoneda = resolveAttentionCurrency(this.expediente[0]);
          this.moneda = this.miMoneda;
         },
         () => {
          this.isLoading = false;
         }
      )
    } else {
      this.isLoading = false;
    }
  }

  ionViewWillEnter() {
    this.loadAdeudaDraftFromStorage(false);
    this.debtorSignature = localStorage.getItem(this.signatureStorageKey);
  }

  hasNonDigit(str){
    return /\D/g.test(str.toString());
  }

  get signatureStorageKey(): string {
    return `adeudaSignature-${this.idAtencion}`;
  }

  get commitmentLabel(): string {
    return Number(this.acuerdoDeuda.CompromisoDePago) === 1 ? 'Sí' : 'No';
  }

  get licenseTypeLabel(): string {
    return this.acuerdoDeuda.TipoLicenciaDescripcion || this.acuerdoDeuda.TipoLicencia || 'Sin información';
  }

  get licenseExpiryLabel(): string {
    const parsed = this.parseLicenseExpiryDate(this.acuerdoDeuda?.FechaVencimientoLicencia);
    if (!parsed) {
      const rawValue = this.acuerdoDeuda?.FechaVencimientoLicencia;
      return rawValue ? String(rawValue) : 'Sin información';
    }

    const day = String(parsed.getDate()).padStart(2, '0');
    const month = String(parsed.getMonth() + 1).padStart(2, '0');
    const year = parsed.getFullYear();
    return `${day}/${month}/${year}`;
  }

  get licenciaVigente(): boolean {
    const parsed = this.parseLicenseExpiryDate(this.acuerdoDeuda?.FechaVencimientoLicencia);
    if (!parsed) {
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    parsed.setHours(0, 0, 0, 0);
    return parsed >= today;
  }

  private parseLicenseExpiryDate(rawValue: unknown): Date | null {
    const value = String(rawValue || '').trim();
    if (!value) {
      return null;
    }

    const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (isoMatch) {
      return new Date(
        Number(isoMatch[1]),
        Number(isoMatch[2]) - 1,
        Number(isoMatch[3])
      );
    }

    const hnMatch = value.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
    if (hnMatch) {
      return new Date(
        Number(hnMatch[3]),
        Number(hnMatch[2]) - 1,
        Number(hnMatch[1])
      );
    }

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  get totalDamages(): number {
    return this.commonDamages.length + this.manualDamages.length;
  }

  goDebtorSignature() {
    this.router.navigate(['./adeuda-signature']);
  }

  async confirmarEnvio() {
    if (!this.debtorSignature) {
      this.toaster.presentToastNoButtonsRed('La persona responsable debe firmar antes de enviar el acuerdo.', 'top', 'firma');
      return;
    }

    const alert = await this.alertController.create({
      cssClass: 'form-choice-alert',
      header: 'Confirmar envío',
      subHeader: `Atención #${this.idAtencion}`,
      message: 'Verifica que los datos del reconocimiento de deuda sean correctos. Después de enviarlo, el documento quedará registrado con esta firma.',
      buttons: [
        { text: 'Revisar nuevamente', role: 'cancel' },
        { text: 'Sí, enviar', role: 'confirm', handler: () => this.testSave() }
      ]
    });

    await alert.present();
  }

  testSave(){
    if (!this.debtorSignature) {
      this.toaster.presentToastNoButtonsRed('La persona responsable debe firmar antes de enviar el acuerdo.', 'top', 'firma');
      return;
    }

    this.isLoading = true;
    this.acuerdoDeuda.FirmaDeudor = this.debtorSignature.split(',')[1];
    this.guardarDeuda();

  }

  

  guardarDeuda(){
    this.isLoading = true;
      console.dir(this.acuerdoDeuda);


          
          this.api.insertarReconocimientoDeuda(this.acuerdoDeuda).pipe( 
            finalize(() => {
              this.isLoading = false;
              console.log('fin adeuda')
            })
            
          ).subscribe(
             async (res) =>{
              console.log('Esto viene de la deuda');
              console.dir(res);
              this.isLoading = false;
              localStorage.setItem('AcuerdoDeDeuda-'+this.idAtencion, 'true');

              if (this.daniosSelectCulpable.length > 0) {
                for (let index = 0; index < this.daniosSelectCulpable.length; index++) {
                  const element = this.daniosSelectCulpable[index];
                  const damageKey = this.resolveDamageKey(element);

                  let elTipoReparacion = localStorage.getItem(this.scopedKey('TipoReparacionCulpa', damageKey));
                  let reparaArray = {
                    codigoDanio : element.Codigo ?? element.Id,
                    descripcionDanio : element.Descripcion,
                    fotografia : emptySignature.split(',')[1],
                    idAtencion : this.idAtencion,
                    refTipofotoId : element.Id,
                    TipoEntidad : Entidades[1].tipoEntidad,
                    TipoReparacion: elTipoReparacion
                  };
    
                  
                    console.log('Esta es la data desde ajustador')
                    console.dir(reparaArray)
    
                    
                    this.api.insertarConvenioReparacion(reparaArray).pipe( 
                      
                      finalize(async ()=>{
                        this.isLoading = false;
                      })
                    ).subscribe(
                      async (res) =>{
                        console.log(res);
                        console.log("Convenio guardado");
                        
                        if (index == (this.daniosSelectCulpable.length-1)) {
                          this.api.EnviarNotificacionEmail(this.idAtencion);
                        }
                        
                      },
                      async (res) => {
                        this.toaster.presentToast(res.error.Message, 'top', 'taller');
                      }
                
                    )

                    if (index == (this.daniosSelectCulpable.length-1)) {
                      this.ya = true;
                      this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
                      this.adeudaCompleta = true;
                      localStorage.setItem('adeudaCompleta', this.adeudaCompleta.toString());
                      localStorage.setItem(`acuerdoDeudaEnviado-${this.idAtencion}`, 'true');
                      localStorage.removeItem(this.signatureStorageKey);
                    }
                    
                  }
              }else{
              
              this.ya = true;
              this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
              this.adeudaCompleta = true;
              localStorage.setItem('adeudaCompleta', this.adeudaCompleta.toString());
              localStorage.setItem(`acuerdoDeudaEnviado-${this.idAtencion}`, 'true');
              localStorage.removeItem(this.signatureStorageKey);
            }

              localStorage.setItem('deudaSent', 'true-'+this.atencionId);
             },
             (error) => {
              this.toaster.presentToastNoButtonsRed(
                error?.error?.Message || 'No fue posible enviar el acuerdo de deuda. La firma se conservará para que puedas reintentar.',
                'top',
                'deuda'
              );
             })
             /**/
  }

  goExpediente() {
    this.router.navigate(['./expediente'], {
      queryParams: { Id: this.atencionId || Number(this.idAtencion), Source: 1 }
    });
  }

  guardarConvenioReparacionTest(){
    if (!Array.isArray(this.daniosSelectCulpable) || this.daniosSelectCulpable.length === 0) {
      return;
    }

    for (let index = 0; index < this.daniosSelectCulpable.length; index++) {
      const element = this.daniosSelectCulpable[index];
      const damageKey = this.resolveDamageKey(element);
      if (!damageKey) {
        continue;
      }

      const elTipoReparacion = localStorage.getItem(this.scopedKey('TipoReparacionCulpa', damageKey));
      const reparaArray = {
        codigoDanio : element.Codigo ?? element.Id,
        descripcionDanio : element.Descripcion,
        fotografia : emptySignature.split(',')[1],
        idAtencion : this.idAtencion,
        refTipofotoId : element.Id,
        TipoEntidad : Entidades[1].tipoEntidad,
        TipoReparacion: elTipoReparacion
      };

      const storedManualDamage = this.readOptionalJson(this.scopedKey('danioOtroCulpa', damageKey));
      if (storedManualDamage) {
        const tipoReparacionCulpa = localStorage.getItem(this.scopedKey('TipoReparacionCulpa', damageKey));
        const reparaArrayOtro = {
          RefAtencionId: this.idAtencion,
          DescripcionDeDanio: element.Descripcion,
          FechaRegistro: new Date().toISOString(),
          UsuarioId: this.api.currentUser.ProveedorAgenteId,
          TipoEntidad: Entidades[1].tipoEntidad,
          TipoReparacion: tipoReparacionCulpa,
          CodigoDanioVehiculo: storedManualDamage.Id
        };

        console.log('Esta es la data desde ajustador danio otro');
        console.dir(reparaArrayOtro);
      }

      console.log('Esta es la data desde ajustador');
      console.dir(reparaArray);
    }
  }

  private readOptionalJson(key: string): any | null {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        return null;
      }

      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  printPdf(){
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/DownloadReconocimientoDeDeuda/';

    if (this.adeudaCompleta == true) {
      this.openModal = true;
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl+parseInt(this.idAtencion) , '_self');
    }else{
      this.openModal = false;
      this.toaster.presentToastNoButtons('Debes guardar el acuerdo firmado antes de imprimirlo.', 'middle', 'deuda');
    }
  }

  previewPdf(){
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/ReconocimientoDeDeuda/';
    
    if (this.adeudaCompleta == true) {
      this.openModal = true;
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl+parseInt(this.idAtencion) , '_self');
    }else{
      this.openModal = false;
      this.toaster.presentToastNoButtons('Debes guardar el acuerdo firmado antes de previsualizarlo.', 'middle', 'deuda');
    }
  }
}

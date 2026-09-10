import { imagePrefix, fondos } from '../environments/default-images';
import { Keyboard } from '@capacitor/keyboard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Atenciones } from '../interfaces/atenciones';
import { ApiService } from '../services/api.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ToastService } from '../services/toast.service';
import { presentHelpAlert } from '../utils/help-alert.util';
import { BpmClaimPreflightService } from '../services/bpm-claim-preflight.service';
import { finalize, switchMap, map, catchError } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { printerIcons } from '../environments/printer-center';
import { TabsPage } from '../tabs/tabs.page';
import {
  AttentionStatusView,
  attentionNeedsClaimLookup,
  normalizeAttentionColor,
  resolveAttentionStatus
} from '../utils/attention-status.util';
import {
  getAttentionDetailRecord,
  persistDatosDeAtencion,
  persistExpediente
} from '../utils/attention-details.util';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{
  atenciones:Atenciones[] | undefined;  imagenes:any=[];  public results: Atenciones[] = [];  public resultsView: Array<{ atencion: Atenciones; status: AttentionStatusView; index: number }> = [];
  idAtencion:any;  elColorEstado:any;  isKeyboard: boolean | undefined;  esClienteCompleto:boolean | undefined;  isLoading: boolean | undefined;  searchInterval:any;
  timer:number=0;  busca:string="";  laImg: any;  printUrl:any; isPrint:boolean=true;  public iconos = printerIcons;  dateAt:number= Date.now();
  fechaDesde: string; fechaHasta: string; nombreAsegurado = ''; searchSummary = '';
  isDateSearchModalOpen = false;
  isAffiliateSearchModalOpen = false;
  isFilteredView = false;
  private readonly defaultPageSize = 100;
  private readonly defaultRecentCount = 25;

  @ViewChild("searchCase", { static: true }) inputS: any;
  datosDeAtencion: any;

  constructor(private router: Router,    private alert: AlertController,    private api: ApiService,    private platform:Platform,
    private so: ScreenOrientation,    private tostador: ToastService, private tabsator:TabsPage,
    private bpmPreflight: BpmClaimPreflightService) {
      this.tostador.dismissToast();
      //this.searchInterval = setInterval(()=>{this.searchSequence()} ,  1000);
      this.idAtencion = localStorage.getItem('idAtencion');
      for (let index = 0; index < printerIcons.length; index++) {
        const element = printerIcons[index];
        
        console.log('opcion de impresion '+ element.descripcion)
      }
    }
  ngOnInit() {
    let origin = localStorage.getItem('origin');
    this.initializeDefaultDateRange();
    
    this.platform.ready().then(() => {
      Keyboard.addListener('keyboardDidShow', info => {
        console.log('keyboard did show with height:', info.keyboardHeight)
        this.isKeyboard = true;

        setTimeout(() => {
          
        }, 50);
      });

      Keyboard.addListener('keyboardDidHide', () => {
        console.log('el teclado se escondio keyboardDidHide');
        this.isKeyboard = false;
      });

        
    });
  }

  ionViewWillEnter() {
    this.getAtenciones();
  }

  searchSequence(){
    this.timer = this.getRandomInt(4);
    if(this.timer > 0){
      clearInterval(this.searchInterval);
      this.getAtenciones();
    }else{
      this.searchSequence();
    }
  }

  async getAtenciones(){
    this.isFilteredView = false;
    this.searchSummary = `Ultimas ${this.defaultRecentCount} atenciones`;
    this.isLoading = true;
    this.api.MisAtenciones(this.api.currentUser.ProveedorAgenteId).pipe(
      switchMap((res) => this.enrichAttentionsWithClaimCodes(res)),
      finalize(async ()=>{console.log('fin')})
    ).subscribe(
      async (res) =>{
        this.applySearchResults(res, { displayLimit: this.defaultRecentCount });
        this.isLoading = false;
      },
      async (res) => {
        this.isLoading = false;
        console.log(res);
        await presentHelpAlert(this.alert, res, 'No fue posible cargar las atenciones.');
      }
    )
  }

  buscarPorPeriodo() {
    if (!this.validateDateRange()) {
      return;
    }

    this.closeDateSearchModal();
    this.runAttentionSearch({
      FechaDesde: this.toStartOfDayIso(this.fechaDesde),
      FechaHasta: this.toEndOfDayIso(this.fechaHasta),
      NombreAsegurado: '',
    }, `Periodo ${this.formatDisplayDate(this.fechaDesde)} - ${this.formatDisplayDate(this.fechaHasta)}`);
  }

  openDateSearchModal() {
    this.isDateSearchModalOpen = true;
  }

  closeDateSearchModal() {
    this.isDateSearchModalOpen = false;
  }

  openAffiliateSearchModal() {
    this.isAffiliateSearchModalOpen = true;
  }

  closeAffiliateSearchModal() {
    this.isAffiliateSearchModalOpen = false;
  }

  buscarPorNombre() {
    const name = this.nombreAsegurado?.trim();
    if (!name) {
      void this.tostador.presentToastAlert(
        'Indica el nombre del afiliado para buscar.',
        'top',
        'warning',
        5000
      );
      return;
    }

    this.closeAffiliateSearchModal();
    this.runAttentionSearch({
      NombreAsegurado: name,
    }, `Afiliado: ${name}`);
  }

  restablecerBusqueda() {
    this.nombreAsegurado = '';
    this.initializeDefaultDateRange();
    this.closeDateSearchModal();
    this.closeAffiliateSearchModal();
    void this.getAtenciones();
  }

  private runAttentionSearch(
    criteria: {
      FechaDesde?: string | null;
      FechaHasta?: string | null;
      NombreAsegurado?: string | null;
    },
    summary: string
  ) {
    this.isLoading = true;
    this.api.BuscarMisAtenciones({
      IdProveedorAgente: this.api.currentUser.ProveedorAgenteId,
      FechaDesde: criteria.FechaDesde ?? null,
      FechaHasta: criteria.FechaHasta ?? null,
      NombreAsegurado: criteria.NombreAsegurado ?? '',
      Offset: 0,
      PageSize: this.defaultPageSize,
    }).pipe(
      switchMap((res) => this.enrichAttentionsWithClaimCodes(res)),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        this.isFilteredView = true;
        this.searchSummary = summary;
        this.applySearchResults(res);
      },
      async (error) => {
        await presentHelpAlert(this.alert, error, 'No fue posible buscar atenciones.');
      }
    );
  }

  private applySearchResults(res: Atenciones[], options?: { displayLimit?: number }) {
    console.log(res);
    this.atenciones = res;
    localStorage.setItem('atenciones-ajustador', JSON.stringify(this.atenciones));
    const sorted = [...(this.atenciones || [])].sort((a, b) => b.IdAtencion - a.IdAtencion);
    this.results = options?.displayLimit ? sorted.slice(0, options.displayLimit) : sorted;
    this.rebuildResultsView();
  }

  private initializeDefaultDateRange() {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    this.fechaDesde = monthStart.toISOString();
    this.fechaHasta = today.toISOString();
  }

  private validateDateRange(): boolean {
    if (!this.fechaDesde || !this.fechaHasta) {
      void this.tostador.presentToastAlert(
        'Selecciona la fecha inicial y final del periodo.',
        'top',
        'warning',
        5000
      );
      return false;
    }

    if (new Date(this.fechaDesde) > new Date(this.fechaHasta)) {
      void this.tostador.presentToastAlert(
        'La fecha inicial no puede ser mayor que la fecha final.',
        'top',
        'warning',
        5000
      );
      return false;
    }

    return true;
  }

  private toStartOfDayIso(value: string): string {
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    return date.toISOString();
  }

  private toEndOfDayIso(value: string): string {
    const date = new Date(value);
    date.setHours(23, 59, 59, 999);
    return date.toISOString();
  }

  private formatDisplayDate(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return date.toLocaleDateString('es-HN');
  }

  getAttentionStatus(atencion: Atenciones): AttentionStatusView {
    return resolveAttentionStatus(atencion);
  }

  formatAttentionDate(fecha: Date | string): string {
    const value = this.normalizeAttentionDateValue(fecha);
    return value.split('T')[0] || '';
  }

  formatAttentionTime(fecha: Date | string): string {
    const value = this.normalizeAttentionDateValue(fecha);
    return (value.split('T')[1] || '').substring(0, 5);
  }

  private normalizeAttentionDateValue(fecha: Date | string): string {
    if (typeof fecha === 'string') {
      return fecha;
    }

    return fecha?.toISOString?.() || '';
  }

  private rebuildResultsView(source: Atenciones[] = this.results) {
    this.resultsView = (source || []).map((atencion, index) => ({
      atencion,
      status: resolveAttentionStatus(atencion),
      index
    }));
  }

  private enrichAttentionsWithClaimCodes(atenciones: Atenciones[]) {
    const normalized = (atenciones || []).map((item) => ({ ...item }));
    const pendingLookup = normalized.filter((item) => attentionNeedsClaimLookup(item));

    if (!pendingLookup.length) {
      return of(normalized);
    }

    return forkJoin(
      pendingLookup.map((item) =>
        this.api.DatosDeAtencion(item.IdAtencion).pipe(
          map((detailResponse) => {
            const detail = Array.isArray(detailResponse) ? detailResponse[0] : detailResponse;
            item.CodigoReclamoFicohsa = detail?.CodigoReclamoFicohsa?.toString().trim() || '';
            item.CodigoBPMFicohsa = detail?.CodigoBPMFicohsa?.toString().trim() || item.CodigoBPMFicohsa;
            item.LbEstado = detail?.LbEstado?.toString().trim() || item.LbEstado;
            return item;
          }),
          catchError(() => {
            item.CodigoReclamoFicohsa = item.CodigoReclamoFicohsa || '';
            return of(item);
          })
        )
      )
    ).pipe(map(() => normalized));
  }

  abreAtencion(atencionId:any, atencionEstadoColor:any){

    console.log(atencionId+', '+atencionEstadoColor);
    localStorage.setItem('elColorEstado', atencionEstadoColor);
    //localStorage.setItem('idAtencion', atencionId);
    console.log(atencionEstadoColor == "green")
    if (atencionEstadoColor == "green") {
      this.isLoading = true;
      this.api.DatosDeAtencion(atencionId).pipe(
        finalize(async () => {
          this.isLoading = false;
        })
      ).subscribe(
        async (res) => {
          console.log("Detalles de audiencia : " + res.length);
          console.dir(res);
          if (res.length > 0) {
            this.esClienteCompleto = true;
            localStorage.setItem('esCompleto', this.esClienteCompleto.toString());
          }

        },
        async (res) => {
          this.esClienteCompleto = false;
          localStorage.setItem('esCompleto', this.esClienteCompleto.toString());
        }
      );

      this.router.navigate(['./expediente'], { queryParams: { Id: atencionId, Source: 2 } });
    } else {
      this.tostador.presentToastNoButtonsRed('Esta atención ya no puede editarse. Para mayor detalle, consulta a tu administrador de sistema.', 'top', 'search-case');
    }

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  verExpedienteBusqueda(idAtencion: number, indexInput:any) {
    const atencion = this.results?.find((item) => item.IdAtencion === idAtencion)
      || this.results?.[indexInput];

    if (!atencion || !idAtencion) {
      void this.tostador.presentToastAlert(
        'No se pudo abrir esta atención.',
        'top',
        'warning',
        5000
      );
      return;
    }

    this.idAtencion = idAtencion;
    this.elColorEstado = normalizeAttentionColor(atencion.ColorEstado) || atencion.ColorEstado;
    localStorage.setItem('elColorEstado', this.elColorEstado || '');
    localStorage.setItem('idAtencion', idAtencion.toString());
    localStorage.setItem('indexAtencion-2', String(indexInput ?? ''));
    localStorage.setItem('elCliente', atencion.Cliente || '');
    this.obtenerCacheCliente(idAtencion);

    this.isLoading = true;
    forkJoin({
      expediente: this.api.Expediente(idAtencion).pipe(catchError(() => of(null))),
      detalle: this.api.DatosDeAtencion(idAtencion).pipe(catchError(() => of(null))),
    }).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: ({ expediente, detalle }) => {
        persistExpediente(expediente);
        const record = getAttentionDetailRecord(detalle);
        if (record) {
          this.datosDeAtencion = persistDatosDeAtencion(record);
          const color = normalizeAttentionColor(record.ColorEstado) || this.elColorEstado;
          if (color) {
            this.elColorEstado = color;
            localStorage.setItem('elColorEstado', color);
          }
        }

        const expedienteRecord = Array.isArray(expediente) ? expediente[0] : expediente;

        this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion, Source: 2 } }).then(() => {
          void this.bpmPreflight.validateAndPrompt(idAtencion, expedienteRecord);
        });
      },
      error: () => {
        this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion, Source: 2 } });
      }
    });
  }

  obtenerCacheCliente(AtencionId:any){
    this.api.ObtenercacheCliente(AtencionId).subscribe(
      async (res) => {
        

        console.log("Detalles de cache en ver expediente: " + res.length);
        console.dir(res);
        if (res) {
          let indexFlag = 'no tiene';
        let respuesta = '';
        let verificacion:any;
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          respuesta = respuesta+element;
          
          if (index== (res.length-1)) {
            verificacion = respuesta.indexOf(indexFlag);
            if (verificacion != -1) {
              this.esClienteCompleto = false;
            }else{
              this.esClienteCompleto == true;
            }
          }
        }
        }else{
         this.esClienteCompleto = false;
        }
        
      },
      async (error) => {
        this.esClienteCompleto = false;
      }
    )
  }

  goPrinters(){
    this.router.navigate(['./printer'])
  }

  imprimirPDF(tipo:any, indexPrinter:any){
    if (tipo == 1) {
      this.printUrl = printerIcons[indexPrinter].urlPreview+this.idAtencion;
    }else{
      this.printUrl = printerIcons[indexPrinter].urlPrint+this.idAtencion;
    }

    window.open(this.printUrl, '_blank');
  }

  /*
  getfondo(atencionId) {
    this.api.obtenerFotoPorAtencion(atencionId, 1).pipe( 
      finalize(async ()=>{console.log('fin')})
    ).subscribe(
       async (res) =>{
        console.log('Jue')
        console.dir(res[0].FotoFirma)
        this.laImg = imagePrefix+res[0].FotoFirma;
      },
      async (res) => {
        console.log(res.status)
        this.laImg = fondos[Math.floor(Math.random() * fondos.length)];
      }
    )

    return this.laImg;
    
  }
  */

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs';
import { ToastService } from '../services/toast.service';
import {
  persistAudienceTableIdToCache,
  resolveAudienceTableIdFromCache,
} from '../utils/audience-table-cache.util';

@Component({
  selector: 'app-prepare-audience',
  templateUrl: './prepare-audience.page.html',
  styleUrls: ['./prepare-audience.page.scss'],
})
export class PrepareAudiencePage implements OnInit {
  idAtencion: any;
  isLoading = false;
  results = [];
  abogadoNombre = 'Seleccionar Abogado';
  lugarAudiencia = '';
  fechaAudiencia: any;
  formateadaAudiencia: any;
  idTablaDeAjustador: any;
  abogadosAudiencias = [];
  idAbogado: any;
  laFecha: any;
  formattedDate: any;
  dateFormat: any;
  timeFormat: any;
  idAgente: any;
  lawyerSearchOpen = false;
  private expedienteFromState: any;
  private navigationAudienceId: any;

  constructor(
    private router: Router,
    private alert: AlertController,
    private api: ApiService,
    private toaster: ToastService
  ) {
    this.syncAttentionContextFromNavigation();
  }

  ngOnInit() {
    this.idAgente = this.api.currentUser?.ProveedorAgenteId;
    this.loadAbogados();
  }

  ionViewWillEnter() {
    this.syncAttentionContextFromNavigation();
    this.loadAudienceTableId();
  }

  private syncAttentionContextFromNavigation(): void {
    const navigation = this.router.getCurrentNavigation();
    const routerState = navigation?.extras?.state as { data?: any[] } | undefined;
    const historyState = (window.history.state?.data ? window.history.state : undefined) as
      | { data?: any[] }
      | undefined;
    const state = routerState ?? historyState;
    const stateData = state?.data;

    if (Array.isArray(stateData)) {
      this.expedienteFromState = stateData[0]?.forma;
      const attentionMeta = stateData[1];

      if (attentionMeta?.idAtencion != null && attentionMeta?.idAtencion !== '') {
        this.idAtencion = attentionMeta.idAtencion;
        localStorage.setItem('idAtencion', this.idAtencion.toString());
      }

      this.navigationAudienceId =
        attentionMeta?.idTablaAjustador ??
        attentionMeta?.idAjusteAudiencia ??
        null;
    }

    if (!this.idAtencion) {
      this.idAtencion = localStorage.getItem('idAtencion');
    }
  }

  goBack() {
    const atencionId = Number(this.idAtencion || localStorage.getItem('idAtencion'));
    this.router.navigate(['./expediente'], {
      queryParams: {
        Id: Number.isFinite(atencionId) ? atencionId : undefined,
        Source: 1
      }
    });
  }

  private loadAbogados() {
    this.api.Abogados(3).pipe(
      finalize(() => {
        console.log('Abogados loaded');
      })
    ).subscribe(
      (res) => {
        if (res) {
          this.abogadosAudiencias = res;
          this.results = res;
        }
      },
      async (res) => {
        const alert = await this.alert.create({
          header: 'HELP',
          message: res.error?.Message || 'No fue posible cargar el listado de abogados.',
          buttons: ['Ok']
        });
        await alert.present();
      }
    );
  }

  private loadAudienceTableId() {
    const atencionId = parseInt(this.idAtencion, 10);
    if (!Number.isFinite(atencionId)) {
      console.warn('[prepare-audience] Invalid attention id:', this.idAtencion);
      return;
    }

    this.idTablaDeAjustador = null;

    if (this.applyAudienceTableId(this.navigationAudienceId, atencionId)) {
      return;
    }

    const stateRecord = Array.isArray(this.expedienteFromState)
      ? this.expedienteFromState[0]
      : this.expedienteFromState;

    if (this.recordMatchesAttention(stateRecord, atencionId) &&
      this.applyAudienceTableId(stateRecord, atencionId)) {
      return;
    }

    const cachedId = resolveAudienceTableIdFromCache(atencionId);
    if (this.applyAudienceTableId(cachedId, atencionId)) {
      return;
    }

    this.api.Expediente(atencionId).subscribe(
      (res) => {
        const record = Array.isArray(res) ? res[0] : res;
        if (this.recordMatchesAttention(record, atencionId) &&
          this.applyAudienceTableId(record, atencionId)) {
          return;
        }
        this.fetchAudienceTableIdFromAttentionData(atencionId);
      },
      () => this.fetchAudienceTableIdFromAttentionData(atencionId)
    );
  }

  private fetchAudienceTableIdFromAttentionData(atencionId: number) {
    this.api.DatosDeAtencion(atencionId).subscribe(
      (res) => {
        const record = Array.isArray(res) ? res[0] : res;
        if (this.applyAudienceTableId(record, atencionId)) {
          return;
        }
        this.fetchAudienceTableIdFromApi(atencionId);
      },
      () => this.fetchAudienceTableIdFromApi(atencionId)
    );
  }

  private fetchAudienceTableIdFromApi(atencionId: number) {
    this.api.ObtenerIdTablaAjustador(atencionId).pipe(
      finalize(() => {
        console.log('Audience table lookup finished');
      })
    ).subscribe(
      (res) => {
        if (this.applyAudienceTableId(res, atencionId)) {
          return;
        }
        this.logAudienceLookupWarning(
          'Audience table id not returned by ObtenerIdTablaAjustador.',
          res
        );
      },
      (error) => {
        this.logAudienceLookupWarning(
          this.formatAudienceLookupError(error?.error?.Message),
          error
        );
      }
    );
  }

  private recordMatchesAttention(record: any, atencionId: number): boolean {
    if (!record || typeof record !== 'object') {
      return true;
    }

    const refAtencionId = record.RefAtencionId ??
      record.IdAtencion ??
      record.idAtencion;

    if (refAtencionId == null || refAtencionId === '') {
      return true;
    }

    return parseInt(refAtencionId, 10) === atencionId;
  }

  private formatAudienceLookupError(message?: string): string {
    const incompleteMessage =
      'Esta solicitud aún no se ha completado. Para poder enviarla, es necesario que completes la solicitud BPM con los datos del formulario de cliente y el de ajustador.';

    if (!message) {
      return incompleteMessage;
    }

    if (message.includes('RefAtencionId') || message.includes('LINQ to Entities')) {
      return incompleteMessage;
    }

    return message;
  }

  private applyAudienceTableId(value: any, atencionId?: number): boolean {
    const id = this.extractAudienceTableId(value);
    if (!id) {
      return false;
    }

    const attentionId = atencionId ?? parseInt(this.idAtencion, 10);
    this.idTablaDeAjustador = id;
    persistAudienceTableIdToCache(id, attentionId);
    console.log('[prepare-audience] Audience table id resolved:', id, 'for attention:', attentionId);
    return true;
  }

  private extractAudienceTableId(value: any): string | null {
    if (value == null || value === '' || value === 0) {
      return null;
    }

    if (Array.isArray(value)) {
      return this.extractAudienceTableId(value[0]);
    }

    if (typeof value === 'object') {
      const id = value.IdAjusteAudiencia ??
        value.IdAudiencia ??
        value.IdAjustadorAudiencia ??
        value.IdTablaAjustador ??
        value.Id;
      return id != null && id !== '' && id !== 0 ? id.toString() : null;
    }

    return value.toString();
  }

  private logAudienceLookupWarning(message: string, detail?: unknown): void {
    console.warn('[prepare-audience] Audience table lookup issue:', message, detail);
  }

  closeAbogadosSearch() {
    this.lawyerSearchOpen = false;
  }

  handleInput(event: any) {
    const query = (event.detail?.value || event.target?.value || '').toLowerCase();
    this.results = this.abogadosAudiencias.filter((d) =>
      d.AgenteNombre.toLowerCase().indexOf(query) > -1
    );
  }

  goSearch() {
    this.results = this.abogadosAudiencias;
    this.lawyerSearchOpen = true;
  }

  selectAbogado(abogadoId: number) {
    this.idAbogado = abogadoId;

    for (const element of this.abogadosAudiencias) {
      if (abogadoId === element.IdAjustador) {
        this.abogadoNombre = element.AgenteNombre;
        setTimeout(() => {
          this.closeAbogadosSearch();
        }, 300);
        break;
      }
    }
  }

  marcarFechaAudiencia(fechaAudiencia) {
    this.laFecha = new Date(fechaAudiencia).toISOString();
    this.formateadaAudiencia = new Date(fechaAudiencia).toLocaleString();
    this.dateFormat = fechaAudiencia.split('T')[0];
    const timeString = this.formateadaAudiencia.split(', ')[1];
    this.timeFormat = timeString?.split(' ')[0];
    this.formattedDate = this.formatDateForSQL();
  }

  formatDateForSQL() {
    const date = new Date(this.fechaAudiencia);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  audienceSave() {
    const atencionId = parseInt(this.idAtencion, 10);

    if (!this.idTablaDeAjustador) {
      console.warn('[prepare-audience] Sending audience without resolved IdAjustadorAudiencia.');
    } else if (Number.isFinite(atencionId)) {
      persistAudienceTableIdToCache(this.idTablaDeAjustador, atencionId);
    }

    if (!this.idAbogado) {
      this.toaster.presentToastAlert('Selecciona un abogado antes de enviar.', 'top', 'warning', 6000);
      return;
    }

    if (!this.lugarAudiencia?.trim()) {
      this.toaster.presentToastAlert('Indica el lugar de la audiencia.', 'top', 'warning', 6000);
      return;
    }

    if (!this.formattedDate) {
      this.toaster.presentToastAlert('Selecciona la fecha y hora de la audiencia.', 'top', 'warning', 6000);
      return;
    }

    this.isLoading = true;
    const jsonAudiencia = {
      IdAjustadorAudiencia: this.idTablaDeAjustador,
      RefProveedorAgenteAbogadoId: this.idAbogado,
      AgendarAudiencia: 1,
      FechaHora: this.formattedDate,
      Fecha: this.dateFormat,
      Hora: this.timeFormat,
      Lugar: this.lugarAudiencia,
      idAgente: this.idAgente
    };

    console.log('[prepare-audience] jsonAudiencia for attention', this.idAtencion);
    console.dir(jsonAudiencia);

    this.api.ActualizarAudicion(jsonAudiencia).pipe(
      finalize(() => {
        this.isLoading = false;
        console.log('Audience update finished');
      })
    ).subscribe(
      (res) => {
        if (res) {
          this.toaster.presentToastAlert('Audiencia actualizada exitosamente.', 'top', 'primary', 10000);
        }
      },
      (error) => {
        this.toaster.presentToastAlert(
          error?.error?.Message || 'No fue posible actualizar la audiencia.',
          'top',
          'danger',
          10000
        );
      }
    );
  }
}

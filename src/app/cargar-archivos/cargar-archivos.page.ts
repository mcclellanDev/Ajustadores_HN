import { ApiService } from '../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal, NavController, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { archivosTipo } from 'src/app/environments/arrays';
import { foto, video, pdf } from 'src/app/environments/arrays';
import { imagePrefix, pdfIconUrl } from 'src/app/environments/arrays';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as $ from 'jquery';
import * as exifr from 'exifr';
//import { ModalImagenPage } from 'src/app/Modales/modal-imagen/modal-imagen.page';
import { finalize } from 'rxjs';
import { ModalImagenPage } from '../Modales/modal-imagen/modal-imagen.page';
import { tipofotos } from '../interfaces/formulario';



@Component({
  selector: 'app-cargar-archivos',
  templateUrl: './cargar-archivos.page.html',
  styleUrls: ['./cargar-archivos.page.scss'],
})
export class CargarArchivosPage implements OnInit {
  
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  customActionSheetOptions = {cssClass: 'custom-action-sheet'}; customModalOptions = {cssClass: 'custom-select-modal'};
  isVideo: boolean | undefined;  fotos: foto[]=[]; tipoFotos: tipofotos[]=[];
  videos: video[]=[]; pdfs: pdf[]=[];
  loadValue:number = 0;  loadInterval: any; isLoadingItem:boolean=false; isLoading:boolean=false;
  archivoTipo: any; losArchivos:any = []; archivosTipo = archivosTipo
  cantidad: number | undefined;  daImagen: any;  img: foto={}; vid: video={}; pdf: pdf={};
  sizes: any = [];  gratestSize: number | undefined; sizesVids: any = [];
  sizesPdfs: any = [];  archivoTipoId: number | undefined;  items: any;
  canDismiss: boolean=false; idAtencion: any | undefined; esSolicitud:boolean=false;
  private uploadAlertOpen = false;
  private readonly defaultUploadErrorMessage =
    'No ha sido posible subir el material de evidencia en este momento. Por favor vuelve e inténtalo.';

  fotoData:any=[];  Expediente: any = []; fotoIdTipo:any;  tipo: number = 0; videoFile: File;
  videosData: any = [];

  constructor(private navCtrl: NavController, private route:ActivatedRoute, private router: Router,
    private toaster:ToastService, private myModal:ModalController, private api:ApiService, private loading: LoadingController,    
    private alert: AlertController
    ) { 
      
      this.esSolicitud = localStorage.getItem('esSolicitud') == 'true';
      this.idAtencion = localStorage.getItem('idAtencion');
      
    }

  ngOnInit() {

    setTimeout(() => {
      const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
      if (fileInputs) {
        for (let index = 0; index < fileInputs.length; index++) {
          const element = fileInputs[index];
          $('progress').eq(index).remove();
        }
      }

    }, 900);

    this.getTipoFotos();
  }

  ngAfterViewInit() {
    const el:any = document.getElementById('sortable-list');
    

  }

  goBack() {
    this.isLoading = false;
    this.isLoadingItem = false;
    localStorage.setItem('homeOrigen', 'false');
    this.navCtrl.back();
  }

  private resolveUploadErrorMessage(error: any): string {
    const backendMessage = error?.error?.Message ||
      error?.error?.message ||
      error?.message;

    if (typeof backendMessage === 'string' && backendMessage.trim()) {
      return backendMessage.trim();
    }

    if (error?.status) {
      return `${this.defaultUploadErrorMessage} (HTTP ${error.status})`;
    }

    return this.defaultUploadErrorMessage;
  }

  private async presentUploadErrorAlert(error?: any): Promise<void> {
    if (this.uploadAlertOpen) {
      return;
    }

    this.uploadAlertOpen = true;
    const alert = await this.alert.create({
      cssClass: 'form-choice-alert',
      header: 'No se pudo subir la evidencia',
      message: this.resolveUploadErrorMessage(error),
      buttons: [
        {
          text: 'Entendido',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.goBack();
          }
        }
      ]
    });

    alert.onDidDismiss().then(() => {
      this.uploadAlertOpen = false;
    });

    await alert.present();
  }

  handleFileModal(tipo:any, file: any, index:number){
    void 0;
    void 0;
    let daFile = file.Foto;
    
    //self.alert('Tipo : '+tipo+', index : '+index)

    if (tipo==2) {
      //this.openModalSetVideo(file, index);
    }else{
      this.openModalImagen(daFile.split(',')[1], 2, index, file.Descripcion);
    }
  }

  async openModalImagen(foto:string, tipo:number, index:any, descripcion:any) {
    void 0;
    
  
    void 0;
    const modal = await this.myModal.create({
      component: ModalImagenPage,
      componentProps: { foto:foto, tipo:tipo, index:index, descripcion:descripcion, delete:false },
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 1,
      cssClass: 'modal-imagen',
      canDismiss: this.canDismiss
    });
    
    setTimeout(() => {
      $('ion-modal').fadeIn('xslow');
      $('ion-modal').attr('style', '--height:100%; transition: height 0.25s ease-in;');
      
    }, 900);

    modal.onDidDismiss().then(() => {
      void 0;
      let newDescription:any = localStorage.getItem('newDescription');
      let descriptionIndex:any = localStorage.getItem('descriptionIndex');
      let daIndex = parseInt(descriptionIndex);

      
      this.fotos[daIndex].Descripcion = newDescription;
      $('.chip-descripcion').eq(daIndex).text(newDescription);

      localStorage.setItem('fotos', JSON.stringify(this.fotos));
    });

    setTimeout(() => {}, 6000);
    await modal.present();
    
  }


  /*
  async openModalSetVideo(video: any, index:number) {
    
    void 0;
    void 0;

    const modal = await this.myModal.create({
      component: SubirVideosPage,
      componentProps: { video: video, index: index },
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 1,
      cssClass: 'modal-video'
    });
    
    setTimeout(() => {
      $('ion-modal').fadeIn('xslow');
      $('ion-modal').attr('style', '--height:100%; transition: height 0.25s ease-in;');
    }, 900);
    

    return await modal.present();

    
  }
  

  


  
  async openModalSetFile(type:any, file: any, index:number) {
    
    void 0;
    void 0;

    const modal = await this.myModal.create({
      component: SubirVideosPage,
      componentProps: {type:type, file: file, index: index },
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 1,
      cssClass: 'modal-video'
    });
    
    setTimeout(() => {
      $('ion-modal').fadeIn('xslow');
      $('ion-modal').attr('style', '--height:100%; transition: height 0.25s ease-in;');
    }, 900);
    

    return await modal.present();

    
  }
  */

  uploadVideos() {
    this.videosData = [];
    console.log('El video '); console.dir(this.videoFile);

    if (this.videoFile && this.idAtencion) {
  
      let thisThing = "https://testportal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive";
      let thisLocal = "http://localhost:18951/help_CargaDeArchivos/UploadArchive";
      
      this.api.GuardarVideo(this.videoFile, this.idAtencion).pipe(
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe(
        (e) => {
          let estado = e.estado;
          if (estado == true) {
            this.toaster.presentToastAlert("Video cargado exitosamente!", 'middle', 'primary', 3000);
          } else {
            void this.presentUploadErrorAlert({ message: e?.mensaje });
          }
          console.log(e.estado);
          console.log(e.mensaje);
        },
        (error) => {
          console.error('[cargar-archivos] Video upload failed', error);
          void this.presentUploadErrorAlert(error);
        }
      )


      
    } else {
      console.warn('Seleccione un archivo de video y proporcione un ID de atención válido.');
    }
  }

  uploadVideosNo(){
    void 0;
    void 0
  }

  async getTipoFotos(){
    const load = await this.loading.create();
    await  load.present();
    
    this.api.ListTipoFoto().pipe( 
      finalize(async ()=>{
        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
          this.tipoFotos= res;
      },
      async (res) => {
        const alert = await this.alert.create({
          header:'HELP',
          message:res.error.Message,
          buttons:['Ok']
        });
        await alert.present();
      }
    )
  }

  randomIntFromInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  loadingFiles(){
    this.isLoadingItem = true;
    let sizesArray:any=[];

    
    
    if (this.archivoTipo == 0) {
      sizesArray = this.sizes;
    }

    if (this.archivoTipo == 1) {
      sizesArray = this.sizesVids;
    }

    if (this.archivoTipo == 2) {
      sizesArray = this.sizesPdfs;
    }

    setTimeout(() => {
      let lasProgres = document.getElementsByTagName('progress');
      if (lasProgres.length > 0) {

        for (let index = 0; index < lasProgres.length; index++) {
          this.loadInterval = setInterval(() => {
            this.loadValue += 2533;
            $('progress').eq(index).val(this.loadValue);
            void 0;
            $('progress').eq(index).attr('max', sizesArray[index]);

            void 0
            void 0

            if (this.gratestSize && (this.loadValue > this.gratestSize)) {
              clearInterval(this.loadInterval)
              this.isLoadingItem = false;
              //this.toaster.presentToaster('Archivos subidos con éxito!', 'top', 'primary', 3000, false);
            }
          }, 300);

          if (index == (lasProgres.length-1)) {}
        }
        
      }
    }, 3000);

    setTimeout(() => {}, 10000);
  }

  
  findLargestSize(array:any){
    void 0;
    void 0

    var largest = array[0];

    for (var i = 0; i < array.length; i++) {
      if (array[i] > largest ) {
        largest = array[i];
      }

      if (i < (array.length-1)) {
        return largest;
      }
    }
  }

  openModalSetVideoNo(video: any, index:number){
    void 0;
    void 0;
    $('#open-modal').click();
  }

  goTo(index: any, array:any) {
    void 0;
    void 0;

    if (index == 1) {
      localStorage.setItem('dArray', JSON.stringify(array[0].Video));
    }
    if (index != 1) {
      localStorage.setItem('dArray', JSON.stringify(array));
    }
    
    let screen = archivosTipo[index].actionUrl;
    this.router.navigateByUrl(screen);
  }

  private async buildPhotoEvidence(
    originalFile: File,
    typeId: number,
    selectedAt: Date,
    origin: 'CAMARA' | 'GALERIA',
    providedExif: any = null
  ): Promise<foto> {
    const [dataUrl, hashSha256, parsedExif, decodedDimensions] = await Promise.all([
      this.readFileAsDataUrl(originalFile),
      this.calculateSha256(originalFile),
      this.readExifMetadata(originalFile),
      this.readImageDimensions(originalFile)
    ]);
    const rawExif = { ...(parsedExif || {}), ...(providedExif || {}) };
    const captureDate = this.resolveCaptureDate(rawExif);
    const extension = `.${this.getFileExtension(originalFile.name, 'FOTO')}`;
    const mimeType = originalFile.type || this.mimeTypeFromExtension(extension);
    const width = this.firstPositiveFiniteNumber(
      rawExif.ExifImageWidth,
      rawExif.PixelXDimension,
      rawExif.ImageWidth,
      decodedDimensions.width
    );
    const height = this.firstPositiveFiniteNumber(
      rawExif.ExifImageHeight,
      rawExif.PixelYDimension,
      rawExif.ImageHeight,
      rawExif.ImageLength,
      decodedDimensions.height
    );
    const normalizedMetadata = {
      NombreOriginal: origin === 'GALERIA' ? originalFile.name : null,
      HashSha256Cliente: hashSha256,
      Extension: extension,
      TamanoBytes: originalFile.size,
      AnchoPixels: width,
      AltoPixels: height,
      OrientacionExif: this.firstFiniteNumber(rawExif.Orientation),
      TieneExif: this.hasExifMetadata(rawExif),
      FechaCapturaOriginal: captureDate.value,
      OffsetCapturaOriginal: this.firstTextValue(
        rawExif.OffsetTimeOriginal,
        rawExif.OffsetTimeDigitized,
        rawExif.OffsetTime
      ),
      FuenteFechaCaptura: captureDate.source,
      FechaUltimaModificacion: originalFile.lastModified
        ? new Date(originalFile.lastModified).toISOString()
        : null,
      FechaSeleccionDispositivo: this.toIsoWithOffset(selectedAt),
      FabricanteDispositivo: this.firstTextValue(rawExif.Make),
      ModeloDispositivo: this.firstTextValue(rawExif.Model),
      SoftwareEdicion: this.firstTextValue(rawExif.Software),
      Latitud: this.resolveGpsCoordinate(rawExif, 'latitude'),
      Longitud: this.resolveGpsCoordinate(rawExif, 'longitude'),
      AltitudExifMetros: this.firstFiniteNumber(rawExif.GPSAltitude),
      PrecisionGpsExif: this.firstFiniteNumber(rawExif.GPSHPositioningError),
      OrigenId: origin === 'CAMARA' ? 1 : 2,
      TipoFoto: mimeType,
      AlgoritmoHash: 'SHA-256'
    };
    const metadataJson = this.serializeMetadata({
      archivo: {
        nombreOriginal: normalizedMetadata.NombreOriginal,
        nombreEnvio: originalFile.name,
        mimeType,
        extension,
        tamanoBytes: originalFile.size,
        ultimaModificacion: normalizedMetadata.FechaUltimaModificacion,
        seleccionDispositivo: normalizedMetadata.FechaSeleccionDispositivo,
        origen: origin
      },
      normalizada: normalizedMetadata,
      exif: rawExif
    });

    return {
      IdTipo: typeId,
      Tipo: this.archivoTipo,
      Foto: dataUrl,
      Fecha: selectedAt.toISOString(),
      Nombre: originalFile.name,
      Descripcion: 'Imagen para evidencia. Aquí puedes agregar una descripción.',
      Size: originalFile.size,
      SizeMb: (originalFile.size / (1024 * 1024)).toFixed(2),
      ...normalizedMetadata,
      MetadataJson: metadataJson
    };
  }

  private readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error);
      reader.onload = () => resolve(String(reader.result || ''));
      reader.readAsDataURL(file);
    });
  }

  private async calculateSha256(file: File): Promise<string | null> {
    try {
      const digest = await crypto.subtle.digest('SHA-256', await file.arrayBuffer());
      return Array.from(new Uint8Array(digest))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
    } catch (error) {
      console.error('No se pudo calcular el hash SHA-256 de la fotografia', error);
      return null;
    }
  }

  private async readExifMetadata(file: File): Promise<any> {
    try {
      return await exifr.parse(file, {
        tiff: true,
        exif: true,
        gps: true,
        xmp: true,
        iptc: true,
        jfif: true,
        ihdr: true,
        sanitize: true,
        mergeOutput: true
      }) || {};
    } catch (error) {
      console.log('La fotografia no contiene EXIF legible', error);
      return {};
    }
  }

  private async readImageDimensions(file: File): Promise<{ width: number | null; height: number | null }> {
    try {
      const bitmap = await createImageBitmap(file);
      const dimensions = { width: bitmap.width, height: bitmap.height };
      bitmap.close();
      return dimensions;
    } catch {
      return { width: null, height: null };
    }
  }

  private resolveCaptureDate(exif: any): { value: string | null; source: string } {
    const candidates = [
      { value: exif.DateTimeOriginal, source: 'EXIF' },
      { value: exif.CreateDate || exif.DateTimeDigitized, source: 'EXIF_DIGITIZED' },
      { value: exif.ModifyDate || exif.DateTime, source: 'EXIF_DATETIME' }
    ];
    const match = candidates.find(candidate => candidate.value !== undefined && candidate.value !== null);

    return match
      ? { value: this.toLocalDateTime(match.value), source: match.source }
      : { value: null, source: 'NO_DISPONIBLE' };
  }

  private toLocalDateTime(value: any): string | null {
    if (typeof value === 'string') {
      const exifDate = value.trim().match(/^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/);
      if (exifDate) {
        return `${exifDate[1]}-${exifDate[2]}-${exifDate[3]}T${exifDate[4]}:${exifDate[5]}:${exifDate[6]}`;
      }
    }

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      return typeof value === 'string' ? value : null;
    }

    return [
      `${date.getFullYear()}-${this.padFileNamePart(date.getMonth() + 1)}-${this.padFileNamePart(date.getDate())}`,
      `${this.padFileNamePart(date.getHours())}:${this.padFileNamePart(date.getMinutes())}:${this.padFileNamePart(date.getSeconds())}`
    ].join('T');
  }

  private toIsoWithOffset(date: Date): string {
    const offsetMinutes = -date.getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const absoluteOffset = Math.abs(offsetMinutes);
    const offset = `${sign}${this.padFileNamePart(Math.floor(absoluteOffset / 60))}:${this.padFileNamePart(absoluteOffset % 60)}`;

    return `${this.toLocalDateTime(date)}.${this.padFileNamePart(date.getMilliseconds(), 3)}${offset}`;
  }

  private padFileNamePart(value: number, length: number = 2): string {
    return String(value).padStart(length, '0');
  }

  private getFileExtension(originalName: string, type: 'FOTO' | 'VIDEO' | 'PDF'): string {
    const extension = originalName.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (extension && extension !== originalName.toLowerCase()) {
      return extension;
    }

    return type === 'FOTO' ? 'jpg' : type === 'VIDEO' ? 'mp4' : 'pdf';
  }

  private firstFiniteNumber(...values: any[]): number | null {
    for (const value of values) {
      const parsedValue = this.parseExifNumber(value);
      if (parsedValue !== null) {
        return parsedValue;
      }
    }

    return null;
  }

  private firstPositiveFiniteNumber(...values: any[]): number | null {
    for (const value of values) {
      const parsedValue = this.parseExifNumber(value);
      if (parsedValue !== null && parsedValue > 0) {
        return parsedValue;
      }
    }

    return null;
  }

  private parseExifNumber(value: any): number | null {
    if (value === null || value === undefined || value === '') return null;
    if (typeof value === 'number') return Number.isFinite(value) ? value : null;

    const text = String(value).trim();
    if (/^-?\d+(\.\d+)?$/.test(text)) return Number(text);

    const rational = text.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (rational && Number(rational[2]) !== 0) {
      return Number(rational[1]) / Number(rational[2]);
    }

    return null;
  }

  private resolveGpsCoordinate(exif: any, axis: 'latitude' | 'longitude'): number | null {
    const gps = exif.GPS || exif.gps || {};
    const isLatitude = axis === 'latitude';
    const directValue = this.firstFiniteNumber(
      exif[axis],
      exif[isLatitude ? 'Latitude' : 'Longitude'],
      gps[isLatitude ? 'Latitude' : 'Longitude']
    );
    if (directValue !== null) return directValue;

    const dmsValue = exif[isLatitude ? 'GPSLatitude' : 'GPSLongitude'] ??
      gps[isLatitude ? 'GPSLatitude' : 'GPSLongitude'];
    const reference = String(
      exif[isLatitude ? 'GPSLatitudeRef' : 'GPSLongitudeRef'] ??
      gps[isLatitude ? 'LatitudeRef' : 'LongitudeRef'] ??
      gps[isLatitude ? 'GPSLatitudeRef' : 'GPSLongitudeRef'] ?? ''
    ).toUpperCase();
    const decimal = this.dmsToDecimal(dmsValue);
    if (decimal === null) return null;

    return reference === 'S' || reference === 'W' ? -Math.abs(decimal) : decimal;
  }

  private dmsToDecimal(value: any): number | null {
    const parts = Array.isArray(value)
      ? value
      : typeof value === 'string'
        ? value.split(',').map(part => part.trim())
        : [];
    if (parts.length < 3) return null;

    const degrees = this.parseExifNumber(parts[0]);
    const minutes = this.parseExifNumber(parts[1]);
    const seconds = this.parseExifNumber(parts[2]);
    if (degrees === null || minutes === null || seconds === null) return null;

    return degrees + (minutes / 60) + (seconds / 3600);
  }

  private firstTextValue(...values: any[]): string | null {
    const value = values.find(item => item !== null && item !== undefined && String(item).trim() !== '');
    return value === undefined ? null : String(value).trim();
  }

  private hasExifMetadata(exif: any): boolean {
    if (!exif || typeof exif !== 'object') return false;

    const exifKeys = [
      'DateTimeOriginal', 'DateTimeDigitized', 'CreateDate', 'DateTime', 'ModifyDate',
      'OffsetTimeOriginal', 'OffsetTimeDigitized', 'OffsetTime',
      'Make', 'Model', 'Software', 'Orientation',
      'ExifImageWidth', 'ExifImageHeight', 'PixelXDimension', 'PixelYDimension',
      'GPSLatitude', 'GPSLongitude', 'GPSAltitude', 'GPSHPositioningError',
      'latitude', 'longitude', 'Latitude', 'Longitude'
    ];
    const hasDirectExifValue = exifKeys.some(key =>
      exif[key] !== null && exif[key] !== undefined && exif[key] !== ''
    );
    const gps = exif.GPS || exif.gps;
    const hasGpsValue = gps && typeof gps === 'object' &&
      Object.values(gps).some(value => value !== null && value !== undefined && value !== '');

    return hasDirectExifValue || !!hasGpsValue;
  }

  private mimeTypeFromExtension(extension: string): string {
    const normalized = extension.toLowerCase();
    if (normalized === '.png') return 'image/png';
    if (normalized === '.heic' || normalized === '.heif') return 'image/heic';
    if (normalized === '.webp') return 'image/webp';
    return 'image/jpeg';
  }

  private serializeMetadata(metadata: any): string | null {
    try {
      return JSON.stringify(metadata, (_key, value) => {
        if (value instanceof Uint8Array) {
          return Array.from(value);
        }
        return value;
      });
    } catch (error) {
      console.error('No se pudo serializar MetadataJson', error);
      return null;
    }
  }

  private fileFromBase64(base64: string, name: string, mimeType: string, lastModified: number): File {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index++) {
      bytes[index] = binary.charCodeAt(index);
    }

    return new File([bytes], name, { type: mimeType, lastModified });
  }

  async abrirCamara() {
    this.isVideo = false;
    this.fotos = [];
    this.sizes = [];
    this.cantidad = 0;
    this.archivoTipo = archivosTipo[0].tipo;
    this.archivoTipoId = 0;

    try {
      const img = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.Base64
      });

      if (!img.base64String) {
        return;
      }

      const selectedAt = new Date();
      const extension = String(img.format || 'jpeg').toLowerCase();
      const mimeType = this.mimeTypeFromExtension(`.${extension}`);
      const originalFile = this.fileFromBase64(
        img.base64String,
        'Ficohsa_' + selectedAt.getTime() + '.' + extension,
        mimeType,
        selectedAt.getTime()
      );
      const photoItem = await this.buildPhotoEvidence(
        originalFile,
        1,
        selectedAt,
        'CAMARA',
        img.exif
      );

      this.fotos.push(photoItem);
      this.sizes.push(Number(photoItem.TamanoBytes || 0));
      this.cantidad = this.fotos.length;
      $('#loadingHeader').fadeIn();
      $('#title-list').fadeIn();
      
      localStorage.setItem('fotos', JSON.stringify(this.fotos));
    } catch (error) {
      this.toaster.presentToastNoButtons('No se pudo abrir la cámara.', 'top', 'fotos');
    }
  }

  handleSave(tipo:any, idAtencion:any){
    this.isLoading = true;
    if (tipo == 0) {
      this.savePhotos(idAtencion);
    }else{
      this.uploadVideos();
    }
  }

  savePhotos(idAtencion: any) {
    this.isLoading = true;
    const atencionId = idAtencion || this.idAtencion || localStorage.getItem('idAtencion');

    if (!atencionId) {
      this.isLoading = false;
      this.toaster.presentToastNoButtons('No se encontró el número de atención.', 'top', 'fotos');
      return;
    }

    if (!this.fotos.length) {
      this.isLoading = false;
      this.toaster.presentToastNoButtons('Necesitas cargar una imagen o más para guardarlas.', 'top', 'fotos');
      return;
    }

    console.log('Mis fotos son '); console.dir(this.fotos);

    this.fotoData = this.fotos.map((element) => ({
      Foto: this.extractPhotoBase64(element.Foto),
      IdAtencion: parseInt(atencionId, 10),
      RefTipoFotoId: element.IdTipo,
      NombreFirmante: element.NombreFirmante,
      Descripcion: element.Descripcion,
      FechaFirma: element.Fecha,
      NombreOriginal: element.NombreOriginal ?? null,
      HashSha256Cliente: element.HashSha256Cliente ?? null,
      Extension: element.Extension ?? null,
      TamanoBytes: element.TamanoBytes ?? null,
      AnchoPixels: element.AnchoPixels ?? null,
      AltoPixels: element.AltoPixels ?? null,
      OrientacionExif: element.OrientacionExif ?? null,
      TieneExif: element.TieneExif ?? null,
      FechaCapturaOriginal: element.FechaCapturaOriginal ?? null,
      OffsetCapturaOriginal: element.OffsetCapturaOriginal ?? null,
      FuenteFechaCaptura: element.FuenteFechaCaptura ?? 'NO_DISPONIBLE',
      FechaUltimaModificacion: element.FechaUltimaModificacion ?? null,
      FechaSeleccionDispositivo: element.FechaSeleccionDispositivo ?? null,
      FabricanteDispositivo: element.FabricanteDispositivo ?? null,
      ModeloDispositivo: element.ModeloDispositivo ?? null,
      SoftwareEdicion: element.SoftwareEdicion ?? null,
      Latitud: element.Latitud ?? null,
      Longitud: element.Longitud ?? null,
      AltitudExifMetros: element.AltitudExifMetros ?? null,
      PrecisionGpsExif: element.PrecisionGpsExif ?? null,
      OrigenId: element.OrigenId ?? null,
      TipoFoto: element.TipoFoto ?? null,
      AlgoritmoHash: element.AlgoritmoHash ?? 'SHA-256',
      MetadataJson: element.MetadataJson ?? null
    }));

    this.api.GuardarFotos(this.fotoData).pipe(
      finalize(() => {
        this.isLoading = false;
        this.isLoadingItem = false;
      })
    ).subscribe(
      () => {
        this.toaster.presentToastNoButtons('Fotos subidas con éxito!', 'top', 'fotos');
      },
      async (error) => {
        console.error('[cargar-archivos] Photo upload failed', error);
        await this.presentUploadErrorAlert(error);
      }
    );
  }

  private extractPhotoBase64(foto?: string): string | undefined {
    if (!foto) {
      return undefined;
    }

    return foto.includes(',') ? foto.split(',')[1] : foto;
  }

  async confirmDeleteFoto(index: number, event?: Event){
    event?.preventDefault();
    event?.stopPropagation();

    if (!this.fotos[index]) {
      return;
    }

    const alert = await this.alert.create({
      cssClass: 'delete-menu-alert',
      header: 'Conservar/Eliminar imagen',
      message: 'Esta imagen se quitará de la lista seleccionada. ¿Deseas eliminarla?',
      
      buttons: [{
        text: 'Limpiar Caché',
        cssClass: 'logout-menu-button logout-menu-cache'
      },
      {
        text: 'Conservar',
        role: 'cancel',
        cssClass: 'logout-menu-button logout-menu-cancel'
      } ,
      {
        text: 'Eliminar',
        role: 'confirm',
        cssClass: 'logout-menu-button logout-menu-danger',
        handler: () => { this.deleteFoto(index) }
      }
      ]
    });

    await alert.present();
  }

  deleteFoto(index: number){
    if (!this.fotos[index]) {
      return;
    }

    this.fotos.splice(index, 1);
    this.sizes.splice(index, 1);
    this.refreshSelectedFilesState();
  }

  refreshSelectedFilesState(){
    this.cantidad = this.fotos.length + this.videos.length + this.pdfs.length;
    this.gratestSize = this.sizes.length ? Math.max(...this.sizes.map((size:any) => Number(size))) : undefined;

    if (this.fotos.length == 0) {
      const fileInput = document.getElementById("fileInput") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }

    /*
    if (this.cantidad == 0) {
      $('#title-list').fadeOut();
      $('#loadingHeader').fadeOut();
      $('#botonGuardarFotos').prop('disabled', true);
    }
    */
  }

  async openFilesInput(type: any){
    

    this.cantidad = 0;
    this.tipo = type;
    let lasProgres = document.getElementsByTagName('progress');
    const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
    if (fileInputs) {
      for (let index = 0; index < fileInputs.length; index++) {
        const element = fileInputs[index];
        $('progress').eq(index).remove();
      }
    }

    this.archivoTipo = archivosTipo[type].tipo;
    this.archivoTipoId = type;

    if (type == 0) {
      this.isVideo = false;
      this.fotos = [];
      this.sizes = [];
      $("#fileInput").click();
      $("#fileInput").off("change").on("change", async evt => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
        this.cantidad = fileInputs?.length;
        this.losArchivos = fileInputs;
        void 0;
        void 0;
        try {
          if (this.cantidad && this.cantidad > 0 && fileInputs) {
            const selectedAt = new Date();
            const photoItems = await Promise.all(Array.from(fileInputs).map((file) =>
              this.buildPhotoEvidence(file, type, selectedAt, 'GALERIA')
            ));

            this.fotos.push(...photoItems);
            this.sizes.push(...photoItems.map(item => Number(item.TamanoBytes || 0)));
            $('#loadingHeader').fadeIn();
            $('#title-list').fadeIn();
            localStorage.setItem('fotos', JSON.stringify(this.fotos));
            this.gratestSize = this.findLargestSize(this.sizes);
          } else {
            $("#imagenesConteo").fadeOut('slow');
            $("#buttonSubmit").fadeOut('slow');
          }
        } catch (error) {
          console.error('No se pudieron preparar las fotografias seleccionadas', error);
          this.toaster.presentToastNoButtons('No fue posible leer una de las fotografias seleccionadas.', 'top', 'fotos');
        }
        
        
        setTimeout(() => {
          
        }, 900);
        
      });
    }

    if (type == 1) {
      this.isVideo = true;
      this.fotos = [];
      this.videos = [];
      $("#fileInputV").click();
      $("#fileInputV").on("change", evt => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        const fileInputVs = (document.getElementById("fileInputV") as HTMLInputElement).files;
        this.cantidad = fileInputVs?.length;
        this.losArchivos = fileInputVs;
        void 0;
        void 0;
        setTimeout(() => {
          if (fileInputVs && fileInputVs.length > 0) {
            
            for (let index = 0; index < fileInputVs.length; index++) {
              const file = fileInputVs[index];
              this.videoFile = file;
              let sizeInMB = (file.size / (1024*1024)).toFixed(2); 

              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = e => {
                if (e.target?.result) {
                  const elVideo = e.target.result;
                  
                  this.vid.IdTipo = type;
                  this.vid.Tipo = this.archivoTipo;
                  this.vid.Video = elVideo.toString();
                  this.vid.Fecha = new Date().toISOString();
                  this.vid.Descripcion = file.name;
                  this.vid.Size = file.size;
                  this.vid.SizeMb = sizeInMB;
                  this.vid.SerieId = 0;
                  this.videos.push(this.vid);
                  this.sizesVids.push(file.size);
                  this.vid={};
                }
              };

              if (index == (fileInputVs.length-1)) {
                $('#loadingHeader').fadeIn();
                $('#title-list').fadeIn();
                
                void 0;
                void 0;

                this.gratestSize = this.findLargestSize(this.sizesVids);
              }
              
            }
            
          }else{}
        }, this.randomIntFromInterval(1, 5));
        
        setTimeout(() => {
          
        }, 900);
        
      });
    }

    if (type == 2) {
      this.isVideo = false;
      this.pdfs = [];
      $("#fileInputP").click();
      $("#fileInputP").on("change", evt => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        const fileInputsP = (document.getElementById("fileInputP") as HTMLInputElement).files;
        this.cantidad = fileInputsP?.length;
        this.losArchivos = fileInputsP;
        void 0;
        void 0;

        setTimeout(() => {
          if (this.cantidad && this.cantidad > 0) {
            for (let index = 0; index < this.cantidad; index++) {
              if(fileInputsP){
                const file = fileInputsP[index];
                let sizeInMB = (file.size / (1024*1024)).toFixed(2); 
                var reader = new FileReader();
                reader.readAsDataURL(file);
      
                reader.onload = e => {
                  if (e.target) {
                    const b64 = e.target.result;
                    this.daImagen = b64?.toString().split(',')[1]; 
                    this.pdf.IdTipo=type;
                    this.pdf.Tipo=this.archivoTipo;
                    this.pdf.Pdf= pdfIconUrl;
                    this.pdf.Fecha = new Date().toISOString();
                    this.pdf.Descripcion = file.name;
                    this.pdf.Size = file.size;
                    this.pdf.SizeMb = sizeInMB;
                    this.pdfs.push(this.pdf);
                    this.sizesPdfs.push(file.size);
                    this.pdf={};   
                  }
                  
                  if (index == (fileInputsP.length-1)) {
                    $('#loadingHeader').fadeIn();
                    $('#title-list').fadeIn();
                    
                    this.gratestSize = this.findLargestSize(this.sizesPdfs);
                  }
                }; 
              }
            }
            
          }else{
            $("#imagenesConteo").fadeOut('slow');
            $("#buttonSubmit").fadeOut('slow');
          }
        }, this.randomIntFromInterval(1, 5));

        
        
        setTimeout(() => {
          this.router.navigateByUrl("comments");
        }, 900);
        
      });
    }

    
  }

  seleccionarTipoDeFoto(){
    alert(this.fotoIdTipo)
  }

  guardarArchivos(){
    
    

    setTimeout(() => {
      
      
      
      this.goBack();
    }, 900);
    

    if (this.fotos.length > 0) {
      
      
      

      for (let index = 0; index < this.fotos.length; index++) {
        
      }
      
      
      
      

      
    }else{
      this.toaster.presentToastNoButtons("Necesitas cargar una imagen o más para guardarlas.", "top", "fotos");
    }
    
  }
  
}

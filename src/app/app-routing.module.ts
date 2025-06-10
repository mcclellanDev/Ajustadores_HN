import { AuthGuard } from './guards/auth.guard';
import { NgModule, ViewChild } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Router, NavigationEnd, RouterOutlet, ActivationStart } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },	
  {
    path: '',
    loadChildren: ()=> import('./tabs/tabs.module').then(m => m.TabsPageModule),
   // canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./sesion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./sesion/recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./sesion/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'expediente',
    loadChildren: () => import('./expediente/expediente.module').then( m => m.ExpedientePageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'declaracion',
    loadChildren: () => import('./declaracion/declaracion.module').then( m => m.DeclaracionPageModule)
  },
  {
    path: 'tercero',
    loadChildren: () => import('./tercero/tercero.module').then( m => m.TerceroPageModule)
  },
  {
    path: 'fotografias',
    loadChildren: () => import('./fotografias/fotografias.module').then( m => m.FotografiasPageModule)
  },
  {
    path: 'propiedad',
    loadChildren: () => import('./propiedad/propiedad.module').then( m => m.PropiedadPageModule)
  },
  {
    path: 'clientehn',
    loadChildren: () => import('./clientehn/clientehn.module').then( m => m.ClientehnPageModule)
  },
  {
    path: 'ajustadorhn',
    loadChildren: () => import('./ajustadorhn/ajustadorhn.module').then( m => m.AjustadorhnPageModule)
  },
  {
    path: 'fotoshn',
    loadChildren: () => import('./fotoshn/fotoshn.module').then( m => m.FotoshnPageModule)
  },
  {
    path: 'tallerhn',
    loadChildren: () => import('./tallerhn/tallerhn.module').then( m => m.TallerhnPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'adeuda',
    loadChildren: () => import('./adeuda/adeuda.module').then( m => m.AdeudaPageModule)
  },
  {
    path: 'culpable',
    loadChildren: () => import('./culpable/culpable.module').then( m => m.CulpablePageModule)
  },
  {
    path: 'esignature',
    loadChildren: () => import('./esignature/esignature.module').then( m => m.EsignaturePageModule)
  },
  {
    path: 'printer',
    loadChildren: () => import('./printer/printer.module').then( m => m.PrinterPageModule)
  },
  {
    path: 'foto-reporte',
    loadChildren: () => import('./foto-reporte/foto-reporte.module').then( m => m.FotoReportePageModule)
  },
  {
    path: 'finiquito',
    loadChildren: () => import('./finiquito/finiquito.module').then( m => m.FiniquitoPageModule)
  },
  {
    path: 'beneficiario',
    loadChildren: () => import('./beneficiario/beneficiario.module').then( m => m.BeneficiarioPageModule)
  },
  {
    path: 'segmento-solicitante',
    loadChildren: () => import('./segmento-solicitante/segmento-solicitante.module').then( m => m.SegmentoSolicitantePageModule)
  },
  {
    path: 'segmento-vehiculo',
    loadChildren: () => import('./segmento-vehiculo/segmento-vehiculo.module').then( m => m.SegmentoVehiculoPageModule)
  },
  {
    path: 'segmento-caracteristicas',
    loadChildren: () => import('./segmento-caracteristicas/segmento-caracteristicas.module').then( m => m.SegmentoCaracteristicasPageModule)
  },
  {
    path: 'segmento-danio',
    loadChildren: () => import('./segmento-danio/segmento-danio.module').then( m => m.SegmentoDanioPageModule)
  },
  {
    path: 'segmento-fasegurado',
    loadChildren: () => import('./segmento-fasegurado/segmento-fasegurado.module').then( m => m.SegmentoFaseguradoPageModule)
  },
  {
    path: 'segmento-fajustador',
    loadChildren: () => import('./segmento-fajustador/segmento-fajustador.module').then( m => m.SegmentoFajustadorPageModule)
  },
  {
    path: 'segmento-segment-request-aju',
    loadChildren: () => import('./segmento-segment-request-aju/segmento-segment-request-aju.module').then( m => m.SegmentoSegmentRequestAjuPageModule)
  },
  {
    path: 'segmento-casegurado',
    loadChildren: () => import('./segmento-casegurado/segmento-casegurado.module').then( m => m.SegmentoCaseguradoPageModule)
  },
  {
    path: 'segmento-cvehiculo',
    loadChildren: () => import('./segmento-cvehiculo/segmento-cvehiculo.module').then( m => m.SegmentoCvehiculoPageModule)
  },
  {
    path: 'segmento-cconductor',
    loadChildren: () => import('./segmento-cconductor/segmento-cconductor.module').then( m => m.SegmentoCconductorPageModule)
  },
  {
    path: 'segmento-cinformacion',
    loadChildren: () => import('./segmento-cinformacion/segmento-cinformacion.module').then( m => m.SegmentoCinformacionPageModule)
  },
  {
    path: 'vital-core',
    loadChildren: () => import('./vital-core/vital-core.module').then( m => m.VitalCorePageModule)
  },
  {
    path: 'formularios',
    loadChildren: () => import('./formularios/formularios.module').then( m => m.FormulariosPageModule)
  },
  {
    path: 'end-process',
    loadChildren: () => import('./end-process/end-process.module').then( m => m.EndProcessPageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./materiales/materiales.module').then( m => m.MaterialesPageModule)
  },
  {
    path: 'prepare-send',
    loadChildren: () => import('./prepare-send/prepare-send.module').then( m => m.PrepareSendPageModule)
  },  {
    path: 'prepare-audience',
    loadChildren: () => import('./prepare-audience/prepare-audience.module').then( m => m.PrepareAudiencePageModule)
  },



  

/*  {
    path: 'logout',
    loadChildren: () => import('./sesion/logout/logout.module').then( m => m.LogoutPageModule)
  }
  */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tabs")
        this.outlet.deactivate();
    });
  }
}

export interface Formulario {
    RefAtencionId?:                  number;
    RefProveedorAgenteId?:           number;
    AgendarAudiencia?:               number;
    AseguradoUsoPoliza?:             number;
    TerceroResponsable?:             number;
    LesionadosSinAudiencia?:         number;
    DescripcionAudiencia?:           string;
    RefEntidadComunicativaId?:       number;
    RefTipoAudienciaId?:             number;
    Poliza?:                         string;
    Identificacion?:                 string;
    Nombre?:                         string;
    Correo?:                         string;
    ConductorAfiliado?:              number;
    ConductorDetenido?:              number;
    Descripcion?:                    string;
    MarcaVehiculo?:                  string;
    ModeloVehiculo?:                 string;
    AnioVehiculo?:                   number;
    PlacaVehiculo?:                  string;
    ChasisVehiculo?:                 string;
    ColorVehiculo?:                  string;
    VehiculoDetenido?:               number;
    DescripcionVehiculo?:            string;
    TercerosHeridos?:                number;
    TercerosMuertos?:                number;
    DescripcionTercerosHeridos?:     string;
    DescripcionTercerosMuertos?:     string;
    DanioFrontal?:                   number | 0;
    DanioTrasero?:                   number | 0;
    DanioLateralDerecho?:            number | 0;
    DanioLataralIzquierdo?:          number | 0;
    VehiculoVolcado?:                number | 0;
    DescripcionDanio?:               string;
    RefPaisId?:                      number;
    RefCiudadId?:                    number;
    RefDeptoId?:                     number;
    RefMunicipioId?:                 number;
    FechaHora?:                      Date;
    Lugar?:                          string;
    RefUsuarioId?:                   number;
    TallerMecanicoId?:               number;
    Blindado?:                       string | "NO";
    ObservacionTaller?:              string;
    ReclamoAsegurado?:               string;
    Observaciones?:                  string;
    Latitud?:                        string;
    Longitud?:                       string;
    NombreConductor?:                string;
    IdentidaConductor?:              string;
    DPI_Pasaporte?:                  string;
    TelefonoConductor?:              string;
    CelularConductor?:               string;
    Edad?:                           number;
    Licencia?:                       string;
    TipoLicencia?:                   string;
    Vigencia?:                       string;
    DireccionConductor?:             string;
    Sexo?:                           number;
    RefTipoConductorId?:             number;
    JSON_PropiedadDaniadaSiniestro?: string;
    JSON_TercerosSiniestro?:         string;
}
export interface PropiedadDaniadaSiniestro {
    Nombre: string,
    TipoPropiedad: string,
    DpiPasaporte?: string,
    Telefono?: string

}

export interface TercerosSiniestro {
    Nombre: string,
    DpiPasaporte?: string,
    Telefono?: string
}

export interface ImgFormularion{
    IdAtencion?: number;
    Foto?: string;
    RefTipoFotoId?: number;
}
export interface TipoSiniestros{
    CODIGO:string,
    DESCRIPCION:string
}
export interface datosTercero{
    NombreApellido:string | "",
    NIT: string |"",
    DpiPasaporte: string |"",
    Telefono:string|"",
    NLiciencia:string|"",
    Tipo:string|"",
    Vigencia: string|"",
    Sexo:string|"",
    Edad:string|"",
    Celular:string|""
}
//Cliente Hn
export interface personaHn{
    Nombre?:string;
    Direccion?:string;
    Telefono?:string;
    TipoLesion?:string|null;
    DireccionHospitalizacion?:string|null;
    TipoPersona?:number|null;
}
export interface propiedaPrivadaHn{
    BienAfectado?:string;//daniosprivado
    NombrePropietario?: string;
    Telefono?: string;
    DireeccionPropietario?: string;
    DescripcioDelBien?: string;
    DireccionDelBien?:string;
    DescripcionDelDanio?:string;
}
export interface culpable{
    NombreCulpable?: string;
    DireccionCulpable?: string;
    TelefonoFijoCulpable?: string;
    CelularCulpable?: string;
    EdadCulpable?: number;
    LicenciaTipoCulpable?: number; //puede ser number si creamos una lista
    NumeroLicenciaCulpable?: string;
    FechaVencimientoLicenciaCulpable?: Date;
    MarcaCulpable?: string;
    ModeloCulpable?: string;
    AnioCulpable?: number;
    MotorNoCulpable?: string;
    Chasis?: string;
    NoPlacaCulpable?: string;
    NombreDireccionPropietarioCulpable?: string;
    CompromisoPago?: string|"2";// es un si o no
    ObservacionesCulpable?: string;
}
export interface clienteHn{
    //id aun no se que
    Latitud?:string;
    Longitud?:string;
    Poliza?: string;
    NombreAsegurado?: string;
    IdentidadAsegurado?:string;//Este dato se muestra al final pero tiene mas coerencia aqui
    DireccionEnvioCorrespondencia?: string;
    TelefonFijo?: string;
    Celular?: string;
    CorreoElectronico?: string;
    DireccionSiniestro?: string;
    FechaHoraAccidente?: Date; //Mezclar Fecha y hora del accidente en un solo campo no en dos como el formulario
    UtilizoSerivicioAsistencia?: string|"2"; //Es un si o no utilizo poliza si o no
    PorqueNoUsoServicioAsistencia?: string; //este solo se llena si la opcion anterior es no
    Marca?:string; //Vehiculo Asegurado
    Modelo?: string //Vehiculo Asegurado
    Anio?: number // vehiculo asegurdado
    MotorNo?: string;// vehiculo asegurodo
    ChasisNo?: string;// vehiculo asegurado
    Placa?: string; //vehiculo asegurado
    NoUnidad?: string; //Vehiculo asegurado
    NombreConductor?: string;
    ConducidoPor?: number; //relacion o parentesco que tenia el asegurado podria ser number
    IdentidadConductor?: string;
    FechaNacimientoConductor?: Date;
    TipoLicencia?: number; // crear dropdow
    LicenciaNo?: string;
    FechaVencimientoLicencia?: Date;
    DireccionConductor?: string;
    TelefonoFijoConductor?: string;
    CelularConductor?: string;
    NombreAtribuyeAccidente?: string;
    AutoridadInvolucrada?: string; // puede ser number 
    UbicacionVehiculoAsegurado?:string;
    UbicacionVehiculoDetenido?: string; //Solo en caso que este detenido
    DescripcionAccidente?: string;// incidente/ dinamica en sophia
    DescripcionDanioVehiculo?: string;
    Acompaniantes?: personaHn[];// si existen id tipo 1
    Testigos?: personaHn[];// si existen 2
    PruebaAlcoholemia?: number; //0-1
    Culpable?:culpable[];
    
    danioPropiedaPrivada?: propiedaPrivadaHn[];// si existen
    Lesionados?: personaHn[];// 3 si existen solo si existe una direccion de hospitalizacion
    FirmaAsegurado?: string; //sera el base64  // enviar como foto en base a un tipo
    //FechaRegistroFormulario?:Date este dato lo debe generar sql al momento del registro en la base
}
//Ajustador Hn
export interface foto {
    NombreFirmante?: any;
    IdAtencion?: number;
    Foto?: string;
    IdTipo?: number;
    Tipo?:string;
    Descripcion?: string;
    Fecha?: any;
    Source?:number;
}
export interface ajustadorHn{
    IdFormulario?: number;
    TipoSolicitante?: number; // Seria el id que definamos para tipo solicitnate // asegurado o tercero
    Nombre?: string;
    NoIdentidad?:string; //esta al final pero tiene mas sentido aqui
    CorrreoElectronico?: string;
    Telefono?:string;
    FechaSiniestro?: Date;
    FechaInspeccion?: Date;
    PolizaNo?: string;
    Marca?:string;
    Modelo?:string;
    Anio?: string;
    Kilometraje?:number;
    Placa?: string;
    SerieVIN?: string;
    NoMotor?: string; //Number maybe
    TipoCombustible?: number; // gasolina o disel lista que me retorna la db
    AC?: number;
    Rines?:string // Lujo combencional
    BolsasAire?: number;
    CierreCentralizado?: number;
    Transmicion?: number; //Mecanica Automatica
    Retrovisor?:number;
    Overfenders?: number;
    ColaPato?: number;
    CintaDecorativa?: number;
    LicenciaVencidad?: number|0;
    Observaciones?: string;
    DanioDescripcion?: string;
    FirmaSolicitante?: string;
    FirmaAjustador?: string;
    //Fecha?:Date auto generada al momento de registro
    Fotos?:foto[];
}

export interface tipofotos{
    Id?:number;
    TipoFotografia?:string;
    Descripcion?:string;
}
export interface tipoSolicitante{
    Id?:number;
    TipoSolicitante?:string;
}
export interface tipoCombustible{
    Id?:number;
    TipoCombustible?:string;
}
export interface tipoConductor{
    Id?:number;
    TipoConductor?:string;
}
export interface tipoLicencia{
    Id?:number;
    TipoLicencia?:string;
}
export interface tipoFirma{
    Id?:number;
    TipoFirma?:string;
}

//esto es lo que espera el sql de manuel
export interface terceroSQL{
    RefIdAjustadorAudiencia?:   number;
    NombrePropietario?:         string;
    NombrePiloto?:              string;
    Marca?:                     string;
    Modelo?:                     string;
    Placa?:                     string;
    Chasis?:                    string;
    Telefono?:                  string;
    DaniosObservacion?:         string;
    // FechaRegistro?:             Date;
    RefAgenteProveedorId?:      string;


}
export interface propiedadPrivada {
    RefAjustadorAudienciaId?: number;
    Nombre?: string;
    Direccion?: string;
    DaniosPrivado?: string;
    RefAjustadorId?: number;
}
export interface vehiculoTercero{
    Marca:string|"",
    Linea:string|"",
    Tipo:string|"",
    Modelo:string|"",
    Placa:string|"",
    Color:string|"",
    Chasis:string|"",
    Motor:string|""
}
export interface danioVehiculo{
    DanioFrontal?: boolean | false,
    DanioTrasero?: boolean | false ,
    DanioLateralDerecho?: boolean | false,
    DanioLataralIzquierdo?: boolean | false,
    VehiculoVolcado?: boolean | false

}

export interface Tercero{
    terceroCulpable?: boolean |false;
    terceroDatos?: datosTercero | null;
    terceroVehiculo?: vehiculoTercero | null;
    terceroDanioVehiculo?: danioVehiculo | null;
}
export interface Siniestro {
    RefAtencionId?:                  number;
    RefProveedorAgenteId?:           number;
    AgendarAudiencia?:               number;
    AseguradoUsoPoliza?:             number;
    TerceroResponsable?:             number;
    LesionadosSinAudiencia?:         number;
    DescripcionAudiencia?:           string;
    RefEntidadComunicativaId?:       number;
    RefTipoAudienciaId?:             number;
    Poliza?:                         string;
    Identificacion?:                 string;
    Nombre?:                         string;
    ConductorAfiliado?:              number;
    ConductorDetenido?:              number;
    Descripcion?:                    string;
    MarcaVehiculo?:                  string;
    ModeloVehiculo?:                 string;
    AnioVehiculo?:                   number;
    PlacaVehiculo?:                  string;
    ChasisVehiculo?:                 string;
    ColorVehiculo?:                  string;
    VehiculoDetenido?:               number;
    DescripcionVehiculo?:            string;
    TercerosHeridos?:                number;
    TercerosMuertos?:                number;
    DescripcionTercerosHeridos?:     string;
    DescripcionTercerosMuertos?:     string;
    DanioFrontal?:                   number | 0;
    DanioTrasero?:                   number | 0;
    DanioLateralDerecho?:            number | 0;
    DanioLataralIzquierdo?:          number | 0;
    VehiculoVolcado?:                number | 0;
    DescripcionDanio?:               string;
    RefPaisId?:                      number;
    RefCiudadId?:                    number;
    RefDeptoId?:                     number;
    RefMunicipioId?:                 number;
    FechaHora?:                      Date;
    Lugar?:                          string;
    RefUsuarioId?:                   number;
    TallerMecanicoId?:               number;
    Blindado?:                       string | "NO";
    ObservacionTaller?:              string;
    ReclamoAsegurado?:               string;
    Observaciones?:                  string;
    Latitud?:                        string;
    Longitud?:                       string;
    NombreConductor?:                string;
    IdentidaConductor?:              string;
    DPI_Pasaporte?:                  string;
    TelefonoConductor?:              string;
    CelularConductor?:               string;
    Edad?:                           number;
    Licencia?:                       string;
    TipoLicencia?:                   string;
    Vigencia?:                       string;
    DireccionConductor?:             string;
    Sexo?:                           number;
    RefTipoConductorId?:             number;
    JSON_PropiedadDaniadaSiniestro?: string;
    JSON_TercerosSiniestro?:         string;
}
//8 tomada 
//9 cancelada
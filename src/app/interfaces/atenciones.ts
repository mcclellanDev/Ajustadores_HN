export interface Atenciones {
    IdAtencion: number;
    Servicio: string;
    Categoria: string;
    Proveedor: string;
    Zona: string;
    Direccion: string;
    DireccionDestino: string;
    Convenio: string;
    Ciudad: string;
    Colonia: string;
    Cliente: string;
    Poliza: string;
    Plan: string;
    UsurioRegistro: string;
    Fecha: Date;
    Estado: string;
    ColorEstado: string;
    LbEstado?: string;
    CodigoReclamoFicohsa?: string;
    CodigoBPMFicohsa?: string;
    Img: string;
    
}

export interface ResponseAtenciones{
    CodigoRespuesta:number;
    Mensaje:string;
    Data?: Atenciones[] | null;
}

export interface BuscarMisAtencionesRequest {
    IdProveedorAgente: number;
    FechaDesde?: string | null;
    FechaHasta?: string | null;
    NombreAsegurado?: string | null;
    Offset?: number;
    PageSize?: number;
}

export interface BuscarMisAtencionesResponse {
    Offset?: number;
    PageSize?: number;
    Count?: number;
    Items?: Atenciones[] | null;
}
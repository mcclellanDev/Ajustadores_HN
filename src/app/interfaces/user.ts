export interface User {
    ProveedorAgenteId?: any | null,
    IdFicohsa?: any | null,
    ProveedorName?: string,
    TipoAgente?: string,
    Correo?: string,
    ProveedorId?:number,
    Usuario?: string,
    NombreAgente?: string,
    Token?: string,
    Foto?: string,
    Lat?: number,
    Long?: number,
    Movil?: string,
    IdPaid?:number,
    Pais?:string
}
export interface ResponseUser {
    CodigoRespuesta:number;
    Mensaje:string;
    Data: User
}

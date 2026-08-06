# Instrucciones Backend - Notificaciones Push Ajustadores HN

Fecha: 2026-08-06

Este documento describe la estrategia recomendada para disparar notificaciones push desde el backend de Ajustadores HN usando OneSignal y la tabla de control `help_NotificacionesPush`.

## Contexto

Las atenciones no se crean desde la app movil de Ajustadores HN. Por esa razon, el evento de notificacion no debe depender del telefono ni de un proceso en background del frontend.

La app consulta periodicamente `ObtenerMisAtencionesActivas`, pero eso solo ocurre mientras la app esta activa o cuando vuelve de segundo plano. Para avisar al agente aunque no tenga la app abierta, el disparo debe realizarse desde el backend.

## Regla General

Cada notificacion debe pasar por una tabla de control:

`help_NotificacionesPush`

La regla de idempotencia es:

Si ya existe una fila para:

`IdAtencion + IdProveedorAgente + Evento`

entonces no se vuelve a enviar la notificacion.

Si no existe, se envia la notificacion por OneSignal y luego se registra el resultado.

## Estructura Recomendada Para help_NotificacionesPush

Campos recomendados:

```sql
Id int identity primary key,
IdProveedorAgente int not null,
IdAtencion int not null,
Evento varchar(80) not null,
Estado varchar(30) not null,
Intentos int not null default 0,
FechaCreacion datetime not null default getdate(),
FechaUltimoIntento datetime null,
FechaEnvio datetime null,
UltimoError varchar(max) null
```

Indice unico recomendado:

```sql
CREATE UNIQUE INDEX UX_help_NotificacionesPush_Atencion_Agente_Evento
ON dbo.help_NotificacionesPush (IdAtencion, IdProveedorAgente, Evento);
```

Este indice evita duplicados incluso si el frontend consulta varias veces o si dos procesos intentan enviar al mismo tiempo.

## Servicio OneSignal

El backend debe tener configurado:

```xml
<add key="OneSignalAppId" value="da94f896-3936-4550-87d3-6021e755623c" />
<add key="OneSignalRestApiKey" value="PEGAR_KEY_REAL_SOLO_EN_SERVIDOR" />
```

Importante:

- No subir la REST API Key real a GitHub.
- La REST API Key debe vivir solo en el servidor/API.
- No habilitar IP Allowlist salvo que el servidor tenga IP publica fija confirmada.

## Eventos Recomendados

### 1. nueva_atencion

Punto sugerido:

`ProveedorController.ObtenerMisAtencionesActivas`

Condiciones:

- La atencion aparece en `help_F_Api_Listar_Mis_Atenciones_Activas(IdProveedorAgente)`.
- `LogEstado` corresponde a atencion nueva/asignada.
- El agente tiene `TokenPush`.
- No existe `help_NotificacionesPush` para `IdAtencion + IdProveedorAgente + nueva_atencion`.

Mensaje sugerido:

Titulo: `Nueva atencion asignada`

Cuerpo: `Le ha sido asignada la atencion [IdAtencion] para [Servicio] a nombre de [Cliente]`.

Observacion:

Este evento ya fue probado exitosamente. La atencion 288125 fue notificada una sola vez y quedo registrada como `Sent`.

### 2. audiencia_agendada

Punto sugerido:

`ProveedorController.ActualizarAudicion`

Condiciones:

- El SP `help_P_Api_Datos_De_Agendamiento_Audiencia` responde exito.
- `AgendarAudiencia` indica que la audiencia quedo agendada.
- Se obtiene `IdAtencion` desde `help_AjustadorAudiencia`.
- Existe agente con `TokenPush`.
- No existe evento previo `audiencia_agendada` para esa atencion/agente.

Mensaje sugerido:

Titulo: `Audiencia agendada`

Cuerpo: `La audiencia de la atencion [IdAtencion] fue agendada para [Fecha] [Hora] en [Lugar]`.

### 3. audiencia_actualizada

Punto sugerido:

`ProveedorController.ActualizarAudicion`

Condiciones:

- Ya existia una audiencia para esa atencion.
- Cambia fecha, hora, lugar o abogado.
- El SP responde exito.
- No existe evento previo `audiencia_actualizada` para esa version del cambio.

Nota:

Si se necesita permitir varias actualizaciones notificables, este evento podria incluir una variante en el nombre o un campo adicional, por ejemplo `ReferenciaEvento`, con hash de fecha/hora/lugar.

### 4. reclamo_bpm_creado

Punto sugerido:

`ProveedorController.ActualizarCodigoBPMAjustador`

Condiciones:

- Se guarda exitosamente `CodigoBPMFicohsa` y/o `CodigoReclamoFicohsa`.
- `respuesta.Value == 1` o equivalente de exito.
- Se obtiene `IdAtencion` desde `help_AjustadorAudiencia`.
- No existe evento `reclamo_bpm_creado`.

Mensaje sugerido:

Titulo: `Reclamo BPM creado`

Cuerpo: `La atencion [IdAtencion] genero correctamente el BPM [CodigoBPM] y reclamo [CodigoReclamo]`.

### 5. reclamo_bpm_error

Punto sugerido:

Endpoint o bloque donde se llame a Ficohsa/BPM y se capture la respuesta fallida. En este backend revisar especialmente los flujos relacionados con:

- `FicohsaHNController.Carga_Reclamo_Sinau_BPM_Fico`
- `FicohsaHNController.Carga_Reclamo_Sinau_BPM_FicoQA`
- llamada posterior a `ActualizarCodigoBPMAjustador`, si aplica.

Condiciones:

- Ficohsa/BPM responde error.
- El error se puede asociar a `IdAtencion` o `IdTablaAjustador`.
- Existe agente asignado con `TokenPush`.
- No existe evento `reclamo_bpm_error` para esa atencion/agente.

Mensaje sugerido:

Titulo: `Error en envio de reclamo`

Cuerpo: `No fue posible procesar el reclamo de la atencion [IdAtencion]. Revisa el resultado del envio.`

### 6. clientehn_enviado

Punto sugerido:

`ProveedorController.GuardarInformeSiniestros_HN`

Condiciones:

- El SP `help_P_Api_Registrar_Siniestros_Ajustador_Cliente_HN` responde exito.
- Se guardan los datos del primer formulario de cliente/asegurado.
- No existe evento `clientehn_enviado`.

Mensaje sugerido:

Titulo: `Formulario del cliente enviado`

Cuerpo: `Los datos del cliente de la atencion [IdAtencion] fueron enviados correctamente`.

Nota:

Este puede ser mas util como evento de auditoria que como push al mismo agente.

### 7. ajustadorhn_guardado

Punto sugerido:

`ProveedorController.GuardaInformerAjustador_HN`

Condiciones:

- El SP `help_P_Api_Registrar_Datos_Ajustador_Cliente_HN` responde exito.
- No existe evento `ajustadorhn_guardado`.

Mensaje sugerido:

Titulo: `Informe de ajuste guardado`

Cuerpo: `Los datos del informe de ajuste de la atencion [IdAtencion] fueron guardados correctamente`.

Nota:

Este puede ser mas util como auditoria interna que como push.

### 8. finiquito_manual_creado

Punto sugerido:

`ProveedorController.InsertarFiniquitoManual`

Condiciones:

- `help_P_Api_InsertFiniquito_Ficohsa` responde exito.
- `respuesta.Value == 1`.
- Existe `RefAtencionId`.
- No existe evento `finiquito_manual_creado`.

Mensaje sugerido:

Titulo: `Finiquito manual generado`

Cuerpo: `El finiquito manual de la atencion [IdAtencion] fue registrado correctamente`.

### 9. acuerdo_deuda_creado

Punto sugerido:

`ProveedorController.InsertarReconocimientoDeDeuda`

Condiciones:

- `help_P_Api_Insert_ReconocimientoDeDeuda` responde exito.
- Existe `RefAtencionId`.
- No existe evento `acuerdo_deuda_creado`.

Mensaje sugerido:

Titulo: `Acuerdo de deuda registrado`

Cuerpo: `El acuerdo de deuda de la atencion [IdAtencion] fue registrado correctamente`.

### 10. atencion_reasignada

Punto sugerido:

`ProveedorController.ReAsignarExpediente`

Condiciones:

- La atencion se reasigna exitosamente a otro agente.
- El nuevo agente tiene `TokenPush`.
- No existe evento `atencion_reasignada` para esa atencion/agente nuevo.

Mensaje sugerido:

Titulo: `Atencion reasignada`

Cuerpo: `Se te ha reasignado la atencion [IdAtencion]`.

### 11. atencion_cancelada

Punto sugerido:

`ProveedorController.TomarORCancelarAtencion`

Condiciones:

- El parametro `Estado` corresponde a cancelacion/liberacion.
- La operacion responde exito.
- No existe evento `atencion_cancelada`.

Mensaje sugerido:

Titulo: `Atencion cancelada`

Cuerpo: `La atencion [IdAtencion] fue cancelada o liberada`.

### 12. fotos_siniestro_subidas

Punto sugerido:

`ProveedorController.SubirFotosSiniestro`

Condiciones:

- Se sube al menos una foto correctamente.
- No existe evento `fotos_siniestro_subidas`.

Mensaje sugerido:

Titulo: `Evidencias recibidas`

Cuerpo: `Se recibieron fotografias de evidencia para la atencion [IdAtencion]`.

Nota:

Recomendado enviarlo solo una vez por atencion para evitar ruido.

### 13. firma_cliente_guardada

Punto sugerido:

`ProveedorController.SubirFirmas`

Condiciones:

- Se guarda firma del cliente/asegurado.
- No existe evento `firma_cliente_guardada`.

Mensaje sugerido:

Titulo: `Firma del cliente guardada`

Cuerpo: `La firma del cliente fue guardada para la atencion [IdAtencion]`.

Nota:

Probablemente mejor como auditoria, no necesariamente push.

### 14. firma_ajustador_guardada

Punto sugerido:

`ProveedorController.SubirFirmaAjustador`

Condiciones:

- Se guarda/actualiza firma del ajustador.
- No existe evento `firma_ajustador_guardada`.

Mensaje sugerido:

Titulo: `Firma del ajustador actualizada`

Cuerpo: `Tu firma fue actualizada correctamente`.

Nota:

Evento de auditoria, no necesariamente push.

### 15. coordenadas_siniestro_corregidas

Punto sugerido:

`ProveedorController.InsertarCoordenadasAtencionAgenteProveedor`

Condiciones:

- El tipo/observacion indica correccion manual del lugar del siniestro.
- La coordenada guardada corresponde al siniestro, no solo al tracking del agente.
- No existe evento `coordenadas_siniestro_corregidas`.

Mensaje sugerido:

Titulo: `Ubicacion corregida`

Cuerpo: `La ubicacion del siniestro de la atencion [IdAtencion] fue corregida manualmente`.

### 16. video_evidencia_subido

Punto sugerido:

`ProveedorController.SubirVideo`

Condiciones:

- Se sube video exitosamente.
- No existe evento `video_evidencia_subido`.

Mensaje sugerido:

Titulo: `Video recibido`

Cuerpo: `Se recibio video de evidencia para la atencion [IdAtencion]`.

## Orden Recomendado de Implementacion

Primera fase:

1. `nueva_atencion`
2. `audiencia_agendada`
3. `reclamo_bpm_creado`
4. `reclamo_bpm_error`
5. `finiquito_manual_creado`

Segunda fase:

6. `acuerdo_deuda_creado`
7. `atencion_reasignada`
8. `coordenadas_siniestro_corregidas`
9. `clientehn_enviado`
10. `ajustadorhn_guardado`

Tercera fase:

11. `fotos_siniestro_subidas`
12. `video_evidencia_subido`
13. `firma_cliente_guardada`
14. `firma_ajustador_guardada`
15. `atencion_cancelada`

## Pseudocodigo Recomendado

```csharp
private void TrySendPushOnce(
    int idAtencion,
    int idProveedorAgente,
    string evento,
    short? logEstado,
    string titulo,
    string mensaje,
    Dictionary<string, object> data)
{
    var existe = db.help_NotificacionesPush.Any(x =>
        x.IdAtencion == idAtencion &&
        x.IdProveedorAgente == idProveedorAgente &&
        x.Evento == evento);

    if (existe)
    {
        return;
    }

    var agente = db.help_ProveedorAgentes.FirstOrDefault(x => x.Id == idProveedorAgente);

    if (agente == null || String.IsNullOrWhiteSpace(agente.TokenPush))
    {
        // Registrar pendiente o sin token, segun se defina.
        return;
    }

    var registro = new help_NotificacionesPush
    {
        IdAtencion = idAtencion,
        IdProveedorAgente = idProveedorAgente,
        Evento = evento,
        Estado = "Pending",
        Intentos = 0,
        FechaCreacion = DateTime.Now
    };

    db.help_NotificacionesPush.Add(registro);
    db.SaveChanges();

    var push = new OneSignalPushService();
    var result = push.SendToPlayer(agente.TokenPush, titulo, mensaje, data);

    registro.Intentos = registro.Intentos + 1;
    registro.FechaUltimoIntento = DateTime.Now;
    registro.Estado = result.Success ? "Sent" : "Error";
    registro.FechaEnvio = result.Success ? (DateTime?)DateTime.Now : null;
    registro.UltimoError = result.Success ? null : result.Body;

    db.SaveChanges();
}
```

## Recomendacion Tecnica Importante

No crear un endpoint publico que reciba libremente:

- TokenPush
- Titulo
- Mensaje
- Data arbitraria

Ese patron es riesgoso porque permitiria enviar notificaciones arbitrarias desde el API si alguien obtiene credenciales o descubre el endpoint.

La notificacion debe originarse desde eventos reales del backend, con destinatario derivado desde base de datos.


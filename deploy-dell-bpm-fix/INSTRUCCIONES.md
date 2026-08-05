# Fix BPM: parámetro FS llega NULL desde Swagger

**Proyecto:** WSRestApiHelp  
**Endpoint:** `POST /api/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico`  
**Fecha:** junio 2026  
**Síntoma:** Al probar desde Swagger, el parámetro `FS` (`ApiData.help_CargaReclamoSinau`) llega **NULL** aunque el JSON tenga datos.

---

## Resumen del problema

En ASP.NET Web API 2, un parámetro complejo en POST **debe** marcarse con `[FromBody]` para que el JSON del cuerpo se deserialice correctamente.

El método original era:

```csharp
public IHttpActionResult Carga_Reclamo_Sinau_BPM_Fico(ApiData.help_CargaReclamoSinau FS)
```

Sin `[FromBody]`, Web API no enlaza el body → `FS` = null.

Adicionalmente, `FechaOcurrencia` estaba como `DateTime` en el modelo, lo que complica el envío desde Swagger y desde la app móvil (que manda string `"2024-05-21"`).

---

## Archivos a modificar en la Dell

| # | Archivo (ruta relativa al proyecto WSRestApiHelp) |
|---|---------------------------------------------------|
| 1 | `WSRestApiHelp/Controllers/FicohsaHNController.cs` |
| 2 | `WSRestApiHelp/Clases/ApiData.cs` |

En esta carpeta hay copias de referencia en `codigo/` para comparar o copiar/pegar.

---

## Cambio 1 — `ApiData.cs`

**Clase:** `help_CargaReclamoSinau` (dentro del namespace `ApiData`)

### Antes

```csharp
public string Producto { get; set; }
public string Ramo { get; set; }
public DateTime FechaOcurrencia { get; set; }
public string Causa { get; set; }
// ...
public string Observacion { get; set; }
//public string Cobertura { get; set; }
```

### Después

```csharp
public string Producto { get; set; }
public string Cobertura { get; set; }
public string Ramo { get; set; }
public string FechaOcurrencia { get; set; }
public string Causa { get; set; }
// ...
public string Observacion { get; set; }
```

**Notas:**
- `FechaOcurrencia`: de `DateTime` → `string`
- `Cobertura`: descomentar / agregar la propiedad

---

## Cambio 2 — `FicohsaHNController.cs`

### 2a. Firma del método y validación inicial

**Reemplazar** la firma y las primeras líneas del método `Carga_Reclamo_Sinau_BPM_Fico`:

```csharp
[HttpPost]
[Route("Carga_Reclamo_Sinau_BPM_Fico")]
public IHttpActionResult Carga_Reclamo_Sinau_BPM_Fico([FromBody] ApiData.help_CargaReclamoSinau payload)
{
    if (payload == null)
    {
        var bindingErrors = ModelState.Values
            .SelectMany(v => v.Errors)
            .Select(e => string.IsNullOrWhiteSpace(e.ErrorMessage) ? e.Exception?.Message : e.ErrorMessage)
            .Where(message => !string.IsNullOrWhiteSpace(message));

        var errorMessage = string.Join(" | ", bindingErrors);
        if (string.IsNullOrWhiteSpace(errorMessage))
        {
            errorMessage = "No se recibio el JSON del reclamo. Envie Content-Type application/json con las propiedades en la raiz del objeto (Chasis, puntoServicio, Poliza, etc.), no anidadas bajo 'FS'.";
        }

        return BadRequest(errorMessage);
    }

    DateTime fechaOcurrencia;
    if (!TryResolveFechaOcurrencia(payload.FechaOcurrencia, out fechaOcurrencia))
    {
        return BadRequest("FechaOcurrencia invalida o vacia.");
    }

    string fechaocu = "";

    ObjectParameter R = new ObjectParameter("Respuesta", typeof(DateTime));
    ObjectParameter M = new ObjectParameter("Mensaje", typeof(string));
    db.help_P_Api_RetornarFechaFicohsaUTC(fechaOcurrencia, R, M);

    int IdTablaAjustador = Convert.ToInt32(payload.Observacion);
```

### 2b. Renombrar `FS` → `payload` en todo el método

Buscar dentro de `Carga_Reclamo_Sinau_BPM_Fico` todas las referencias `FS.` y cambiarlas a `payload.`

Ejemplos:
- `FS.Chasis` → `payload.Chasis`
- `FS.Observacion` → `payload.Observacion`
- `FS.ToString()` → `payload.ToString()`

### 2c. Activar parámetro SOAP de cobertura

Descomentar / agregar en el arreglo `parametros`:

```csharp
new WSFICOHSASERVICIO_HN.Parametro { nombre = "p_cobertura", valor = payload.Cobertura }
```

### 2d. Agregar método helper al final de la clase (antes del cierre `}`)

Ver archivo `codigo/TryResolveFechaOcurrencia.cs` o pegar:

```csharp
private static bool TryResolveFechaOcurrencia(string rawFecha, out DateTime fecha)
{
    fecha = DateTime.MinValue;
    if (string.IsNullOrWhiteSpace(rawFecha))
    {
        return false;
    }

    return DateTime.TryParse(
        rawFecha,
        CultureInfo.InvariantCulture,
        DateTimeStyles.AssumeLocal,
        out fecha
    ) || DateTime.TryParse(rawFecha, out fecha);
}
```

**Importante:** El controller ya debe tener `using System.Globalization;` (verificar en la parte superior del archivo).

---

## Compilar y publicar en la Dell

1. Abrir la solución `WSRestApiHelp.sln` en Visual Studio.
2. **Build → Rebuild Solution** (configuración Debug o Release según el servidor).
3. Verificar que compile sin errores.
4. Publicar / copiar el binario al IIS o al servidor donde corre el API.
5. Reciclar el Application Pool de IIS si aplica.
6. Abrir Swagger y probar el endpoint.

---

## Probar en Swagger

### Formato correcto del body

Las propiedades van **en la raíz del JSON**, NO anidadas bajo `"FS"`:

```json
{
  "Chasis": "ABC123",
  "puntoServicio": "307",
  "Poliza": "1000000332",
  "Certificado": "1",
  "NombreAsegurado": "JUAN PEREZ",
  "Sucursal": "0001",
  "Producto": "AU01",
  "Cobertura": "AU01",
  "Ramo": "0002",
  "FechaOcurrencia": "2024-05-21",
  "Causa": "A001",
  "ValorReserva": "2500",
  "UsuarioBPM": "HN15169",
  "Latitud": "14.0723",
  "Longitud": "-87.1921",
  "NombreConductor": "JUAN PEREZ",
  "Genero": "M",
  "Parentesco": "0001",
  "Observacion": "12345"
}
```

Hay un ejemplo listo en `ejemplo-swagger-body.json`.

### Formato incorrecto (provoca NULL o campos vacíos)

```json
{
  "FS": {
    "Chasis": "ABC123",
    "Poliza": "1000000332"
  }
}
```

### Headers requeridos

- `Content-Type: application/json`
- `Authorization: Bearer <token JWT>` (el controller tiene `[Authorize]`)

### Resultados esperados

| Resultado | Significado |
|-----------|-------------|
| **400** con mensaje sobre JSON / FechaOcurrencia | El fix de validación funciona; revisar el body enviado |
| **400** "Expediente no encontrado..." | El binding ya funciona; `Observacion` (IdTablaAjustador) no existe en BD |
| **200** con respuesta BPM | Fix completo y envío exitoso |

---

## Checklist rápido

- [ ] `[FromBody]` agregado al parámetro del método
- [ ] Validación `if (payload == null)` agregada
- [ ] Todas las referencias `FS.` cambiadas a `payload.`
- [ ] `FechaOcurrencia` es `string` en `ApiData.cs`
- [ ] `Cobertura` agregada al modelo y a `p_cobertura` en SOAP
- [ ] Método `TryResolveFechaOcurrencia` agregado al controller
- [ ] Solución compilada sin errores
- [ ] API publicada / IIS reciclado
- [ ] Prueba Swagger con JSON en la raíz (no anidado)

---

## Endpoint QA (opcional, no incluido en este fix)

El endpoint `Carga_Reclamo_Sinau_BPM_FicoQA` **aún usa** la firma antigua sin `[FromBody]`. Si también se prueba desde Swagger, aplicar el mismo patrón a ese método y a la clase `help_CargaReclamoSinauQA`.

---

## Contacto / referencia

- App móvil: envía el mismo JSON plano vía `api.service.ts` → `GuardarBPM()`
- `Observacion` = Id de `help_AjustadorAudiencia` (debe existir en BD para que el flujo continúe)

// Reemplazar firma e inicio del método Carga_Reclamo_Sinau_BPM_Fico
// Archivo destino: WSRestApiHelp/Controllers/FicohsaHNController.cs

[HttpPost]
[Route("Carga_Reclamo_Sinau_BPM_Fico")] // /api/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico/
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

    // ... resto del método sin cambios estructurales,
    // pero reemplazar TODAS las referencias FS. por payload.
    //
    // Ejemplo parámetro SOAP cobertura:
    // new WSFICOHSASERVICIO_HN.Parametro { nombre = "p_cobertura", valor = payload.Cobertura }
}

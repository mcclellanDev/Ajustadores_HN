// Pegar al final de la clase FicohsaHNController (antes del cierre de la clase)
// Requiere: using System.Globalization;

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


/** Función encargada de validar la coherencia de las fechas manejadas por el software */
function validarFechaCoherente(fecha_inicio, fecha_fin) {

    const fechaActual = Date.now();
  
    if (fecha_inicio < fechaActual) {
        return { error: 'La fecha de inicio de la convocatoria no es coherente' };
    }

    if(fecha_fin < fechaActual) {
        return { error: 'La fecha de fin de la convocatoria no es coherente' };
    }

    if(fecha_inicio >= fecha_fin) {
        return { error: 'La fecha de inicio de la convocatoria no puede ser mayor que la de fin' }
    }
  
    return null;

}

module.exports = {
    validarFechaCoherente
}
  
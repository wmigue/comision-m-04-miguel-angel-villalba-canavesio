
export const formateoDates = (fecha) => {
    // Crear una instancia de Date con la fecha proporcionada
    //const fecha = new Date('2023-11-14T20:40:00')
    const f = new Date(fecha)

    // Obtener la representación localizada de la fecha y la hora
    const fechaFormateada = f.toLocaleString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
    return fechaFormateada
}


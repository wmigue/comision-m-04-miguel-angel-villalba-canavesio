// Ordenar los collections de mongodb por el momento de inserción de mas recientes a mas antiguos

export const sortMasRecienteAMasAntiguos = (array) => {
    const response = array.sort((a, b) => {
        const aTime = parseInt(a._id.toString().substring(0, 8), 16)
        const bTime = parseInt(b._id.toString().substring(0, 8), 16)
        return bTime - aTime
    })
    return response
}

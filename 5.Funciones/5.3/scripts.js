/**
 * VALOR DE RETORNO -- funcion de retorno
 */

function obtenerNombreCompleto (nombre, apellido) {
    return nombre + " " + apellido
    //return `${nombre} ${apellido}`
}
let nombre = "Adrian", apellido = "Montaño"
let nombreCompleto 
//nombreCompleto = obtenerNombreCompleto("Adrian", "Montaño")
nombreCompleto = obtenerNombreCompleto(nombre, apellido)
console.log(nombreCompleto)
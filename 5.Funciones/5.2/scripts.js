/**
 * FUNCIONES
 * 
 * vamos a entender como bloques de codigo que van a ser ejecutados varias veces
 * palabra reservada        function
 * las funciones pueden resivir parametros que son los parametros son aquellos que estaran dentro del (parametro) parentesis
 */

function saludar (nombre) {
    console.log(`Hola ${nombre} muy buenos dias.`)
}

function saludar2 (nombre) {
    if(typeof nombre === "string") {
        console.log(`Hola ${nombre} muy buenos dias.`)
    }console.log(`Este valor ${nombre} no es un string`)
}
let nombre = 555
saludar2(nombre)
/**
 * SCOPE
 * 
 * El alcance que tienen ciertos datos
 * 
 * Cuando declaramos una variable podemos hacer la asignacion en misma linea posterior podemos hacer una 
 * reasignacion que pasa con estas variables - estas variables no estan dentro de ningun bloque
 */

let nombre = "Alexys"
nombre = "Juan"

//function saludar () {
//    console.log(`${nombre}`)
//}
//saludar()

/**
 * si observas bien la variable nombre tiene un alcance global sin nisiquiera ser añadido a en la funcion o como parametro
 */

function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}
saludar("Adrian")

function saludar () {
    let nombre = "Alejandro"
    console.log(`Hola ${nombre}`)
}
saludar()

/**
 * El SCOPE hace que pueda tener el nombre de la variable tanto como parametro o nueva variable en una funcion
 * estos no tendran choques si se trabajan de esta forma aqui es donde entra el SCOPE
 * 
 * En recomendacion cada funcion deberia de tener su variables locales en cada funcion
 */

/**
 * En que casos usare variables locales
 */
console.log("----------------------------")
const NOMBRE = "Alexys"
const Saludar = function () {
    const NOMBRE = "Adrian"
    console.log(`Hola ${NOMBRE}`)
}

Saludar()
console.log(NOMBRE)
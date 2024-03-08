/**
 * ForEach
 * 
 * Arrays - Ciclos
 */

let amigos = ["Aleko", "Gabo", "Andrea", "Alisson"]
//con for
for (let i = 0 ; i < amigos.length ; i++) {
    console.log(amigos[i])
}
console.log("------------------------------------------")
/**
 * Los array ya traen para hacer los recorridos de manera mas optima

 *              ForEach           =>                para cada Elemento
 * ForEach necesita como parametro una funcion
 * amigos.forEach(PARAMETRO)
 * la funcion puede ser anonima no es necesiaria darle un nombre
 * 
 * amigos.forEach(function(PARAMETRO) {
 *      ACCION QUE VA EJECUTAR
 * })
 * 
 * el parametro que necesita es un nombre de como va llamar a cada valor del arreglo
 * 
 * En el ejemplo se usa el arreglo de amigos y como parametro se va llamar amigo se puede llamar lo que quieras
 * no hay una restriccion de como deba llamarse 
 * 
 * El resultado va ser lo mismo que usar el for pero para los recorridos en array se prefiere usar forEach
 */

amigos.forEach(function(amigo) {
    console.log(amigo)
})
console.log("------------------------------------------")
/**
 * QUE OPTIMIZACION PODEMOS HACER ACA?
 * Podemos quitar el function
 * Podemos trabajar con el arroy function (Funciones de flecha)
 * */

amigos.forEach((amigo) => {
    console.log(amigo)
})
console.log("------------------------------------------")
/**
 * MAS OPTIMIZADO
 * 
 * Podemos usar sin parentesis recordamos la teoria de las funciones de flecha y decia que si solo recibe un parametro
 * este puede estar sin parentesis
 */
amigos.forEach(amigo => {
    console.log(amigo)
})
console.log("------------------------------------------")
/**
 * MAS OPTIMIZADO
 * 
 * Cuando es la funcion de flecha dijimos que podemos trabajar sin bloque es decir " { } " las llaves
 */

amigos.forEach(amigo => console.log(amigo))



/**
 * QUE PASA SI GUARDO EL ARREGLO EN UNA VARIABLE Y IMPRIMO DATO
 */

//let dato = amigos.forEach(amigo => console.log(amigo))
let dato = amigos.forEach(amigo => console.log(`Hola ${amigo}`))        //Esto imprimira valores normales pero no como arreglo el arreglo se respetara
console.log(dato)           //nos sale que es undefined     //este no retorna ningun dato

/**
 * forEach solo se usa para hacer algo con los elementos del arreglo.
 */
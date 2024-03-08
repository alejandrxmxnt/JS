/**
 * ARRAY 
 * colecciones de datos
 */
let amigos = []
let amigos2 = ["Aleko", "Gabo", "Andrea", "Alisson"]
//Los arreglos pueden inciar con datos o sin ellos

console.log(amigos2)

/**
 * Recordar que los arreglos empiezan en 0
 * 
 * __proto__: Array(0)      una caracteristica que va dedicada a programacion a objetos cosas que podemos hacer
 * es decir funciones que las conoceremos como metodos
 */

//PROBANDO METODOS 
//agregar elementos a mi array

amigos2.push("Gaston")

console.log(amigos2)

let dato = amigos2.push("Pato")     //estoy almacenando el arreglo en una variable
console.log(dato)       //me retornara la longitud del arreglo
console.log(amigos2)
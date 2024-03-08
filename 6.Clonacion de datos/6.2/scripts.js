/**
 * METODOS QUE NO MODIFICAN EL ARRAY
 * push es para agregar datos
 */

let amigos = ["Aleko", "Gabo", "Andrea", "Alisson"]

console.log("Longitud array: " + amigos.length)       //retornara la longitud del arreglo actual
console.log(amigos) 

//Agregar elementos a mi arreglo
let dato = amigos.push("Margaritas")

console.log("ARRAY mas nuevo valor: " + dato)       //retornara la longitud del arreglo actual
console.log(amigos)     //retornara el arreglo

//Quitar elementos de mi array
let dato2 = amigos.pop()            //quita el ultimo valor de arreglo //pop() no require parametro
//dato2 no retornara el valor que fue eliminado.
console.log("Valor eliminado es: " + dato2) //
console.log(amigos)
console.log("---------------------------")
//Para partir el array en 2 array
let slice = amigos.slice(0, 2)     //desde, hasta antes
console.log(slice)      //tiene la mitad del arreglo
console.log(amigos)     //arreglo completo 

/**
 * Hay metodos que modifican el arreglo original en cambio hay otros metodos como el slice que no modifican el 
 * arreglo original  y en su lugar nos devuelve un nuevo arreglo con el resultado que nosotros estamos queriendo 
 * obtener.
 */
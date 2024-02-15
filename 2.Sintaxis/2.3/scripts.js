/**
 * TIPOS DE DATOS - COLECCION DE DATOS
 */


//console.log(typeof "Jose", "José", "Juan", "Jean", "Oto") //solo imprimira del primer el tipo de dato, de los otros nos devolvera el texto normal

["Jose", "José", "Juan", "Jean", "Oto"]     //a esto se llama array - pero en javascript es considerado objeto

console.log(typeof ["Jose", "José", "Juan", "Jean", "Oto"])     //imprimira que es un object

/**
 * OBJECT
 * Los objetos son solecciones de datos que tienen un identificador y un valor.
 */
console.log("----------------------")
console.log(["Jose", "José", "Juan", "Jean", "Oto"])

/**
 * OBJETOS DE JAVASCRIPT
 * A LOS OBJETOS SE LES LLAMA ATRIBUTOS
 * 
 * La nomenclatura de objetos en javascript se usa ({    .... datos ....    })
 */

objeto = ({
    nombre: "Adrian",
    apellido: "Montaño"
})
console.log(objeto)         //esto es object

/**
 * NULO - null
 * 
 * palabra reservada null
 */
console.log(typeof null)        //imprime que es objeto pero esto es un fallo de sistema que no se cambia por que esto podria afectar a otros sistemas.

/**
 * ForEach vs Map
 */

let amigos = ["Aleko", "Gabo", "Andrea", "Alisson"]

/**
 * Que pasa si yo necesito un arreglo nuevo y tengo el arreglo principal - y quiero modificar el arreglo principal
 * 
 * Para hacer eso se tiene otro metodo .map()
 */

let dato = amigos.map(amigo => console.log(`Hola ${amigo}`))
//console.log(amigos)
//console.log(dato)       //AL hacer uso del .map() me han optenido un nuevo arreglo
/**
 * Por que me sale undefined en el arregl de dato por que estamos haciendo uso del console.log() que es para imprimir no para almacenar entonces es un fallo.
 * para que el nuevo arreglo dato alamacene el valor nuevo sumado del anterior este debera quitar el console.log()
*/

let dato2 = amigos.map(amigo => `Hola ${amigo}`)        //Solo de esta forma este podra guardar el valor por que eso hace la funcion de flecha
console.log(amigos)
console.log(dato2)  

/**
 * .map() tiene la misma capacidad que el foreach ejecutan la misma funcionalidad pero .map() tiene la cualidad de devolver
 * un nuevo array completamente nuevo rellenando ese array con lo que yo retorde(de otro arreglo) en cada siclo en cada elemento que vor recorriendo.
 * amigos es el array original
 * dato2 que es el arreglo copia con info nueva al cual puedes hacer lo que quieras
 */

/**
 * 
 * ACTUALMENTE LOS DESARROLLADORES YA NO USAN EL ForEach ESTA COMO DESCONTINUADO EXISTE PERO YA NO SE USA COMO ANTES
 * EN PREFERENCIA SE TRABAJA CON .map() 
 * 
 * NO ESTA MAL UTILIZAR ForEach PERO LO VAS A USAR SIEMPRE Y CUANDO ESTES SEGURO DE QUE NO NECESITAS ALMACENAR EL NUEVO
 * ARRAY QUE SE A GENERADO Y SIMPLEMENTE QUIERES RECORRER ELEMENTOS PARA HACER ALGO CON ELLOS Y PUNTO NO LOS ESTAS ALMACENANDO.
 * 
 * SI QUIERES MODIFICAR EL ARRAY ORIGINAL Y QUIERES TRABAJAR SOBRE NUEVOS DATOS ES RECOMENDADO USAR EL .map() 
 */
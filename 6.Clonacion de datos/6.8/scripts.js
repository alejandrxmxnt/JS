/**
 * OBJETOS
 */

let alumno = {
    nombre: "Adrian",
    edad: 21,
    suscriptor: false,
    ciudad: "Lima"
}

console.log(alumno)         //De esta forma accedimos a todo el objeto
/**
 * Que pasa si solo quiero acceder a un dato del objeto como hago eso?
 */
console.log(alumno.ciudad)
/**
 * Otra forma de perdir el dato de un objeto es
 */
console.log(alumno["edad"])     //ponemos siempre en cadena de texto si lo haremos de esta forma usando corchetes []

/**
 * QUE PASA SI YO QUIERO OBTENER TODOS LOS VALORES DEL OBJETO 
 * 
 * Haciendo el uso de Object.values()       Values es para pedir todos los valores y Object es la palabra por 
 *                                          defecto que se usa para llamar al objeto y lo que va dentro del 
 *                                          parentesis es el nombre del objeto al que llamamos.
 *                                          ESTE PUEDE SER GUARDADO EN UNA VARIABLE
 */

Object.values(alumno)

let objeto = Object.values(alumno)
console.log(objeto)                         //IMPRIME       =>      (4) ['Adrian', 21, false, 'Lima']
                                            //Esto creara un arreglo

/**
 * QUE PARAS SI YO QUIERO SABER QUE ATRIBUTOS TIENE MI OBJETO
 * 
 * Haciendo uso del Object.keys(OBJETO)
 */

let object = Object.keys(alumno)
console.log(object)                         //IMPRIME       =>      (4) ['nombre', 'edad', 'suscriptor', 'ciudad']

/**
 * OBJETO VACIO
 * 
 * Creara un objeto vacio
 */

let objetoVacion = {

}
let object2 = Object.keys(objetoVacion)
console.log(object2) 

/**
 * ESTO ES UTIL
 * para que?
 * 
 * Por que en algunos momentos la logica que vas aplicar en algunos programas no sabemos si el objeto esta vacio ono
 * este es el metodo para saber todas las llaves que tiene un objeto si tiene llaves es por que tiene informacion
 * si esta vacio este no carga informacion.
 */
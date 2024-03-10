/**
 * Math u Date
 * 
 * Math         Nos permite conseguir valores matematicos
 * Date         Nos permite conseguir valores de fecha
 */

/**
 * Math
 */
const random = Math.random()         //.random()     retorna un numero aleatorio entre 0 y 1
console.log(random)
console.log("----------------------")
const pi = Math.PI              //.PI           teda el valor de PI
console.log(pi)
console.log("----------------------")
const sqrt2 = Math.SQRT2           //.SQRT2        cuadrado de 2
console.log(sqrt2)
console.log("----------------------")
const log10e = Math.LOG10E           //.LOG10E        Logaritmo de 10
console.log(log10e)
console.log("----------------------")
const max = Math.max(50, 2, 10, 88) //.max(VALORES)        Puedes buscar el numero maximo de un arreglo o valores 
                                    //dentro de el y lo mismo aplica con .min(VALORES)
console.log(max)

/**
 * Math tiene un varias operaciones basta que ponas Math.       y te saldran un listado de operaciones que puede 
 * hacer como incluso tenemos las operaciones de SENO, COSENO, TANGENTE entre otras
 */

/**
 * DATE
 * Para DATE necesitamos inciar un objeto
 */
console.log("--------- DATE -------------")
const date = new Date()         //Imprime   =>      Sun Mar 10 2024 02:03:18 GMT-0400 (hora de Bolivia)
console.log(date)
console.log("----------------------")
console.log(date.getFullYear())        //Imprime   =>   2024
console.log("----------------------")
console.log(date.getMinutes())        //Imprime   =>      6     segun el minutero de tu relog
console.log("----------------------")
console.log(date.getUTCDate())        //Imprime   =>      10    imprime la fecha de hoy del mes

/**
 * Tanto Math. o Date()     tienen sus metodos por los cuales funcionan de los cuales se apoyan sin necesidad de
 * generar tanta logica de programacion.
 */
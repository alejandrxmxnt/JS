/**
 * Arrays - Ciclos
 */

let numeros = [10,436,45,74,33,9,2,54]

/**
 * Find, includes, some, every
 * 
 * .find()      Para encontrar un valor que cumpla con la condicion solo uno
 */
console.log("-------------- FIND ---------------")
let dato = numeros.find(num => num>39)
console.log(dato)       //devuelve 436      ¿Por que pasa esto y no devuelve un array?
                        //                  Es debido a que encuentra un valor que cumple la funcion y le es 
                        //                  suficiente y se detiene el ciclo.

//IMPRIMIR EL PRIMER VALOR QUE SEA IMPAR
let dato2 = numeros.find(num => num%2 === 1)
console.log("Impar: " + dato2)

/**
 * .includes()       Para evaluar que el valor sea exactamente igual al que ando busando
 * NO PUEDES USAR MAYORES MENORES NADA DE ESO 
 */
console.log("-------------- INCLUDES ---------------")
let include = numeros.includes(33)
console.log(include)       //devuelve TRUE  ¿Por que pasa esto?
                        //                  Este solo puede buscar valores que coincida al 100% con lo solicitado 
                        //                  no existe como tal el otra condicion solo devolvera TRUE o FALSE

/**
 * .some()          Te va permitir comprobar si almenos algun elemento de mi array cumple con la condicion
 */

console.log("-------------- SOME ---------------")
let some = numeros.some(num => num<0)
console.log(some)       //devuelve FALSE  ¿Por que pasa esto?
                        //                  Este solo puede verificar que almenos uno cumpla la condicion para  que 
                        //                  sea verdadero en este caso todos los valores del arreglo son mayores a 0
                        //                  por lo cual retorna FALSE en caso de poseer un valor menor a 0 este
                        //                  podra ser TRUE

                        //Ejemplo adicinal:
let arreguito = [15,10,12,-5,"Adrian", true]                        
let some2 = arreguito.some(num => typeof num === "string")
console.log("Para verificar la existencia de un valor que quiero en mi arreglo: " + some2)

/**
 * .every()             //Voy a comparar o validar que todos los datos del arreglo (todos los elementos) cumplan con
 * una condicion.
 */

console.log("-------------- EVERY ---------------")
let every = numeros.every(num => typeof num === "number")
console.log(every)      //                  Este solo puede verificar que todos cumplan la condicion de no ser  
                        //                  a asi este marca como FALSE.
                        //                  Este retornara TRUE pero si hago con el arreguito marcara como FALSE
let every2 = arreguito.every(num => typeof num === "number")
console.log(every2)     //                  Este devuelve FALSE arreguito esta compuesto de elemento como numeros
                        //                  cadenas u boleanos
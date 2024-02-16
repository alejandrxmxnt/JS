/**
 * CONDICIONALES
 */

/**
 * Invitacion a una fiesta
 * Si eres mayor de edad y menor a 65 año puedes venir a la fiesta
 */

let edad = 18
let mayoria = 65
let minimo = 18
let persona = "Adrian"

if ((edad >= minimo) && (edad <= 65)){
    console.log(`${persona} Usted tiene permiso para entrar a la fiesta`)
}
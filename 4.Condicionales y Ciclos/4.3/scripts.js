/**
 * Invitacion a una fiesta
 * Si eres mayor de edad y menor a 65 año puedes venir a la fiesta
 * Que si no eres mayor de edad pero tienes permiso de tus padres puedes venir
 * Si no quedate en casa
 */

let edad = 68
let mayoria = 65
let minimo = 18
let persona = "Adrian"
let permiso = true

if ((edad >= minimo) && (edad <= 65)){
    console.log(`${persona} Usted tiene permiso para entrar a la fiesta`)
}else if((permiso === true) && (edad <= 17)){
    console.log(`${persona} Tienes permiso de tus padres`)
}else{
    console.log(`${persona} Usted No puede ingresar a la fiesta`)
}
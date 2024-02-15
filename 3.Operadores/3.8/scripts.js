/**
 * TYPE COERCION
 * es la capacidad que tiene javascript o otros lenguajes almacenar y distinguir el tipo de valor de cada uno
 */

let a = 521
let b = 422
let c = "Perro"
let d = "422"

let resp1 = a + b           //resultado 943
let resp2 = a + d           //resultado 521422      por que esto pasa por que lo toma como concatenacion
let resp3 = a - b           //resultado 99           
let resp4 = a - d           //resultado 90      esto pasa por que no es valor de concatenacion entonces lo convierte en numero y sucede eso
let resp5 = a - c           //resultado NaN => Not a number 
let resp6 = true + true     //resultado 2       en logica binaria true vale 1 y false vale 0

console.log(resp5)
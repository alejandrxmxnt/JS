/**
 * FUNCIONES FLECHA - arrow functions
 *          =>
 */

const sumar = function (a, b) {
    return a + b
}

const restar = function(c, d) {
    return c - d
}

/**
 * El operador de flecha => nos va permitir simplificar estas acciones de crear varias funciones de operaciones cortas
 * De la siguiente forma
 * 
 * poner el         =>          es como decirle que los parametros que estan dentro del (//parametros) retornen algo
 */
//  =>  directamente retorname 
// (pametros) pueden ser varios los que se van a sumar o lo que vayas a hacer con ellos.
// const sumar = (parametro1, parametro2) =>
//      lo que sigue del => parametro1 + parametro2     sera la suma o lo que tu definas para hacer
const Sumar = (a, b) => a + b
const Restar = (a, b) => a - b

console.log(Sumar(10,5))
console.log(Restar(10,5))

const Saludar = (nombre) => `Hola ${nombre}`
const Saludar2 = nombre => `Hola ${nombre}, Buenos dias`     //Cuando la funcion de flecha reciba solo un parametro puedes quitar los parentesis ojo cuando solo recibe un valor
console.log(Saludar("Adrian"))
console.log(Saludar2("Adrian"))

/**
 * -----------------------------------------------------------------------------------
 * para evitar el typecoersion podemos hacer lo siguiente
 * 
 * despues de la flecha => podemos escribir la logica de programacion usando las {  codigo  }
 */
console.log("--------------------------------------------")
const Saludar3 = nombre => {
    if(typeof nombre === "string"){
        console.log(`Hola ${nombre}`)
    }else{
        console.error("Tipo de dato equivocado!!!")  //console.error para monstrar en consola un error
    }
}

//Saludar3("Alejandro")
Saludar3(456)
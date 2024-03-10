/**
 * Filter       =>          Filtar Contenido
 * 
 * Metodos que ejecutan al igual que .map() para un ciclo en diferentes objetivos
 */

let numero = [10,436,45,74,33,9,2,54]

/**
 * Crear un nuevo array que obtenga los valores mayores a 20 (es un ejemplo para entender filter)
 * 
 * Que darian fuera del array el 10,9,2
 */

//numero.map(num => {
//if(num > 20){
//        console.log(num)
//
//    }
//})

/**
 * Con eso imprimo los valores que son mayores a 20 pero yo quiero que esto se guarden en un nuevo arreglo
 */

let nuevoArray = []             // Para almacenar los valores 

numero.map(num => {
    if(num > 20){
        nuevoArray.push(num)
    }
})

console.log(nuevoArray)

//DE ESTA FORMA NOSOTROS CREAMOS OTRO ARREGLO EN EL CUAL GUARDAMOS LOS VALORES QUE QUEREMOS DADA LA CONDICION
//PERO PARA EVITAR ESTO TENEMOS EL filter QUE YA HACE ESTA LOGITA POR NOSOTROS
/**
 * Como puedo hacer con el Filter
 * 
 * .filter(FUNCION YA SEA EL DE LLAVES O DE FLECHA)  =>   OPERACION PARA RETORNAR UN TRUE O FALSE
 * 
 * COMO FILTER FILTRA DATOS ESTE SE DEBE ALMACENAR EN UNA VARIABLE
 */

let dato = numero.filter(num => num>20)
console.log(dato)

//Filter filtra los elementos de un array segun una comparacion que nos devuelva true o false 
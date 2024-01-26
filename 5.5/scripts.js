/**
 * FUNCIONES ANONIMAS
 * Son las funciones que no tienen un nombre que trabajara con sus parametros
 */
//ALMACENO LA FUNCIONES EN UNA VARIABLE 
//sumar ya no sera una variable comun ahora sera una funcion
let sumar = function ( a , b , c ) {
    return a + b + c
}

//-------------------------------------------------------------------//
//---------------------- OTRA FORMA ---------------------------------//

(function ( a , b , c ) {
    console.log(a + b + c)
}(1,2,3))


//console.log(sumar(1,1,1)) //manda los parametros

//console.log(typeof sumar) //SERA RECONOCIDO COMO FUNCION
//sumar() //No imprime nada ya que no esta cargando la funcion de sumar
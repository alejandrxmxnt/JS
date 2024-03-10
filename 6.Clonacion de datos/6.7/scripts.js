/**
 * Manipulando string
 * 
 * Asi como los array tienen varios metodos para distintas situaciones las cadenas de texto es decir los strings
 * trambien cuentan con esta positibilidad.
 * 
 * SLICE         Conseguir una porcion de texto
 * SPLIT         Va dividir el texto
 */

let texto = "Adrian Alejandro Montaño Soliz"
console.log("-------- SLICE ---------")
/**
 * SLICE         .slice(VALORES)        SE LE DEBEN DE PASAR 2 VALORES
 */
let slice = texto.slice(3, 10)       //Le estoy diciendo que cuente de la posicion VALOR1 hasta antes de VALOR2
console.log(slice)                   //Imprime   =>      ian Ale
//ESTO SIRVE PARA CONSEGUIR UN FRAGMENTO DE LO QUE BUSCAMOS

/**
 * SPLIT        .split()                VA MANTENER EL TEXTO PERO LO VA DIVIDIR EN 2
 * 
 * Dado que encuentra el valor que se le solicita este hara los corte de los valores estos pueden ser tamaños por
 * igual o de distintas porcienes
 * 
 * .split("VALOR A BUSCAR")         El caractecter que mandes a buscar lo lo incluira en el arreglo
 * 
 * Si yo pongo .split("")           Asi vacio este separara letra por letra incluyendo espacios el resultado sera:
 * (30) ['A', 'd', 'r', 'i', 'a', 'n', ' ', 'A', 'l', 'e', 'j', 'a', 'n', 'd', 'r', 'o', ' ', 'M', 'o', 'n', 't', 'a', 'ñ', 'o', ' ', 'S', 'o', 'l', 'i', 'z']
 */
console.log("-------- SPLIT ---------")
let split = texto.split(" ")        //Le estoy diciendo que cuando encuentre " " haga los cortes del fragmento
console.log(split)                  //Imprimira  =>     Los valores pero en arreglo
                                    //Resultado:        (4) ['Adrian', 'Alejandro', 'Montaño', 'Soliz']

/**
 * SEARCH       .search()           LO UNICO QUE NECESITA ES UNA EXPRESCION REGULAR
 * ¿QUE ES UNA EXPRESION REGULAR?
 * Es una serie de caracteres para realizar una busqueda
 * 
 * Algunas expresiones que se agregan para mejorar el funcionamiento son:
 *      .toLocaleLowerCase()        PARA HACER MINUSCULA TODO EL TEXTO
 *      .toLocaleUpperCase()        PARA HACER MAYUSCULA TODO EL TEXTO
 * 
 * ¿PARA QUE EXISTEN ESTO DE LOS .toLocaleUpperCase() o .toLocaleLowerCase()?
 * por que cuando aprendemos a programar hacemos la logica por ejemplo tenemos
 * let texto = "adrian"
 * let texto = "Adrian"
 * let texto = "ADRIAN"
 * 
 * y queriamos ver si el nombre que buscamos es igual a los texto que tenemos haciamos esto
 * 
 * if (texto = "adrian" || texto = "Adrian" || texto = "ADRIAN"){
 *      //logica
 * }
 * 
 * Incluso resolviamos haciendo una logica mas larga de una cadena de puros if y else para evitar esta situacion 
 * tenemos los .toLocaleUpperCase() o .toLocaleLowerCase() al hacer uso de esto puedo directo poner
 * 
 * if (texto.toLocaleUpperCase === "ADRIAN"){
 * }
 * O biceserva hacer con el .toLocaleLowerCase() y buscar en pura minusculas 
 * notas la diferencia que puedes usar argumentos que ya fueron diseñados para facilitar operaciones.
 */
console.log("-------- SEARCH ---------")
//let search = texto.toLocaleLowerCase()
let search = texto.toLocaleUpperCase()
console.log(search)
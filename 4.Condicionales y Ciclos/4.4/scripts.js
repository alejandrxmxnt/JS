/**
 * CONDICIONALES MÚLTIPLES
 */

/**
 * Que personaje de dragonball z eres
 * 
 * Si eres fuerte y comelon eres Goku
 * Si eres veloz y egoista ere Vegeta
 * Si eres pequeño y debil eres Krilin
 * Si eres travieso y jugueton eres trucks
 * Si no eres ningulo eres una sabandija
 */

let personalidad = "Pequeño y debil"
let goku = "Fuerte y comelón"
let vegeta = "Veloz y egoista"
let krilin = "Pequeño y debil"
let truncks = "Travieso y jugueton"

switch (personalidad){
    case goku:
        console.log("Eres Goku")
        break
    case vegeta:
        console.log("Eres Vegeta")
        break
    case krilin:
        console.log("Eres Krilin")
        break
    case truncks:
        console.log("Eres Truncks")
        break
    default:
        console.log("Eres una sabandija")
        break
}
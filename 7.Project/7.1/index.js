/**
 * PROYECTO FINAL - Requerimientos
 * 
 * Se require un sistema que pueda correr en consola que permita la atencion al cliente en un restaurante. El 
 * sistema debe tener la capacidad de:
 * 
 * - Mostrar el menú disponible
 * - Permitir que el usuario pida elementos del menú
 * - Mostrar el costo total del usuario debe pagar
 * - Cobrar al usuario
 * - Reportar el monto total de ventas realizadas
 */

/**
 * Esta funcion no se ejecuta hasta que yo llame a la funcion 
 * 
 * Que pasa si yo imprimo?
 * console.log(productos)           Nos indicara un error (el sistema se rompio)
 * 
 * por que sale error?
 * En el archivo html los scripts se ponen secuencialmente:
 *      <script src="index.js"></script>
 *      <script src="productos.js"></script>
 * primero al index y cuando termine index recien ira a productos.js
 * 
 * Si falla es por que no sigue el orden de secuencia PARA EVITAR ESTO SE DEBE HACER ASI:
 *      <script src="productos.js"></script>
 *      <script src="index.js"></script>
 * 
 * Cuando falla un archivo se rompe todo el sistema
 */

/**
 * Lógica para crear pedidos y cobrar los pedidos del usuario
 */

const usuario = {
    nombre: "Adrian",
    edad: 30,
    deuda: 0
}

let pedido = []
let costoPedido = 0

/**
 * Lista todos los productos del menú en un formato amigable
 */
//Retorna todo el array de productos
const mostrarMenu = () => {
    console.log(`CÓDIGO - NOMBRE PRODUCTO - COSTO `)
    //productos.forEach(producto => console.log(`${producto.codigo} - Producto: ${producto.nombre} costo: ${producto.costo}`))      //OTRA FORMA DE MANEJAR SIN FOR PERO HACIENDO USO DEL FOREACH CUALQUIERA DE LAS DOS ES VALIDO PARA EL DESARROLLO

    //OTRA FORMA DE EJECUTAR EL FOR
    for(let producto of productos){     //como se llamara cada valor y el OF de que array esta saliendo
        console.log(`${producto.codigo} - Producto: ${producto.nombre} costo: ${producto.costo}`)
    }

}

const pedirProducto = cod => {
    if(!cod) return "Ingrese un codigo Valido"

    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if(!productoEncontrado) return "El producto no existe."

    pedido.push(productoEncontrado)
    console.log("El producto ha sido agregado a su pedido. Su pedido es:")
    return verPedido()
}

const verPedido = () => pedido      //para ver el pedido

const calcularCosto = () => {
    let costo = 0
    for(producto of pedido){
        costo += producto.costo
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, debes pagar ${usuario.deuda} dólares.`
}
/**
 * Función que permite pagar todo un pedido y entrega cambio si es necesario
 */
const pagarPedido = montoEntregado => {
    if (typeof montoEntregado === "number"){
        if(montoEntregado < usuario.deuda) {
            return `No te alcanza para pagar tu pedido`
        }else if (montoEntregado === usuario.deuda) {
            usuario.deuda = 0
            return `Tu pedido ha sido pagado`
        }else {
            console.log(`Tu pedido ha sido pagado y tu cambio es ${montoEntregado - usuario.deuda} dólares.`)
            usuario.deuda = 0
            return "Deuda pagada"
        }
    }else{
        return "Dato ingresado de forma erronea"
    }
}  
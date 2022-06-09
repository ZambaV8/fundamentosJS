// Objetos



const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible :true
}
//console.table(producto)
console.log(producto.nombre)

//desctructuring de objetos 

const {nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// objet literal enhacement

const autenticado = true
const usuario = 'Juan'
const nuevoObjeto = {
    autenticado:autenticado,
    usuario:usuario
}
console.table(nuevoObjeto)
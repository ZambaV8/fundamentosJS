const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible :true
}


// objet freeze no permite modificar el objeto
Object.freeze(producto)

//objet seal permite modificar propiedades
Object.seal(producto)
//reescribir un valor
producto.nombre = "Monitor Curvo"

//si no existe , lo añade.
producto.imagen = "monitor.jpg" 

// para eliminar una propiedad del
delete producto.disponible

//





console.table(producto)
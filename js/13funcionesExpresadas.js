// FUNCIONES EXPRESADAS 
/* 
function sumar(numero,numero2){
    console.log(numero + numero2)
}
 */


const sumar = function(numero = 0,numero2 = 0){
    return numero + numero2
}

const resultado = sumar(30)

console.log(resultado)
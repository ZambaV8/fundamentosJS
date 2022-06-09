// FUNCIONES - FUNCTION DECLARATION

/* function sumar(numero,numero2){
    console.log(numero + numero2)
}

sumar(10,20)
sumar(2,6)
sumar(100) */


/* function sumar(numero,numero2){
    return [numero + numero2, "hola mundo"] 
}

const [resultado , holaMundo] = sumar(10,20)
console.log(resultado)
console.log(holaMundo) */



function sumar(numero,numero2){
    return {
        resultado: numero + numero2,
        mensaje:"hola mundo"
    }
}

const {resultado , mensaje} = sumar(10,20)
console.log(resultado)
console.log(mensaje)
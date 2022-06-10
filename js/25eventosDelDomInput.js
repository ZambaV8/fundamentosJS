// EVENTOS DEL DOM INPUT 



const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener("input", function(e){
    console.log("escribiendo en el input")
    console.log(e)
}   )


const inputPassword = document.querySelector('.password')
inputPassword.addEventListener("input", funcionPassword)

function funcionPassword(e){
    inputPassword.type = "text"

    setTimeout(()=>{
        inputPassword.type = "password"
    },1000);
}
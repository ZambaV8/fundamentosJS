//EVENTOS DEL DOM , CLICKS DEL


/* const heading = document.querySelector(".heading")
heading.addEventListener("click",()=> {
    console.log("diste click en heading ")
})
 */

const clickHeading = ()=> {
    console.log("diste click en heading ")
}

const heading = document.querySelector(".heading")
heading.addEventListener("click",()=>{
    heading.textContent = "NUEVO HEADING AL DAR CLICK"
})


const enlaces = document.querySelectorAll(".navegacion a")
enlaces.forEach(enlace => {
    enlace.addEventListener("click", ()=> {
        console.log("diste click en enlace")
    })
}
)
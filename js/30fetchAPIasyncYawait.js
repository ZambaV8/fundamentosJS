
const url = "https://jsonplaceholder.typicode.com/comments"



const consultarAPI = async () => {
    const respuesta = await fetch(url)
    console.log("despues de respuesta")
    const resultado = await respuesta.json()
    console.log("despues de resultado")
}
consultarAPI();
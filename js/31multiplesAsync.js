//
 //   MULTIPLES LLAMADOS //
// 
const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"



const consultarAPI = async () => {
    const respuesta = await fetch(url) 
    const resultado = await respuesta.json()
    console.log(resultado)


    console.log("iniciando 2da consulta")

        const respuesta2 = await fetch(url2) 
        const resultado2 = await respuesta2.json()
        console.log(resultado2)


}
consultarAPI();


const consultarAPI2 = async () => {
   const [respuesta,respuesta2] = await Promise.all([fetch(url),fetch(url2)])
  const resultado = await respuesta.json()
  const resultado2 = await respuesta2.json()


   console.log(resultado2)
   console.log(resultado)

}
consultarAPI2();
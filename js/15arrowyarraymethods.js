
const tecnologias = ['HTML5', 'CSS', 'JavaScript', 'NodeJS', 'ReactJS'];


/* 
const nuevoArray2 = tecnologias.map(tech =>{
    if(tech === "HTML5"){
        return "GraphQL"
    } else {
        return tech
    }
}) */

/* console.log(nuevoArray2) */


const nuevoArray = tecnologias.filter( tech => {
    return tech !== "ReactJS"
})
 

console.log(nuevoArray)
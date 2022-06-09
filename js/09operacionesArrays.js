// OPERACIONES DE ARRAYS    



const tecnologias = ["HTML","CSS","JavaScript","React","Node"]



// añadir elementos
//tecnologias.push("MongoDB")// añade al final
//tecnologias.unshift("MongoDB")// añade al principio
//const nuevoArray = [...tecnologias, "GraphQL"]
//const nuevoArray = ["GraphQL",...tecnologias]

// eliminar elementos 

//tecnologias.pop() elimina del final
//tecnologias.splice(2,1) elimina por posicion especifca
//tecnologias.shift() elimina del principio
/* const nuevoArray = tecnologias.filter(function(tech){
    return tech == "React"
}) */
// reemplazar elementos 
// tecnologias[0] = "VisualCode"  MODIFICA EL ARRAY ORIGINAL ES UN NO!!!

const nuevoArray = tecnologias.map(function(tech){
    if(tech === "HTML"){
        return "GraphQL" }
        else {
            return tech
        }
    }
)




//console.log(tecnologias)
console.table(tecnologias)
console.table(nuevoArray)
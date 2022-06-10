let consolas =['PlayStation','Xbox','Nintendo Game Cube','Sega DreamCast','Game Boy Advanced']

const posicion =2;
const numeroElementos =2;
const elementosEliminados =  consolas.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(consolas)

consolas.push('Nintendo 64')
console.log(consolas)

consolas.unshift('Nintendo Will')
console.log(consolas)

const imprimir =()=>{ 
    
const longitud = consolas.length
document.getElementById("long_1").textContent = 'La Longitud es '+ longitud

const ultimo = consolas[longitud-1]
document.getElementById("ulti_1").textContent= 'El Ultimo Elemento es '+ultimo

const primero= consolas[2]
document.getElementById("prime_1").textContent= 'Elemento '+primero
}




let librerias=['Bootstrap','Materialize','Bulma','Tailwind','Pure','Pico CSS','Skeleton','Primer']

librerias.unshift("Spectre")
console.log(librerias)

const posicion =5;
const numeroElementos =2;
const elementosEliminados =  librerias.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(librerias)

librerias.push('Milligram')
console.log(librerias)

function mostrar(){
const longitud = librerias.length
console.log('longitud del arreglo:  '+longitud)
document.getElementById("pr_1").textContent = 'La longitud del arreglo es: '+longitud



const ultimo = librerias[longitud-1]
console.log('ultimo:'+ultimo)
document.getElementById("pr_2").textContent = 'El ultimo elemento del arreglo es:'+ultimo 

const indice = librerias.indexOf("Bulma")
console.log('indice obtenido:'+indice)

console.log(librerias[indice])

document.getElementById("pr_3").textContent= 'Su indice es:'+indice
}

const boton = document.getElementById("mostrar_1")
boton.addEventListener ("click",mostrar)


function mostrar_lista(){
    let filas=[]

    librerias.forEach(element => {
        
        let fila=`<li class="list-group-item">${element}</li>`
        filas.push(fila)
    });

    document.getElementById("recorrer").innerHTML=filas.join("")
    
}


const boton2 = document.getElementById("recorrer_1")
boton2.addEventListener ("click",mostrar_lista)

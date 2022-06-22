const obtener_datos= async ()=>{
    const datos= await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const datos_obtenidos = await datos.json()

    let filas=[]
 datos_obtenidos.forEach((Element,index)=> {
        let fila=
        `<tr>
        
        <td>${index+1}</td>
        <td>${Element.casa.nombre}</td>
        <td>${Element.casa.compra}</td>
        <td>${Element.casa.venta}</td>
      
        </tr> `
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML=filas.join('')
}


obtener_datos()


let criptos=['Bitcoin','Ethereum','Tether','BNB','Cardano','Dai','Helium','Shiba Inu','Tron','Cronos','Solana']


criptos.unshift("Stellar")
console.log(criptos)

const posicion =7;
const numeroElementos =8;
const elementosEliminados =  criptos.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(criptos)

criptos.push('Gate')
console.log(criptos)

function mostrar(){
const longitud = criptos.length
console.log('longitud del arreglo:  '+longitud)
document.getElementById("long_1").textContent = longitud

}
const boton = document.getElementById("tablas_1")
boton.addEventListener ("click",mostrar)
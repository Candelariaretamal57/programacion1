const obtener_producto= ()=>{

const producto= await fetch('https://fakestoreapi.com/products/category/jewelery')
const producto_definidos=await producto.json()
let columnas=[]
//recorrer los usuarios
producto_definidos.forEach(element => {
    let columnas=
    `tr>
      
    </tr> `
    filas.push(fila)
    
    
});
}
document.getElementById("").innerHTML=filas.join('')
//infocamos la funcion 
obtener_producto()
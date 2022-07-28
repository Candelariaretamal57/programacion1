function almacenar_indice(indice)
{
    localStorage.setItem("indice",indice)
}

function editar(index)

{
 let lista_productos=JSON.parse(localStorage.getItem("productos"))

 document.getElementById("inp_descripcion").value=lista_productos[index].descripcion
 document.getElementById("inp_precio_venta").value=lista_productos[index].precio_venta
 document.getElementById("slt_categorias").value=lista_productos[index].categoria


localStorage.setItem("indice",index)

document.getElementById("btn_guardar").style.display="none"
document.getElementById("btn_actualizar").style.display="block"

}
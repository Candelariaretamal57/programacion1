import Producto from"./producto.js";
 
function guardar(){
    let descripcion= document.getElementById("inp_descripcion").value
    let precio_venta= document.getElementById("inp_precio_venta").value
    let categoria= document.getElementById("slt_cat").value

    let producto=new Producto(descripcion,precio_venta,categoria)
    //ejecutamos 
        producto.guardar_producto()
    
}
document.getElementById("btn_guardar").addEventListener("click",guardar)


function listar(){
    const producto=new Producto()
    producto.obtener_producto()

}
listar()
function eliminar()
{
    let indice = localStorage.getItem("indice")
    //creamos una instancia
    //para acceder a los metodos y atributos de la clase Producto
    let producto = new Producto()

    //haciendo uso de la instancia 
    //invocamos el metodo eliminar_producto()
    producto.eliminar_producto(indice)
}
//
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar()
{
    //creamos la instancia producto
    let producto = new producto()
    /*
    y atravez de la instancia accedemos e invocamos
    al metodo actualizar_producto() existente en archivo producto.js 
    */
    producto.actualizar_producto()
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)
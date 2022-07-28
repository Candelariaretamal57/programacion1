import Pedido from "./pedido.js";

 
function guardar(){
    let imagen= document.getElementById("inp_imagen").value
    let pedidos= document.getElementById("inp_pedidos").value
    let combo= document.getElementById("slt_cat").value
    let precio= document.getElementById("inp_precio").value

    const pedido=new Pedido(pedidos,combo,imagen,precio)
    //ejecutamos 
        pedido.guardar_pedidos()
    
}
document.getElementById("btn_guardar").addEventListener("click",guardar)


function listar(){
    const pedido=new Pedido()
    pedido.obtener_pedido()


}
listar()
function eliminar()
{
    let indice = localStorage.getItem("indice")
    //creamos una instancia
    //para acceder a los metodos y atributos de la clase Pedido
    let pedido = new Pedido()

    //haciendo uso de la instancia 
    //invocamos el metodo eliminar_pedido()
    pedido.eliminar_pedido(indice)
}
//
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar()
{
    //creamos la instancia pedido
    let pedido = new Pedido()
    /*
    y atravez de la instancia accedemos e invocamos
    al metodo actualizar_pedido() existente en archivo pedido.js 
    */
    pedido.actualizar_pedidos()
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)
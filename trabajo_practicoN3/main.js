import Pedido from "./pedido.js";


function guardar() {
    let imagen = document.getElementById("inp_imagen").value
    let pedidos = document.getElementById("inp_pedidos").value
    let combo = document.getElementById("slt_cat").value
    let precio = document.getElementById("inp_precio").value

    const pedido = new Pedido(pedidos, combo, imagen, precio)
    //ejecutamos 
    pedido.guardar_pedidos()

}
document.getElementById("btn_guardar").addEventListener("click", guardar)


function listar() {
    const pedido = new Pedido()
    pedido.obtener_pedido()


}
listar()
function eliminar() {
    let indice = localStorage.getItem("indice")

    let pedido = new Pedido()

    pedido.eliminar_pedido(indice)
}
//
document.getElementById("btn_eliminar").addEventListener("click", eliminar)

function actualizar() {

    let pedido = new Pedido()


    pedido.actualizar_pedido()
}
document.getElementById("btn_actualizar").addEventListener("click", actualizar)
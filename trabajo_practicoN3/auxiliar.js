
function almacenar_indice(indice) {
    localStorage.setItem("indice", indice)
}

function editar(index) {
    let lista_pedidos = JSON.parse(localStorage.getItem("pedidos"))

    document.getElementById("inp_pedidos").value = lista_pedidos[index].pedidos
    document.getElementById("slt_cat").value = lista_pedidos[index].combo
    document.getElementById("inp_imagen").value = lista_pedidos[index].imagen
    document.getElementById("inp_precio").value = lista_pedidos[index].precio


    localStorage.setItem("indice", index)

    document.getElementById("btn_guardar").style.display = "none"
    document.getElementById("btn_actualizar").style.display = "block"

}
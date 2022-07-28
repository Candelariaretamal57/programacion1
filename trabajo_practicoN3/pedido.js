  export default  class Pedido{
constructor(pd,cb,i,p){
   this.pedidos=pd
   this.combo=cb
   this.imagen=i
   this.precio=p
}
guardar_pedidos(){
    let nuevo_pedido={
        pedidos:this.pedidos,
        combo:this.combo,
        imagen:this.imagen,
        precio:this.precio
    }
    if("pedidos" in localStorage){
         let lista_pedidos =   JSON.parse(localStorage.getItem("pedidos"))
         lista_pedidos.push(nuevo_pedido)
         localStorage.setItem("pedidos", JSON.stringify(lista_pedidos))
    }else{
        let lista_pedidos=[]
        lista_pedidos.push(nuevo_pedido)

        localStorage.setItem("pedidos",JSON.stringify(lista_pedidos))

    }
 this.obtener_pedido()
}
obtener_pedido(){

    if("pedidos" in localStorage){ 
        let lista_pedidos=JSON.parse(localStorage.getItem("pedidos"))
        let filas=[]
        lista_pedidos.forEach((element,index) => {
            let fila=`
            <tr>
                <td>${index+1}</td>
                <td>${element.imagen}</td>
                <td>${element.pedido}</td>
                <td>${element.combo}</td>
                <td>${element.precio}</td>
                <td>
                <button oncliletck="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm">
                    <i class="fa fa-trash"></i>  
                </button>
                
                <button  onclick="editar(${index})" class="btn btn-primary btn-sm">
                <i class="fa fa-edit"></i>
                </button>
                </td>
            </tr>`

                  filas.push(fila)
        });
        
    }
        
document.getElementById("t_body").innerHTML=filas.join('')

}
eliminar_pedido(indice)
    {
        let lista_pedidos = JSON.parse( localStorage.getItem("pedidos") )
        lista_pedidos.splice(indice,1)
        localStorage.setItem("pedidos", JSON.stringify(lista_pedidos))
        this.obtener_pedido()
    }
    actualizar_pedido()
    {
        let indice=localStorage.getItem("indice")
        let listado_pedidos= JSON.parse(localStorage.getItem("pedidos"))

        listado_pedidos[indice].imagen= document.getElementById("inp_imagen").value
        listado_pedidos[indice].pedidos= document.getElementById("inp_pedidos").value
        listado_pedidos[indice].combo= document.getElementById("inp_combo").value
        listado_pedidos[indice].precio= document.getElementById("inp_precio").value
        
        localStorage.setItem("pedidos",JSON.stringify(listado_pedidos))

        this.obtener_pedidos()

        document.getElementById("btn_guardar").style.display="block"
        document.getElementById("btn_actualizar").style.display="none"
    }

    vaciar_formulario()
    {
        document.getElementById("form_pedido").reset()
    }
}
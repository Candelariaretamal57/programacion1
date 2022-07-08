  export default  class pedido{
constructor(pd,cb,i,p){
   this.pedido=pd
   this.combo=cb
   this.imagen=i
   this.precio=p
}
guardar_pedido(){
    let nuevo_pedido={
        comida:this.comida,
        combo:this.combo,
        imagen:this.imagen,
        precio:this.precio,
    }
    if("pedidos" in localStorage){
 }else{
    let lista_pedidos=[]
    lista_pedidos.push(nuevo_pedido)

    localStorage.setItem("pedidos",JSON.stringify(lista_pedidos))

 }
 this.obtener_pedido()
}
obtener_pedido(){
let lista_pedidos=JSON.parse(localStorage.getItem("pedidos"))
filas=[]
        lista_pedidos.forEach((element,index) => {
            let fila=`
            <tr>
                <td>${index+1}</td>
                <td>${element.pedido}</td>
                <td>${element.combo}</td>
                <td>${element.imagen}</td>
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
        document.getElementById("t_body").innerHTML=filas.join('')


}

}
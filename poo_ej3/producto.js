export default class Producto{

    constructor(d,pv,c){
        this.descripcion= d
        this.precio_venta= pv
        this.categoria= c

    }
    //metodo
    guardar_producto (){
        //recolectamos todos los productos alojados en el item "prodructos" que estan en notacion JSON.
        //Debemos convertirlo en una expresion nativa de javascript (es decir, hacemos un json.parce()) 
        let nuevo_producto={
            descripcion:this.descripcion,
            precio_venta:this.precio_venta,
            categoria:this.categoria
        }
         if("productos" in localStorage){
            //convertimos el json obtenido desde el storage en una expresion nativa de javascript
            let lista_productos=JSON.parse(localStorage.getItem("productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista_productos))
         }else{
            let lista_productos=[]
            lista_productos.push(nuevo_producto)
            //guardar en el storange
            localStorage.setItem("productos",JSON.stringify(lista_productos))
        }

        //invocamos  nuevamente al metodo obtener_productos()para
        //lograr reconstruir una tabla, y asi reflejar los datos actualizaados 
        //que provienen del localStorage, especificamente del item "productos"
        this.obtener_producto()
    }
    obtener_producto(){
        let lista_productos=JSON.parse(localStorage.getItem("productos"))

         filas=[]
        lista_productos.forEach((element,index) => {
            let fila=`
            <tr>
                <td>${index+1}</td>
                <td>${element.descripcion}</td>
                <td>${element.precio_venta}</td>
                <td>${element.categoria}</td>
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
    eliminar_producto(indice)
    {
        let lista_productos = JSON.parse( localStorage.getItem("productos") )
        lista_productos.splice(indice,1)
        localStorage.setItem("productos", JSON.stringify(lista_productos))
        this.obtener_producto()
    }
    actualizar_producto()
    {
        let indice=localStorage.getItem("indice")
        let listado_productos = JSON.parse(localStorage.getItem("productos"))

        listado_productos[indice].descripcion = document.getElementById("inp_descripcion").value
        listado_productos[indice].precio_venta = document.getElementById("inp_precio_venta").value
        listado_productos[indice].categoria= document.getElementById("inp_categoria").value

        localStorage.setItem("productos",JSON.stringify(listado_productos))

        this.obtener_productos()

        document.getElementById("btn_guardar").style.display="block"
        document.getElementById("btn_actualizar").style.display="none"
    }
    vaciar_formulario()
    {
document.getElementById("form_producto").reset()
    }
}  




 import Star_Wars from "./star_wars.js";

 function ejecutar(){ 

    const star_wars= new Star_Wars()
    star_wars.consumir_api()
   
 }
 document.getElementById("btn").addEventListener("click",ejecutar)
 function listar()
 {
   let producto= new producto()
   producto.obtener_productos()
 }
 listar()



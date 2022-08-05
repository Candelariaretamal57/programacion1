import  Star_Wars from "./Star_wars.js";
  
function ejecutar(){ 

    const star_wars=new Star_wars()
    star_wars.consumir_api()
   
 }
 document.getElementById("btn").addEventListener("click",ejecutar)
 function listar()
 {
   let producto= new Star_wars()
   producto.obtener_productos()
 }
 listar() 




import Trapecio from "./trapecio.js";

function ejecutar (){
    
const base_mayor=document.getElementById("inp_bma").value
const base_menor=document.getElementById("inp_bme").value
const altura=document.getElementById("inp_h").value


//la instancia la puedo guardar en una costante"Trapecio", mediante el uso de la instancia la invocamos y ejecutamos el metodo
//al crear el new trapecio se construye la instancia y  ejecuta constructor
const trapecio= new Trapecio(base_mayor,base_menor,altura)
const respuestas=trapecio.calcular_area_trap()

document.getElementById("resultado").textContent='area trapecio:'+respuestas
}
//el click  ejecuta a la funcio ejecutar
//la funcion ejecutar ejecuta a calcular_area
document.getElementById("btn").addEventListener("click",ejecutar)
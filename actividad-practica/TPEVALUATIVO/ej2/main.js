//esta funcion se enfoca en el calculo
const calcular = (temp) =>{
    let mensaje;

    if(temp >= 14 && temp < 32){
        mensaje ='temperatura Baja'
    }else{
        if(temp>= 32 && temp < 68){
            mensaje ='temperatura adecuada'
        }else{
            if(temp >= 68 && temp <=96) { 
            mensaje ='temperatura alta'
            } else {
            mensaje ='temperatura desconocida'

            }
        }
    }
    //termina la ejecucion de la funcion
    return mensaje

}
//recolecta los datos y los entrega a la funcion calcular
const mostrar = () =>{
    //se encarga de tomar el elemento inp-temperatura ubicado en index
    const temperatura=document.getElementById("inp-temperatura").value
    //aca ejecutamos la funcion
    const resultado = calcular(temperatura)
    document.getElementById("h-resultado").textContent = resultado

}

//ejecuta la funcion del button id
const button = document.getElementById("btn-analizar")
//se encarga que al momento de presionar clik este tome los datos de mostrar
button.addEventListener("click",mostrar)
 function calcular(c)
 {
    const resultado= (c*1.80)+32
    return resultado
 }

 function mostrar()
 {
    const c = document.querySelector("#inp_c").value
    const respuesta =calcular(c)
    document.getElementById("h_resultado").textContent = respuesta
 }
 

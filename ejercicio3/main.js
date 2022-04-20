function calcular(radio)
{
    const resultado = Math.PI*Math.pow(radio,2)
    return resultado
}
function mostrar()
{
    const radio = document.querySelector("#inp_radio").value
    const resultado = calcular(radio)
    document.getElementById("h_resultado").textContent = resultado
}
 


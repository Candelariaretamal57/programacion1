
function calcular(catetoA,catetoB)
{
    const hipotenusa = Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2) )
    //termina la ejecucuion de la funcion 
    return "hipotenusa ="+hipotenusa
}
//recolecta los datos obenidos de la funcion 
function mostrar()
{
    const catetoA = document.getElementById("inp-cateto-A").value 
    const catetoB = document.getElementById("inp-cateto-B").value
    const resultado=calcular(catetoA,catetoB)
    document.getElementById("h-resultado").textContent = resultado
}

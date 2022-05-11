function calcular(catetoA,catetoB)
{
    const hipotenusa  = Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2) )

    //termina la ejecucuion de la funcion 
    return "hipotenusa = "+hipotenusa

}
//recolecta los datos obenidos 
function mostrar()
{
    const catetoA = document.getElementById("inp-catetoA").value 
    const catetoB = document.getElementById("inp-catetoB").value


    const resultado = calcular(catetoA,catetoB)
    document.getElementById("h-resultado").textContent = resultado
}
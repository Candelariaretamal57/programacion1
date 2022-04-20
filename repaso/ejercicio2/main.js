function calcular(a,b,c){
const resultado = parseInt(a)+parseInt(b)+parseInt(c)
const mensaje= (resultado ==180)? ('valido') : ('no valido')
return mensaje
}
const mostrar=()=>{
    const anguloA = document.getElementById("inp_a").value
    const anguloB = document.getElementById("inp_b").value
    const anguloC = document.getElementById("inp_c").value


    const respuesta=calcular(a,b,c)
    document.getElementById("h_resultado").textContent = respuesta
 }

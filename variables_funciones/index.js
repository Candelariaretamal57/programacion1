//funcion clasica 
function mostrar_mensaje() {
    //popup
    alert('probando mi funcion')
}
function mostrar_en_consola(){
    //asignamos una cadena de string en una constante
    const nombre_apellido='Candelaria Retamal'
     
    /* forma 1 - sin template string */
    console.log ('nombre y apellido: '+nombre_apellido+'asdsad')
    //forma 2 - template  string - backtick
    console.log(`nombre y apellido:4{nombre-apellido}
             dni 33258741
            direccion: Neuquen 100
             `)

            
} 
//condicionales
function validar(){
    const calificacion = prompt('ingrese su calificacion:');
    //condicion - forma 1
   /* if(calificacion >=7){ 
    alert('estas aprobado')
}else{
        alert('nos veremos en diciembre!')
    }*/

//exprersion ternario
(calificacion>=7)? alert('estas aprobado') : alert('desaprobado')
    
}

//funcion con retorno y comunicacion entre funciones
function calcular(){
    const number = prompt('ingrese un numero:');
    const resultado = number * 10
    //estamos entregando una respuesta 
    return resultado
}


function visualizar(){
    //invocamos(ejecutamos)
    const respuesta = calcular ()
    alert(respuesta)
}



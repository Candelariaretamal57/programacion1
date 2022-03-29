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
    const calificacion = promt('ingrese su calificacion:')
    const calificacion=4
    if(calificacion >=7){ 
    alert('estas aprobado')}
    else{
        alert('nos veremos en diciembre!')
    }

    
}


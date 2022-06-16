const obtener_usuario= async ()=>{

const usuario = await fetch('https://jsonplaceholder.typicode.com/users')

const usuario_definidos=await usuario.json()

let filas=[]

//forma tradicional
//recorrer los usuarios
usuario_definidos.forEach(element => {
    let fila =
    `<tr>
        <td>${element.name}</td>
        <td>${Element.username}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
    </tr> `
    filas.push(fila)
    
    
});
document.getElementById("").innerHTML=filas.join('')
}
//invocamos la funcion
obtener_usuario()
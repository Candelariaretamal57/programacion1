 async function obtener_datos ()
{
    //fetch realiza una solicitud HTTP a travez del metodo GET
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts')

    const datos_definitivos = datos.json()
    
    datos_definitivos.array.forEach(element => {
        console.log(element.title)
    });

}
export default class Star_Wars{
    constructor(){}

    async consumir_api(){

        const peliculas = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=star wars')
        const datos_obtenidos = await peliculas.json()
        let columnas = []
        
        for(const Element of datos_obtenidos.Search){
           let columna = `
           <div class="card" style="width: 18rem;">
                <img src="${Element.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${Element.Title}</h5>
                    <p class="card-text">años de estreno:${Element.Year} </p>
                </div>
            </div>
           `
           columnas.push(columna)
        }
        document.getElementById("star_row").innerHTML=columnas.join('')
    }
}


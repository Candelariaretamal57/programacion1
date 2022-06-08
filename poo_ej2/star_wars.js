export default class Star_Wars{
    constructor(){}

    async consumir_api(){

        const peliculas = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=star wars')
        const datos_obtenidos = await peliculas.json()
        
        for(const Element of datos_obtenidos.Search){
            console.log(`
            ${Element.imdbID}
            ${Element.Title}
            ${Element.Year}
            ${Element.Poster}
            `)
        }
    }

}

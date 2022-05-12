let alumno={
nombre:'Emanuel',
apellido:'Maldonado',
dni:45612813,
correos:{
    outlook:'em@nuel.com',
    gmail:'em@nuel.com',
    yahoo:'em@nuel.com',
}

}
//forma 1 
//const yahoo =alumno.correos.yahoo
//const gmail=alumno.correos.gmail
//const outlook=alumno.correos.outlook

//forma 2 -Destructuring object
//se crearon tres constante yahoo, gmail, outlook
const { yahoo, gmail, outlook } = alumno.correos

console.log(`
correos:
gmail: ${gmail}
yahoo: ${yahoo}
outlook: ${outlook}
`)


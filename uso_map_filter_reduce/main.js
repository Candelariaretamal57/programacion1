const tareas =[
    {
        //lleva coma porque sigue otro objeto
        //al ultimo obejeto no se le coloca coma

        nombre:'Testeando soft',
        durancion:25
    },
    {
        nombre:'implementacion de alta cliente',
        durancion:90   
    },
    {
        nombre:'actualiza al cliente',
        durancion:40
    },
    {
        nombre:'desploy de soft',
        durancion:120
    },
    {
        nombre:'correccion de bug',
        durancion:180
    }
]
//uso del metodo map()

let nombres = []
tareas.forEach(element => {
  nombres.push(Element.nombre)  
});

//aplicando map()
//mapeo significa recorrer
//map tambien recorre como el foreach
//map siempre me entra un array (arreglo de nombres)
let nombre2=tareas.map(tareas => tareas.nombre
    //return,y llaves se pueden omitir si solo hay una linea de codigo
 
)
//USO DE FILTER
//toma todas las tareas
let tareas_prolongadas=[]
tareas.forEach(element=>{

    if(element.durancion>=120){
        tareas_prolongadas.push(element)
    }
});
    console.log(tareas_prolongadas)
//Filtrar haciendo uso del metodo filter()
//se omitaron las llaves y el return
const tareas_prolongadas2 = tareas.filter(tarea=> tareas.durancion >= 120)
console.log(tareas_prolongadas2)

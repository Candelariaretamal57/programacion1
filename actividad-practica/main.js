let Lenguajes=['Phython','JavaScript','Csharp','C++','Java','PHP','Ruby']


function mostrar() {
    const longitud=Lenguajes.length
   document.getElementById("p_longitud").textContent ='Longitud: '+longitud

   const ultimo=Lenguajes[longitud-1]
   document.getElementById("p_ultimo").textContent='ultimo:'+ultimo

   const tercero=Lenguajes[longitud-2]
   document.getElementById("p_tercero").textContent='tercero:'+tercero
}


function calcular(){
 const b1= prompt('ingrese la b1');
 const b2= prompt('ingrese la b2');
 const h=prompt('ingrese la h');
 const resultado=(( parseInt(b1) + parseInt(b2) )*h) / 2

return resultado
}


function mostrar(){
    const respuesta= calcular()
    alert(respuesta)
}


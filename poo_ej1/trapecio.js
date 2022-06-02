export default class Trapecio {    
    //constructor:es un metodo propio de la clase(forma parte de la clase)
    constructor(bma,bme,h){
        //declaramos
        this.base_mayor=bma
        this.base_menor=bme
        this.altura=h

    }
//creamos un nuevo metodo
    calcular_area_trap(){
        //sabemos que tiene datos numericos por el constructor
       const resultado=((Number(this.base_mayor)+ Number(this.base_menor))/2) *this.altura
       return resultado

    }
}
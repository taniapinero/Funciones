/**
 ACTIVIDAD PROPUESTA 4.1
 Escribe una función que reciba como parámetro un precio y un porcentaje de descuento y devuelva el precio nuevo
 */

 let precioUser=prompt("Indica un precio");
 let porcentaje=prompt("Indica un porcentaje");

 resultado=operacion(precioUser, porcentaje);

 alert(`El resultado es ${resultado}`);


 function operacion(precioUser, porcentaje) {
    let resultado=precioUser*(porcentaje/100);
    return resultado;
    
 }


 /*
 ACTIVIDAD RESUELTA 4.2
 Soluciones de una ecuación de segundo grado
 
 Crea una función que reciba 3 parámetros (a,b,c) y devuelva un array con las soluciones de una ecuación de segundo grado, tras aplicar la famosa fórmula (-b+sqrt(b+-sqrt(b**2)* */

//  let a=prompt("Indica a");
//  let b=prompt("Indica b");
//  let c=prompt("Indica c");

//  let resultado2=ecuacionGrado2(a,b,c);

//  alert(`El resultado es ${resultado2}`);


//  function ecuacionGrado2(a,b,c) {

//     let soluciones=new array();
//     let parcial=b**2 - 4*a*c;

//     if (parcial>0) {
//         soluciones[0]= (-b + Math.sqrt(parcial)) / (2*a);
//         soluciones[1]= (-b - Math.sqrt(parcial)) / (2*a);
//     }
//     return soluciones;
//  }

//Sumar

// function sumar(){
//     let suma=5+9;
//     console.log(suma);
// }

// console.log("Salida 2 de la Función");
// sumar();
// sumar();
// sumar();
// //LLamar a una función dentro de otra función

// function mostrar() {
//     console.log("Estoy dentro de la función Mostrar y llamo a la función sumar");
//     sumar();
// }
// mostrar();


/************/
// let mensaje1="Hola, Cristina";
// let mensaje2="Voy al Médico";

// function mostrarMensaje(texto) {
//     alert(texto)
// }
// mostrarMensaje(mensaje1);{
// console.log(mostrarMensaje(mensaje2));
// }

// mostrarMensaje(mensaje1);
// mostrarMensaje(mensaje2);
// mostrarMensaje(1);

//Pasar parámetros  a una función 

// let numero=prompt("Escribe un número");

// function raizCuadrada(num) {
//     alert(Math.sqrt(num));
// }

// raizCuadrada(numero);

//Valor de Retorno
// let numeroParI=prompt("Indica un número")

// function esPar(num) {
//     if (num%2==0) {
//         return=true;
//     }else{
//         return=false;
//     }
// }





/**
Ejercicio....
Pide 10 veces un número y muestra cada vez si es par o impar
 */

// let contador=0;
// do {
//     let numeroUser=Number(prompt("Indica un número"));
//     esPar(numeroUser);
//     contador++;

// } while (contador<10);


// function esPar(num) {
//     if (num%2==0) {
//         alert("Es par");
//     }else{
//         alert("Es impar");
//     }
// }


/*
* */

var mensaje="Mensaje fuera de la función";

function mostrarMSN() { //Variable global
    console.log(mensaje); // fuera
    var mensaje="Mensaje dentro de la Función"; // Variable local
    console.log(mensaje); //dentro...
}
console.log(mensaje);
mostrarMSN();



var numero1=7;
var numero2=8;

function menor(primero,segundo) {
var elMenor=primero;

if (segundo<primero) {
    elMenor=segundo;
    return elMenor;
}
}
console.log(numero1,numero2);
    

/********************** */

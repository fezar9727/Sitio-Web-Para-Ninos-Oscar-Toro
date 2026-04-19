// camel lower case  sirve para nombrar variables
// DOM (Document Object Model) es una interfaz de programación para documentos HTML y XML. 
// Proporciona una representación estructurada del documento como un árbol de objetos, 
// lo que permite a los desarrolladores manipular el contenido, 
// la estructura y el estilo de una página web de manera dinámica utilizando JavaScript.

const botonHero = document.querySelector('.btn-buy-now');
const hero = document.querySelector('#hero'); // esto es lo mismo que el sgte ejemplo con getElementById, pero con querySelector, 
// el cual es más versátil y permite seleccionar elementos utilizando cualquier selector CSS válido,

// el getElementById sirve para seleccionar un elemento del DOM por su ID y devuelve una referencia a ese elemento.
//  Es una forma rápida y eficiente de acceder a un elemento específico en el documento, siempre y cuando se conozca su ID único.
// const hero = document.getElementById('hero');

const miPrimeraFuncion = (mensaje) => {
    console.log(mensaje);
}

miPrimeraFuncion ('mensaje de la primera llamada');
miPrimeraFuncion ('un nuevo mensaje de la segunda llamada');
 // esto es para llamar a la función y que se ejecute, 
// si no se llama a la función, no se ejecutará y no se mostrará nada en la consola.

// function suma (a, b) {
//     let resultado = a + b;
//     console.log('la suma es: ' + resultado);
//     return resultado; // el return es para devolver un valor desde la función,
// }

// aca otra con fuction pero mas corta 

// // function sumar (a, b) {
// //     return a + b; // el return es para devolver un valor desde la función,
// // }
// // console.log('la suma es: ' + sumar(50, 60)); // esto es para llamar a la función y mostrar el resultado en la consola,


// ahora crearemos lo mismo que antes pero con const

const suma = (a, b) => a + b; // esta es una función de flecha, que es una forma más concisa de escribir funciones en JavaScript.{
    console.log(suma(50, 90));

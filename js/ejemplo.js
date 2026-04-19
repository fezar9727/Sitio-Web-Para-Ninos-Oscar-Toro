// funcion alert hace que aparezca un mensaje emergente en la pantalla del navegador
// alert('el html esta conectado al js');

// funcion console.log hace que aparezca un mensaje en la consola del navegador
// console.log('el html esta conectado al js');

// el tipo de dato string es un texto (cadenas de texto), se escribe entre comillas simples o dobles
let mensaje = 'este es un mensaje'; //IMPORTANTE HASTA let mensaje SE ESTA DECLARANDO LA VARIABLE mensaje, Y  CON = SE LE ESTA ASIGNANDO EL VALOR 'este es un mensaje', QUE ES UN TEXTO (string)
console.log(mensaje);
mensaje = 'este es otro mensaje'; //Y AQUI ESTAMOS REASIGNANDO UN NUEVO VALOR A LA VARIABLE mensaje, QUE ES 'este es otro mensaje', QUE TAMBIEN ES UN TEXTO (string), 
// OJO QUE NO SE ESTA DECLARANDO LA VARIABLE mensaje, SOLO SE LE ESTA ASIGNANDO UN NUEVO VALOR, POR ESO NO SE USA let O const, SOLO SE USA = PARA ASIGNAR EL NUEVO VALOR,
// OJO OTRA VEZ EN CONST NO SE PUEDE REASIGNAR UN NUEVO VALOR, POR ESO DA ERROR SI INTENTAMOS REASIGNAR UN NUEVO VALOR A UNA CONSTANTE, PERO EN ESTE CASO COMO mensaje ES UNA VARIABLE DECLARADA CON let, SI SE PUEDE REASIGNAR UN NUEVO VALOR SIN PROBLEMA

console.log(mensaje);
console.log(typeof mensaje);
// en javascript podemos cambiar el tipo de dato de una variable sin problema
mensaje = 5;
console.log(mensaje);
console.log(typeof mensaje); // el typeof nos muestra el tipo de dato de la variable mensaje, ya sea texto (string) o numero (number)
// en este caso es number porque ahora mensaje es un numero

// otra manera de explicar lo anyterior son los sgtes ejemplos:
console.log(typeof 5); 
console.log('el tipo de dato del numero 5 es: ' + typeof 5); // el operador + se usa para concatenar texto con variables o con otros textos');

// por buenas practicas es mejor guardar cada dato en una variable diferente, por ejemplo:
const numero = 5;
console.log('el tipo de dato del numero 5 es: ' + typeof numero);   // y esto nos dara el mismo resultado que el ejemplo anterior,
// pero es mejor guardar cada dato en una variable diferente para evitar confusiones y errores en el codigo

// otra forma es la sgte: pero la comentaremos ya que no se puede volver a usar la variable numero porque ya esta declarada como const, 
// y con const no se puede cambiar el valor de una constante, por eso da error si intentamos cambiar el valor de numero
// const numero = 5;
// console.log('el tipo de dato del numero ' + numero + ' es: ' + typeof numero); 

const mensaje2 = 'este es un mensaje en const';
// con const no se puede cambiar el valor de una constante, por eso da error si intentamos cambiar el valor de mensaje2
// mensaje2 = 'este es otro mensaje constante'; // esto da error porque no se puede cambiar el valor de una constante
console.log(mensaje2);


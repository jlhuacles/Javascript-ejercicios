var nombre, apellido = "Huacles";
nombre = 'José Luis';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toUpperCase();

var primer = nombre.charAt(0);
var cantidadLetrasNombre = nombre.length;

var nombreCompleto = `${nombre} es el nombre`;


var str = nombre.charAt(1) + nombre.charAt(2);
var str2 = nombre.substr(2, 5); 

console.log('Hola ' + nombreEnMayusculas + ' ' + apellido);
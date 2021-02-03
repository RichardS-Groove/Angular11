//Boolean
let esValido = true;
esValido = false;
//Number
let edad = 12;
//String
let nombre = 'Richard';
let apellido = 'Campos';
let nombre_completo = `${nombre} ${apellido}`;
//Array
let numeros = [12, 2, 3, 4, 5, 6, 7];
let numero2 = [3, 1, 3, 2, 4, 5, 6, 7];
//Tuplan
let sitio = ['Casa', 28008];
//Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = -1] = "Indefinido";
    Estado[Estado["Online"] = 0] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Indefinido;
console.log(stat);
//Unknown
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = true;
let nuevaCadena = 'esto es otra cadena';
// nuevaCadena = sinTipo ; error porque no son del mismo tipo;
//Any
let tipoIndefinido = 'esto es un mensaje';
//nuevaCadena = tipoIndefinido; con el tipo Any si se puede asignar;
//Void
function logger() {
    console.log('Logger');
}

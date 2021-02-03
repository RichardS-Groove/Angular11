/*function sumar(a, b) {
    return a + b;
}*/
const sumar = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
}; // Esta es la forma mas usual de usar.
const sumar3 = function (a, b) {
    return a + b;
};
//Parametros opcionales y valores por defecto
function nombreCompleto(nombre, apellido) {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
console.log(nombreCompleto('RichardS'));
console.log(nombreCompleto('RichardS', 'Campos'));

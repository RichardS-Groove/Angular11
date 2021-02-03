/*function sumar(a, b) {
    return a + b;
}*/

const sumar: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
}

const sumar2 = function (a: number, b: number): number {
    return a + b;
} // Esta es la forma mas usual de usar.

const sumar3: (a: number, b: number) => number = function (a, b) {
    return a + b;
}


//Parametros opcionales y valores por defecto

function nombreCompleto(nombre: string, apellido?: string): string {
    if(apellido) return nombre + " " + apellido;
    else return nombre;
}

console.log(nombreCompleto('RichardS'));
console.log(nombreCompleto('RichardS', 'Campos'));

// Parametros REST y


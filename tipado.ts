//Boolean

let esValido : boolean = true;
esValido = false;

//Number

let edad : number = 12;

//String

let nombre: string = 'Richard';
let apellido : string = 'Campos';

let nombre_completo : string = `${nombre} ${apellido}`;

//Array

let numeros: number[] =[12,2,3,4,5,6,7];

let numero2: Array<number> = [3,1,3,2,4,5,6,7];

//Tuplan

let sitio: [string, number] = ['Casa', 28008];

//Enum

enum Estado {
    Offline,
    Indefinido = -1,
    Online
}


let stat: Estado = Estado.Indefinido;
console.log(stat);

//Unknown

let sinTipo : unknown = 'Hola';
sinTipo = 32;
sinTipo = true;

let nuevaCadena: string = 'esto es otra cadena';
// nuevaCadena = sinTipo ; error porque no son del mismo tipo;


//Any
let tipoIndefinido: any ='esto es un mensaje';
//nuevaCadena = tipoIndefinido; con el tipo Any si se puede asignar;

//Void
function logger(): void {
    console.log('Logger');
}
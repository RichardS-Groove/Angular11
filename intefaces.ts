interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}


function mostrarPersona(pPersona: Persona) {
    console.log(pPersona);
}


mostrarPersona({
    nombre: 'RichardS',
    apellido: 'Campos',
    edad: 28
});


// Propiedades opciónales

interface Coche {
    marca: string;
    modelo: string;
    color ? : string;
}

function mostrarCoche(pcoche: Coche) {
    console.log(`Marca: ${pcoche.marca}. Modelo: ${pcoche.modelo}`);
    if (pcoche.color) {
        console.log(`Color: ${pcoche.color}`);
    } else {
        console.log('El coche no tiene color');
    }
}
mostrarCoche({
    marca: 'Venz',
    modelo: 'GJKD'
}); // Es opciónal el ?
mostrarCoche({
    marca: 'Mercdes',
    modelo: 'LKG',
    color: 'C180'
});


// Propiedades de solo lectura

interface Punto {
    readonly x: number;
    readonly y: number;
}

let p1: Punto = {
    x: 232,
    y: 84
};

//p1.x = 45;

// Definir una función del
interface Busqueda {
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b: string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(miBusqueda('Hola', 'ola'));

// Interfaz en una clase

interface Humano {
    nombre: string;
    edad: number;
}

class Adulto implements Humano {
    nombre: string;
    edad: number;
    coche: boolean;

    constructor(pNombre: string, pEdad: number, pCoche: boolean){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}

class Nino implements Humano {
    nombre: string;
    edad: number;
    colegio: string;


    constructor(pNombre: string, pEdad: number, pcolegio: string){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.colegio = pcolegio;
    }
}
function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({
    nombre: 'RichardS',
    apellido: 'Campos',
    edad: 28
});
function mostrarCoche(pcoche) {
    console.log(`Marca: ${pcoche.marca}. Modelo: ${pcoche.modelo}`);
    if (pcoche.color) {
        console.log(`Color: ${pcoche.color}`);
    }
    else {
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
let p1 = {
    x: 232,
    y: 84
};
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('Hola', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}
class Nino {
    constructor(pNombre, pEdad, pcolegio) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.colegio = pcolegio;
    }
}

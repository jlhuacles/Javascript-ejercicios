var joseluis = {
    nombre: 'José Luis',
    apellido: 'Huacles',
    edad: 25,
    periodista: true,
    cocinero: false,
    cantante: false,
    guitarrista: false,
    player: true,
    ingeniero: true
}

const MAYORIA_DE_EDAD = 18;

var manuel ={
    nombre: 'José Manuel',
    edad : 12
}


function esMayorDeEdad(persona){
    return persona.edad>=mayoriaDeEdad;
}


function imprimirMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}
imprimirMayorDeEdad(joseluis);
imprimirMayorDeEdad(manuel);
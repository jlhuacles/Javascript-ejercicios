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

function imprimirProfesiones(persona){
    console.log(`${persona.nombre}: `)
    if (persona.ingeniero){
        console.log('Es Ingeniero');
    } else{
        console.log('No es Ingeniero');
    }
    if (persona.cocinero === true){
        console.log('Cocinero');
    } else{
        console.log('No es cocinero');
    }
}

imprimirProfesiones(joseluis);
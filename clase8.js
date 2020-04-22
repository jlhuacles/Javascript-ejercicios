var joseluis = {
    nombre: 'José Luis',
    apellidos: 'Huacles Unocc',
    edad: 27
}


var carlos = {
    nombre: 'Carlos',
    apellidos: 'Huacles Unocc',
    edad: 25
}

var manule = {
    nombre = 'Manuel',
    apellidos = 'Ramos Sanchez',
    edad: 24
}

function imprimirNombre(persona){
    var {nombre} = persona;
    //Desestructuración de objetos
    console.log(nombre.toUpperCase());
}

imprimirNombre(joseluis);
imprimirNombre(carlos);
imprimirNombre({nombre: 'Jorge asdd'});

function cumpleanhos(persona){
    //persona.edad  += 1
    return{
        ...persona,
        edad: persona.edad + 1
    }
}
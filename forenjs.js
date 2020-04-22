var joseluis = {
    nombre: 'José Luis',
    edad: 27,
    profesion: 'Programador',
    peso: 75
}


console.log(`Al inicio del año ${joseluis.nombre} pesaba ${joseluis.peso} kilogramos`);

const aumentarDePeso = (persona) => persona.peso += 0.200;

const adelgazar = persona => persona.peso -=0.200;




for(let i = 1; i <= 365 ; i++){
    let random = Math.random()

    if (random <0.25){
        aumentarDePeso(joseluis);
    } else if(random<0.5) {
        adelgazar(joseluis);
    }

}

console.log(`Al final del año ${joseluis.nombre} pesaba ${joseluis.peso.toFixed(2)} kilogramos`);
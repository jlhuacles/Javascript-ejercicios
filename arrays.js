var manuel ={
    nombre: 'José Manuel',
    edad : 12,
    altura: 2.10
} 

var joseluis = {
    nombre: 'José Luis',
    apellido: 'Huacles',
    edad: 25,
    periodista: true,
    cocinero: false,
    cantante: false,
    guitarrista: false,
    player: true,
    ingeniero: true,
    altura: 1.66
}

var daniela ={
    nombre: 'Daniela',
    apellido: 'Huacles',
    edad: 32,
    altura: 1.40
}

var rocio = {
    nombre = 'Rocio',
    apellido = 'Romero',
    edad: 29,
    altura: 2.00
}
var maritza = {
    nombre = 'Maritza',
    apellido = 'Sinti',
    edad = 26,
    altura: 1.50
}
var janeth ={
    nombre = 'Jane',
    apellido = 'Cienfuegos',
    edad = 29,
    altura = 1.40
}


familia = [manuel, joseluis, daniela];
exs = [rocio, maritza, janeth];
for(var i = 0; i < familia.length; i++){
    document.write(familia[i]['nombre'] + '<br>');
}

for (var i = 0; i< exs.length; i++){
    document.write(exs[i]['nombre'] + '<br>');
}



for (var i = 1; i<exs.legth; i++){
    document.write(exs[1]['apellido'] + '<br>');
}




const esAlta = ({altura}) => altura > 1.5;


var personasAltas = familia.filter(esAlta);

// var personasAltas = familia.filter(function(familiar){
//     return familiar.altura > 1.50;
// })


const pasaAlturaACms = familia => ({
    // familia.altura *=100;
    // return familia; queremos retornar un nuevo objeto con la altura modificada
    
        ...familia,
        altura: familia.altura *100
    

})

var personasEnCms = familia.map(pasaAlturaACms)

var personasBajas = familia.filter(function(familiar){
    return familiar.altura < 1.50
})


// var acum = 0;

// for (var i = 0; i < familia.length; i++){
//     acum = acum + familia[i].edad;
// }

const reducter = (acum, familia) =>{
    return acum + familia.edad;
}

var totalDeLibros  = familia.reduce(reducter, 0)




console.log(totalDeLibros);


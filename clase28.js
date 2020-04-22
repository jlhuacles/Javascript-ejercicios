const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';



const OPC_DOMAIN = {crossDomain: true};


function obtenerPersonaje(id){
    return new Promise((resolve, reject) =>{
    const URL = `${API_URL}${POKEMON_URL.replace(':id',id)}`;
    $.get(URL,OPC_DOMAIN, function(data){
        resolve(data);
    })
    .fail(()=>reject(id));
    })
    
}

function onError(id){
    console.log(`Sucedió un error al obtener un personaje ${id}`);
}

obtenerPersonaje(1)
    .then(personaje1 =>{
        console.log(`El personaje 1 es ${personaje1.name}`);
        return obtenerPersonaje(2);
    })
    .then(personaje2 =>{
        console.log(`El personaje 2 es ${personaje2.name}`);
        return obtenerPersonaje(3);
    })
    .then(personaje3 =>{
        console.log(`El personaje 3 es ${personaje3.name}`);
        return obtenerPersonaje(4);
    })
    .catch(onError)
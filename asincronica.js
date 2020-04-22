
class Persona{
    constructor(nombre,apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura= altura;
    }

    saludar(fn){
        var {nombre, apellido} = this;
        // var nombre = this.nombre;
        // var apellido = this.apellido;
        console.log(`hola me llamo ${nombre} ${apellido}`);
        if(fn){
            fn(nombre, apellido)
        }
    }

    medialtura(){
        

        if (this.altura > 1.60){
            console.log('Soy alta(o)');
         }else{
            console.log('No soy alta(o)');
        }
        
        
    }
}


class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido, altura); 
    }

    saludar(fn){
        var {nombre, apellido} = this;
        console.log('Soy desarrollador(a)');
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`No sabía que eras desarrollador`);
    }
}


var jl = new Persona('José Luis', 'Huacles', 1.99);
var dani = new Desarrollador('Daniela', 'Huacles', 1.44);

jl.saludar(responderSaludo);
dani.saludar(responderSaludo);
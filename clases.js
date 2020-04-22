function heredaDe(hijo, padre){
    var fn = function(){

    }
    fn.prototype = padre.prototype;
    hijo.prototype = new fn;
    hijo.prototype.constructor = hijo;
}



function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura= altura;
}


Persona.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.mediraltura = function(){

    if (this.altura > 1.60){
        console.log('Soy alta(o)');
    }else{
        console.log('No soy alta(o)');
    }
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
heredaDe(Desarrollador, Persona);
Desarrollador.prototype.saludar = function(){
    console.log(`Hola soy desarrollador(a) me llamo ${this.nombre} ${this.apellido}`);
}



var jl = new Persona('José Luis','Huacles', 2.00);
// var dani = new Persona('Daniela', 'Huacles', 1.50);
// dani.saludar();
// jl.saludar();
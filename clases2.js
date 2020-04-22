
class Persona{
    constructor(nombre,apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura= altura;
    }

    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
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
    constructor(nombre, apellido){
        super(nombre,apellido); 
    }

    saludar(){
        console.log('Soy desarrollador(a)');
    }
}

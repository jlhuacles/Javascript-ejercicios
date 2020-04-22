function persona(nombre, apellidos, edad){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
}

var jose = new persona('José Luis','Huacles Unocc', 25);
var dario = new persona('Dario', 'Restrepo', 22);
var maria = new persona('Maria','López',34);

function imprimirNombreYEdad(persona){
    var {nombre} = persona;
    var {edad} = persona;
    var {apellidos} = persona;
    alert(`${nombre} ${apellidos} tiene ${edad} años`);
}


imprimirNombreYEdad(jose);
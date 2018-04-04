
//Objetos literales
//Los objetos literales son una forma rápida de crear un objeto:

var Persona = function(nombre, apellido) {
this.nombre = nombre;
this.apellido = apellido;
this.saluda = function(nombre2){
console.log("hola" + nombre2 + "soy" + this.nombre);

}

};

var p1 = new Persona ("Axel")
console.log(p1.saluda("miguel"))

//
//the following does the same
var p2 = {
  "nombre": "Pedro",
  "apellido": "Perez",
  saluda: function() {
   return "Hola " + this.nombre
 }

};

console.log(persona2.saluda);
console.log(Persona)

// function constructora
//Una función constructora es una función normal que define las propiedades utilizando this.nombrePropiedad.

//Lo que diferencia a una función constructora es la forma en que se invoca.
//A partir de una función constructora podemos crear varios objetos:

// var Persona = function(nombre, apellido) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//
// }
//
//
// var pedro = new Persona("Pedro", "Perez");
// var juan = new Persona("Juan", "Gomez");

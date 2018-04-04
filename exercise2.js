//Haga una funcion constructora Car
// que tenga las properidades, marca, modelo, cilindraje, permita
// accelerar a una tasa de 0.3% de sus cc
//y frenar a una tasa de 0.35% de sus cc

// y una funcion que recibiendo dos objetos tipo carro
//permita decir cual de los 2 va mas rapido




var Car = function(marca, modelo, cc) {
  this.marca = marca;
  this.modelo = modelo;
  this.cilindraje = cc;
  this.velocidad = 0;

      this.accelerar = function() {

        this.velocidad +=  this.cilindraje*0.003;
      };

      this.frenar = function() {

      this.velocidad =- this.cilindraje*0.035;
      };
}



function Comparacion(c1,c2) {

    if (carro1 < carro2) {
    return ("carro1 is faster"); }

    else {
    return ("carro2 is faster");}

};


Car.prototype.temperatura = function() {
  this.temperatura = Math.floor((Math.random() * 100) +1);
  return "the temperature is " + this.temperatura;
};

var carro1 = new Car("VV",1989, 120, 130);
var carro2 = new Car("BMW",2002, 150, 200);
carro1.accelerar()

console.log(carro1.velocidad);
console.log(carro1.frenar());
console.log(carro1.marca);
console.log(carro1.modelo);

console.log(carro2.accelerar());
console.log(carro2.frenar());
console.log(carro2.marca);
console.log(carro2.modelo);

console.log(carro1.temperatura())
console.log(Comparacion(carro1.velocidad, carro2.velocidad));



// Herencia => Bus esta herrea de Car
var Bus = function(marca, modelo, cc, capacidad) {

Car.call(this, marca, modelo, cc);
this.capacidad = capacidad;

};

Bus.prototype = new Car();
b1 = new Bus("Chrysler", 2010, 300, 110)

console.log(b1.modelo);



//Escriba und funcion de JS que acepte una cadena
//como parametro y encuentre la palabra mas largo dentro de la cadena

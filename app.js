console.log("Hola Mundo!");
console.log('Y \'él dijo\': "Hola mundo"');


console.log(1 + 2)
console.log(3 * 4 + 5)
console.log(8 / 2)



function hello(name) {
console.log("Wassuuuuup" + name );
}

hello("Tom")

// function hello(name) {
//   console.log("Hello" + " " + name );
//
//
// hello("Axel")




function hello(name) {
  return "Hola " + name;
}

var g1 = hello("Axel"); // podemos asignar el valor de retorno a una variable
console.log(g1);

// podemos llamar la función directamente en el parámetro de otra función.
console.log(hello("David"));



  console.log("Esto nunca se va a imprimir");
}

console.log(hello("Pedro"));


//structure
function <name>([arg1], [arg2], ...) {
  // cuerpo de la función
  return <valor de retorno>;
}

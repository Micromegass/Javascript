// Hola Maker,
//
// Tu misión en este reto es crear una función llamada sumame que recibe un
// arreglo de números y debe retornar la suma de esos números.
//
// Ejemplos
//
// sumame([1,2,3,4]) => 10
// sumame([3]) => 3
// sumame([]) => 0
//


const reducer = (x, y) => x + y;

function sumame(array) {
console.log(array.reduce(reducer)) ;
}

sumame([1,2,10])


function sumame(arr) {
  var suma = 0;
  for (var i=0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}
Otra solución más funcional es la siguiente:

function sumame(arr) {
  return arr.reduce(function(memo, i) {
    return memo + i;
  }, 0);
}

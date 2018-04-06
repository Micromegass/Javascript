//my solution
function promediame(array) {
var total = 0;

if (array.length < 1){
  console.log(0);
}

else {
  for (i=0; i < array.length; i++) {
  total += array[i];}
  console.log(total/array.length);


}
}

promediame([1])


//
// Nuestra solución es la siguiente (reutilizando la función sumame del reto anterior):
//
// function sumame(arr) {
//   return arr.reduce(function(memo, i) {
//     return memo + i;
//   }, 0);
// }
//
// function promediame(arr) {
//   if (arr.length == 0) {
//     return 0;
//   }
//   return sumame(arr) / arr.length;
// }



function is_even_function(number) {

if (number == 0) {
  number = Math.abs(number);
}

if (number ===0) {

return true

}


if (number ===1){

return false
}

else {
number = number -2 ;
return is_even_recursion(number);

}

}

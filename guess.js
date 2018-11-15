

function guess_number() {

  var num = prompt("guess the secret number that I have in mind. Enter a number");
  var num = parseInt(num)
  document.getElementById("guess").innerHTML;

    if (num >= 5 || num < 4 ){
     alert("nope try again");
     return guess_number();

   }

   else if (isNaN(num)) {
     alert("That is not a number you idiot. Enter a number. Like 1,2,3...");
     return guess_number();

   }

    else {

      alert("You got it!! Awesome");

    }
}

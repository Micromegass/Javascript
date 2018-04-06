var person = "Axel"

function say_to(first, second) {

  return first + person + second ;
}

//console.log(say_to("hi", "how are you "));


//console.log(say_to.call(person, "hi", "how are you"));


//call and apply return a value
// bind returns a function

//console.log(say_to.bind(person));

var say_to_Owen = say_to.bind(person);

console.log(say_to_Owen("hi", "from second function"));

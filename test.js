// function template(string, object) {


//   var array = string.split(',');
//   console.log(array);

//   var regex = /\[(.*?)\]/;
//   console.log(string.replace(regex, object.key));


// }





function template(string, properties) {
   
  if ((string.indexOf('[') > 1) && (Object.keys(properties).length == 0)) {

    console.log("Hola undefined");
  }

  else if (Object.keys(properties).length == 0) {

    console.log("Hola mundo");

  } else {
 
    var result = string;
  for (i in properties) {
   var reg = new RegExp(/\[(.*?)\]/);
   result = result.replace(reg, properties[i]);
 }
 console.log(result);

  }


 
}

template("Hola [nombre]", {}); //=> "Hola undefined"
template("Hola mundo", {}) // => "Hola mundo"


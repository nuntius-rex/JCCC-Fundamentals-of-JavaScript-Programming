
var name=prompt("What is your name?");
var askWeather=prompt("What is the weather like?");

switch (askWeather) {
  case "rainy":
      //Do something
      //console.log("rainy works: message just for developer");
      alert("Remember your umbrella "+name+"!");
    break;
  case "sunny":
      //Do something
      alert("Dress lightly and drink water "+name+"!");
    break;
  case "cloudy":
      alert("Take a nap "+name+"!");
      break;
  default:
    //Default do something
    //If none of the cases test true, this will be executed
    alert("I'm sorry "+name+", I don't know that weather type.");
}

//-------------------------------------------------
//The above is the equivalent of the following:
//-------------------------------------------------
if(askWeather=="rainy"){
  //Do Something
}else if(askWeather=="sunny"){
  //Do Something
}else if(askWeather=="cloudy"){
  //Do Something
}else{
  //Do Something (default)
}

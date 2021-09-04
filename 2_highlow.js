
//EXAMPLE OF IF STRUCTURES
//Taking in user input, evaluating, and displaying output


//Hi-Low First Version:
var num=5;
var msg="HIGH-LOW: Guess a number between 1 and 10!";
var userGuess=prompt(msg);

if(userGuess==num){
  alert("You Guessed it!");
}

//Hi-Low v2:
/*
Developer Notes:
 - Still need random number
 - Still need scoring of high/low/correct guess
 - Fix multiple entry spaces in validation
*/
var num=Math.floor(  (Math.random() * 10) +1 ) ;
var msg="HIGH-LOW: Guess a number between 1 and 10!";
var userGuess=prompt(msg);

//User entry validation:
if( isNaN(userGuess) || userGuess==""){

  alert("Sorry, you did not enter a valid number!");

}else if(userGuess>num){

  alert("Too high!");

}else if(userGuess<num){

  alert("Too low!");

}else if(userGuess==num){

  alert("Awesome! That's the number!");

}

//Hi-Low v3:
//Alternate way of testing the score:
var num= Math.floor(  (Math.random() * 10) +1 );
var msg="HIGH-LOW: Guess a number between 1 and 10!";
var userGuess=prompt(msg);

if( isNaN(userGuess) || userGuess==""){
  alert("Sorry, you did not enter a valid number!");
}else{
  if(userGuess>num){
    alert("Too high!");
  }
  if(userGuess<num){
    alert("Too low!");
  }
  if(userGuess==num){
    alert("Awesome! That's the number!");
  }
}


//Hi-Low v4: With DO WHILE

//Keep the random number persistent:
var num=Math.floor(  (Math.random() * 10) +1 );

do{
    //Do this, until the while is true!:
    var msg="HIGH-LOW: Guess a number between 1 and 10!";
    var userGuess=prompt(msg);

    if( isNaN(userGuess) || userGuess==""){
      alert("Sorry, you did not enter a valid number!");
    }else{
      if(userGuess>num){
        alert("Too high!");
      }
      if(userGuess<num){
        alert("Too low!");
      }
      if(userGuess==num){
        alert("Awesome! That's the number!");
      }
    }

}while(userGuess!=num) //While test: If true, will exit the "do while" loop.

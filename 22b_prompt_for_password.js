
/*
//-------------------------------------------------
// WARNING THIS EXAMPLE IS NOT FOR REAL WORLD USAGE
// USERS CAN VIEW THE SOURCE AND SEE THE PASSWORD
//-------------------------------------------------

INPUT: Ask the user for a password
      prompt()
     - system input: system knows the password
     var

EVALUATE: Test if the user entered the right password
     if

OUPUT: Tell user they passed or failed
      alert

*/


var password="123abc";
var userPass=prompt("Please enter your password:");

if(userPass==password){
  alert("Welcome!");
}else{
  alert("Sorry your password was incorrect!");
}


//===============================
// Continuous Promting Versions
//===============================

var password="123abc";
var i=0;
var msg="Please enter your password:";
var error_msg="Sorry your password was incorrect! Please try again!";
var def_msg="";
do{
  if(i>0){
    def_msg=error_msg;
  }else{
    def_msg=msg;
  }
  var userPass=prompt(def_msg);

  i++;
}while(
    userPass!=password &&
    userPass!=null
  )

if(userPass==password){
  alert("Welcome!");
}

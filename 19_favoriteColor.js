/*


1.) INPUT: Ask the user, "What's your favorite color?"
    - also need input from the system

    optional #1, "Guess my favorite color!"

2.) EVALUATE: Test to see if the color is the system's favorite color?
  - Use if to evaluate.

3.) Output a message.
  - Cool color, my favorite color is X.
  - AWESOME! That's my favorite color too!

*/

//----------------------------
// Simple Version:
//----------------------------

var userColor=prompt("What's your favorite color?");
var sysColor="blue";

if(userColor==sysColor){
  console.log("AWESOME! That's my favorite color too! I love "+sysColor+"!");
}else{
  console.log("Great color! My favorite color is "+sysColor+"!");
}


//----------------------------
// Array Version:
//----------------------------
var colorArray=["red","green","blue","yellow"];
var userColor=prompt("What's your favorite color?");
randNum=getRandomNum(colorArray.length);
var sysColor=colorArray[randNum];

if(userColor==sysColor){
  console.log("AWESOME! That's my favorite color too! I love "+sysColor+"!");
}else{
  console.log("Great color! My favorite color is "+sysColor+"!");
}

function getRandomNum(num){
  return Math.floor(  (Math.random() * Math.floor(num) +1 ) );
}


//----------------------------
// Array Version: Bug them!!!
//----------------------------
var colorArray=["red","green","blue","yellow"];
for (var i = 0; i < colorArray.length; i++) {
  var userConfirm=confirm("What's your favorite color? Is it "+colorArray[i]+"?");
  if(userConfirm==true){
    alert("Yeah!!!! I got it!");
    break;
  }
}













.

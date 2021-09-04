
/*
=======================
COIN FLIP
=======================

Input: Ask the user "Heads or Tails?"
 - use prompt()
 - system flips coin
    > array that represents the coin
    > random number

Evaluation: Compare user input with system coin flip
 - use if()
   > compare entry of the user (string)
   > against the array value


Output: Tell the user if they guessed correctly:
- console.log() or alert()
 > string output of the text you decide

*/


//System Coin:
var coinSides=["heads","tails"]; //represents the side of the coins
console.log(coinSides);

//Random number tool:
function getRandomNum(num){
  return Math.floor(  (Math.random() * Math.floor(num) ) );
}

//System Coin Flip Number:
var pcNum=getRandomNum(2);
console.log(pcNum);

//System Coin Flip Side:
var coinSide=coinSides[pcNum];
console.log(coinSide);

//Prompt User for input
var userChoice=prompt("Heads or Tails?");

//Check user input
if(userChoice==coinSide){
  //Output:
  console.log("Good Guess! It was "+coinSide);
}else{
  //Output:
  console.log("Sorry! It was "+coinSide);
}



/*
ROCK PAPER SCISSORS:

RULES:
Rock beat (crushes) scissors
Scissors beats (cutting) paper
Paper beats (covers) rock

made with hand: "sign or gesture"


Inputs:
1.) Ask user, "Rock Paper or Scissors?"
 > Use prompt
2.) System picks rock, paper or scissors:
 > create an "rock paper scissor" array.
 > get a random number (limit is the length of the array)
 > have the system get one of the items from the array randomly
    --- Rock paper or scissors
*/


//1.)
var userGesture=prompt("Rock, Paper or Scissors?");
console.log("User:"+userGesture);

//2.)
var guestures=["rock","paper","scissors"];
randNum=getRandomNum(guestures.length);
var pcGesture=guestures[randNum];
console.log("PC Guess: "+pcGesture);

function getRandomNum(limit){
  return Math.floor(  (Math.random() * Math.floor(limit) ) );
}



//Evaluate= Test or score
if(userGesture==pcGesture){
  console.log("Tie!");
}
/*
1.) According to the rules, find out who wins.
  -if user guesses rock
      test if computer paper, paper wins
      otherwise, rock wins
*/
  if(userGesture=="rock"){
     if(pcGesture=="paper"){
       console.log("Computer wins! Paper!!!");
     }else{
       console.log("You win! Rock!!!");
     }
  }


/*
  -if user guess paper
      test if computer is scissors, scissors wins
      otherwise, paper wins
*/
  if(userGesture=="paper"){
     if(pcGesture=="scissors"){
       console.log("Computer wins! Scissors!!!");
     }else{
       console.log("You win! Paper!!!");
     }
  }

/*
  -if user guesses scissors
     test if computer has rock, rock wins
     otherwise scissors wins
*/

  if(userGesture=="scissors"){
     if(pcGesture=="rock"){
       console.log("Computer wins! Rock!!!");
     }else{
       console.log("You win! Scissors!!!");
     }
  }


/*
Ouput:
    Show winner, result of scoring
    SEE INSIDE IF STATEMENTS
*/


//---------------------------------------------
//All Code, no comments:
//---------------------------------------------

var userGesture=prompt("Rock, Paper or Scissors?");
console.log("User:"+userGesture);

var guestures=["rock","paper","scissors"];
randNum=getRandomNum(guestures.length);
var pcGesture=guestures[randNum];
console.log("PC Guess: "+pcGesture);

function getRandomNum(limit){
    return Math.floor(  (Math.random() * Math.floor(limit) ) );
}

if(userGesture==pcGesture){
    console.log("Tie!");
}else{
    if(userGesture=="rock"){
       if(pcGesture=="paper"){
         console.log("Computer wins! Paper!!!");
       }else{
         console.log("You win! Rock!!!");
       }
    }

    if(userGesture=="paper"){
       if(pcGesture=="scissors"){
         console.log("Computer wins! Scissors!!!");
       }else{
         console.log("You win! Paper!!!");
       }
    }

    if(userGesture=="scissors"){
       if(pcGesture=="rock"){
         console.log("Computer wins! Rock!!!");
       }else{
         console.log("You win! Scissors!!!");
       }
    }

}//End Else


//----------------------------------------------------
///ALERT VERSION:
//----------------------------------------------------

var userGesture=prompt("Rock, Paper or Scissors?");
console.log("User:"+userGesture);

var guestures=["rock","paper","scissors"];
randNum=getRandomNum(guestures.length);
var pcGesture=guestures[randNum];
console.log("PC Guess: "+pcGesture);

function getRandomNum(limit){
  return Math.floor(  (Math.random() * Math.floor(limit) ) );
}

if(userGesture==pcGesture){
  alert("Tie!");
}else{


    if(userGesture=="rock"){
       if(pcGesture=="paper"){
         alert("Computer wins! Paper!!!");
       }else{
         alert("You win! Rock!!!");
       }
    }

    if(userGesture=="paper"){
       if(pcGesture=="scissors"){
         alert("Computer wins! Scissors!!!");
       }else{
         alert("You win! Paper!!!");
       }
    }

    if(userGesture=="scissors"){
       if(pcGesture=="rock"){
        alert("Computer wins! Rock!!!");
       }else{
         alert("You win! Scissors!!!");
       }
    }

 }


 //----------------------------------------------------
 ///VALIDATE VERSION:
 //----------------------------------------------------
 var guestures=["rock","paper","scissors"];
 var i=0;
 var msg="Rock, Paper or Scissors?";
 var fail_msg=" Sorry, try again! "
 var usage_mesage="";

  do{

    if(i>0){
      usage_mesage=fail_msg+msg;
    }else{
      usage_mesage=msg;
    }
    var userGesture=prompt(usage_mesage).toLowerCase();
    i++;

  }while(
     userGesture!="rock" &&
     userGesture!="paper" &&
     userGesture!="scissors"
  )


console.log("User:"+userGesture);


 randNum=getRandomNum(guestures.length);
 var pcGesture=guestures[randNum];
 console.log("PC Guess: "+pcGesture);

 function getRandomNum(limit){
   return Math.floor(  (Math.random() * Math.floor(limit) ) );
 }

 if(userGesture==pcGesture){
   alert("Tie!");
 }else{


     if(userGesture=="rock"){
        if(pcGesture=="paper"){
          alert("Computer wins! Paper!!!");
        }else{
          alert("You win! Rock!!!");
        }
     }

     if(userGesture=="paper"){
        if(pcGesture=="scissors"){
          alert("Computer wins! Scissors!!!");
        }else{
          alert("You win! Paper!!!");
        }
     }

     if(userGesture=="scissors"){
        if(pcGesture=="rock"){
         alert("Computer wins! Rock!!!");
        }else{
          alert("You win! Scissors!!!");
        }
     }

  }

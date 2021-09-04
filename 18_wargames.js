
/*
"Shall we play a game?"
hint: Prompt

Input: Ask the user "Shall we play a game? [game1, game2, game3, thermonuclear war ] "
(More advanced: do two questions to denote a dialogue between the user and system)

Evaluation:
 - did the user enter one of the games the system knows about or not?

hint: switch statement

Output:
- display a message if the user enters a game type
- display a default message if they don't use a game it knows
hint: console.log or alert

*/

//Version 1:
var question=prompt("Shall we play a game? [dice, jello-toss, thermonuclear war]");
  switch (question) {
    case "thermonuclear war":
        console.log("Intiating...BOOM!");
      break;
    case "jello-toss":
        console.log("Squishy squish!");
      break;
    case "dice":
        console.log("Rolling the dice...");
      break;
    default:
      console.log("Sorry, I don't know that game!");
  }



//Version 2:
var question=prompt("Shall we play a game?");
if(question=="no"){
  console.log("Maybe next time. Goodbye!");
}else if(question=="yes"){
  var game=prompt("Great! What game would you like to play? [dice, jello-toss, thermonuclear war]")
  switch (game) {
    case "thermonuclear war":
        console.log("Intiating...BOOM!");
      break;
    case "jello-toss":
        console.log("Squishy squish!");
      break;
    case "dice":
        console.log("Rolling the dice...");
      break;
    default:
      console.log("Sorry, I don't know that game!");
  }
}else{
      console.log("Huh?");
}


//Example of variable:
var num=10;
console.log(num);

//Concatination:
var num=10;
console.log("The vaue is: "+num);          //string and variable
console.log("The vaue is: "+num+num);      //string and two variables (continues Concatination)
console.log("The vaue is: "+ (num+num) );  //string and parenthesis, does math on the variables then cocatinates.

//String Concatination
var mood="happy";
mood="sad"; //reassignment
console.log(typeof mood); //JavaScript automatically detected the variable as a string
console.log("I am very "+mood+"!");

//Confirm:
var confirm=confirm("Do you want to self destruct?");
console.log(confirm);

//Prompt:
var name=prompt("What is your name?");
console.log(name);


//If Logic
var confirm=confirm("Do you want this message to self destruct?");
if(confirm==true){
   console.log("Boom!");
}else{
   console.log("Whew!");
}

//If logic with alerts:
var confirm=confirm("Do you want this message to self destruct?");
if(confirm==true){
   alert("Boom!");
}else{
   alert("Whew!");
}

//Prompt with variable parameters:
var question="What do you want?";
var message="Put your answer here";

var prompt=prompt(question, message);
console.log(prompt);
alert(prompt);


//------------------------------------------
// Other declartion types:
// const : Constant, does not change
// let : forces to keep scope
//------------------------------------------

//Example of Const:
const test=1;
test=2;//Will fail, because you cannot reset a constant


//Example of let:
let x=1;

if(x===1){
	let x=2;
	console.log(x);
}
console.log(x);


//--------------------------------
//While Loop:
//--------------------------------
var num=0;
while(num<4){
  //do something
  num++; //VERY IMPORTANT!!!!
  console.log("The number is now at "+num);
}

//--------------------------------
//Do while:
//--------------------------------
do{
  var name=prompt("Who are you?");
}while(name!="Dan")

//--------------------------------
//For Loop:
//TERMS:
// interation: looping
// interator: variable counting the interation/loop
//            occassionally the program doing the iteraction can be referred to as an iterator
// increment: add to the numeric value of the interation/loop

// FOR LOOP:
//Takes 3 expressions:
// var i=0; assignment of iternator
// i<=10; set the limit of the loop
// i++ increment the iterator
//--------------------------------
for(var i=0; i<=10; i++){
  //Do something
  console.log("i is equal to "+i);
  //Can test i every iteration and do something I want:
  if(i==10){
  	console.log("Excellent, you can count to 10!");
  }
}
//--------------------------------
//For Loop - Countdown example:
//--------------------------------
for(i=10; i>0; i--){
  console.log("The Countdown is "+i);
  if(i==1){
    console.log("Launch!");
  }
}

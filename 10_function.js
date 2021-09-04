
//Declaring a Function:
function test(){
  //Do something
}
//Executing the function:
test();

//------------------------------
//EXAMPLE:
//------------------------------
function test(item){
  //Do something
  console.log("This is a "+item);
}

var x="Alternate Test";
test(x);
test("Test");

//------------------------------

function hammer(target){
  console.log("I am hammering a "+target);
}

hammer("nail");
hammer("cell phone");

//------------------------------

const hammer=function(target){
    console.log("I am hammering a "+target);
}
hammer("nail");


//------------------------------
// Advanced: Passing a function:
//------------------------------

function toolbox(item,use, on){
  //console.log(item);
  if(use=="yes"){
    item(on);
  }else{
    console.log("Thanks for the item!");
  }

}

var hammer=function(target){
    console.log("I am hammering a "+target);
}

toolbox(hammer,"no","nail");

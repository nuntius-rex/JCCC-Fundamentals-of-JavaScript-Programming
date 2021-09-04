

var test=1;
function testScope(){
  //test=2;//assigns the previous variable to 2.
  var test=2; //sets this to a new variable called test
  console.log(test); //outputs 2

  var other_test="cool";
  console.log(other_test);
  /*This works, because it is in the same scope*/
}
testScope();
console.log(test); //Will output 1 if the variable is not reset
                   //Will output 2 if the variable is rest

console.log(other_test);
/*Will not work, because variable does not exist
in the global scope! */

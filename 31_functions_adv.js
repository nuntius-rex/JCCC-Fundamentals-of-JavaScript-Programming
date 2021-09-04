
//Standard
function f1(msg){
  console.log(msg);
}
f1("hello!");

//Standard - Variablized function:
var f4 = function(msg){
  console.log(msg);
}

//--------------------------

//Call Wrapping:
function f2(msg){
  console.log(msg);
}
(f2)("hello!");

//Function wrapping:
(function f3(msg){
  console.log(msg);
})("hello!");

//Anonymous function wrapping:
(function (msg){
  console.log(msg);
})("hello!");

//ES6:
((msg)=>{
  console.log(msg);
})("hello!");

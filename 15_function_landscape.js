
/*
LANDSCAPE MAKER:
Nested Function Structure:

Also works for regular functions:

function test(){
  alert("test");
  function go(){
    alert("go");
  }
  go();
}
test();

*/

var landscape = function(){
    var result="";

    var flat = function(size){
        for (var i = 0; i < size; i++) {
            result+="_"
        }
    }

    var mountain=function(size){
        result+="/";
        for (var i = 0; i < size; i++) {
            result+="^";
        }
        result+="\\";
    }

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(3);

    return result;
}
console.log( landscape() );


/*
Make an 8x8 square
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

var board="";
var size=8;
for(var y=0; y<size; y++){ //row iteration
  for(x=0; x<size; x++){  //column iteration
    if( (x+y)%2 ==0 ){
      board+=" ";
    } else{
      board+="#";
    }
  }
  console.log(board);
  board="";
}

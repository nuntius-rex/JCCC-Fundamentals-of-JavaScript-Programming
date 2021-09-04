
/*
Make an 8x8 square
########
########
########
########
########
########
########
########
*/

var square="";
for(var i=0; i<8; i++){ //row iteration
  for(j=0; j<8; j++){  //column iteration
    square+="#";
  }
  console.log(square);
  square="";
}

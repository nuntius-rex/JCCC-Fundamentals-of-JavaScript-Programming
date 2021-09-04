
/*
APPLE OBJECT:

properties:

classification: fruit                   =variable or array
colors - green, red, yellow             =variable or array
brand - "red delicious",  "Johnathan"   =variable or array
type -  "organic"                       =variable or array
taste - sweet, sour
grow                                    =function
drop                                    =function
roll                                    =function
cored                                   =boolean (yes or no)
has_seeds                               =boolean (yes or no)

*/
var appleObj={
  has_seeds:true,
  cored:false,
  classification:"fruit",
  taste:"sweet",
  extras:["caramel","peanut butter"],
  brand:"Red Delicious",
  drop: function(){
    console.log("Thud!");
  },
  size: 1,
  grow: function(){
    this.size=this.size+1;
  }
}

console.log("The apple taste "+appleObj.taste);
appleObj.grow();
console.log( appleObj.size );
appleObj.grow();
appleObj.grow();
console.log( appleObj.size );
appleObj.drop();

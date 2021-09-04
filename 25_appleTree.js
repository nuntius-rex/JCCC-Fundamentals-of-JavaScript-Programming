var appleBasket=[];

function appleTree(has_seeds,cored,classification,taste,extras,brand,size){

  appleBasket.push({
    has_seeds:has_seeds,
    cored:cored,
    classification:classification,
    taste:taste,
    extras:extras,
    brand:brand,
    drop: function(){
      return "Thud!";
    },
    size:size,
    grow: function(){
      this.size=this.size+1;
    }
  });

}

appleTree(true,false,"fruit","sweet",["peanut butter","caramel"],"Red Delicious",1);
appleTree(true,true,"fruit","sour",["peanut butter","caramel"],"Granny Smith",1);

console.log(appleBasket);

var output="";

for (var i = 0; i < appleBasket.length; i++) {
  output+="I love "+appleBasket[i].brand+" apples! \n"
        +" When they fall, the go "+appleBasket[i].drop()+" \n\n ";
}

console.log(output);

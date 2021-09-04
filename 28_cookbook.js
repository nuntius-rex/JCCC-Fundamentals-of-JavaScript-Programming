

/*
Requirements:
1) Make a cookbook creator
2) create a cookbook


*/

function Cookbook(name){
  //console.log(name);
  this.name=name;
  this.recipes=[];
  this.addRecipes=function(name, ingredients, instuctions){
     this.recipes.push({
       name: name,
       ingredients:ingredients,
       instuctions:instuctions
     })
  }
}

//Normal function call:
//Cookbook("Cookie Cookbook");

var DansCookbook=new Cookbook("Dan's Cookie Cookbook");


DansCookbook.addRecipes(
  "Chocolate Chip Cookie",
  "1 Back of Chocolate Chips, 3 More Chocolate Chips, Flour",
  "Preheat Oven to 375 degrees, bake!"
);

DansCookbook.addRecipes(
  "Oatmeal Cookie",
  "1 Bucket of Oatmeal, Flour",
  "Preheat Oven to 375 degrees, bake!"
);
//console.log(DansCookbook);
console.log(DansCookbook.recipes);

for (var i = 0; i < DansCookbook.recipes.length; i++) {
  console.log( DansCookbook.recipes[i].name);
  console.log( DansCookbook.recipes[i].ingredients);
  console.log( DansCookbook.recipes[i].instuctions);
}


var BarbsCookbook=new Cookbook("Barb's Dessert Cookbook");
console.log(BarbsCookbook);

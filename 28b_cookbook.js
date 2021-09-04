

/*
Requirements:
1) Make a cookbook creator
2) create a cookbook


*/

function Cookbook(name){

  var cookbook={
    name: name,
    recipes:[],
    addRecipes: function(recipe_name, ingredients, instuctions){
      this.recipes.push({
        name: recipe_name,
        ingredients:ingredients,
        instuctions:instuctions
      });
    }
  }

  return cookbook;
}

var DansCookbook=Cookbook("Dan's Cookie Cookbook");

DansCookbook.addRecipes(
  "Chocolate Chip Cookie",
  "1 Back of Chocolate Chips, 3 More Chocolate Chips, Flour",
  "Preheat Oven to 375 degrees, bake!"
);

console.log(DansCookbook);


var BarbsCookbook=Cookbook("Barb's Dessert Cookbook");

console.log(BarbsCookbook);


/*
INPUT:
 1.) Inventory setter
  - name, price, description

 2.) Intentory getter

 3.) Order (or Cart) setter

EVALUATION:
 - number and total of items in cart

OUTPUT:
 4.) Total orders

*/

//------------------------------------------------
//PROCESSING & EVALUATION:
//------------------------------------------------

var inventory=[];
var cart=[];

function setInventory(name, price, description){
  inventory.push({
    name: name,
    price: price,
    description: description
  })
}


//WARNING: RETURNS AN ARRAY WITH THE OBJECT:
function getInventory(name){
  return inventory.filter( function(item){
      if(item.name==name){
        return item;
      }
  });
}

function setCart(name){
  cart.push( getInventory(name)[0] );
}


function getCartTotal(){
  var total=0;
  //console.log(total);
  for(let i=0;i<cart.length;i++){
    //console.log(cart[i].name);
    total=total+cart[i].price;
  }
  //console.log(total);
  let priceFormat="$"+Number.parseFloat(total).toFixed(2);
  return priceFormat;
}

//------------------------------------------------
//INPUTY:
//------------------------------------------------

setInventory("Soap", 2.99, "Standard bar soap");
setInventory("Toothpaste", 1.99, "Minty fresh tooth cleaning paste");
setInventory("Milk", 2.99, "A white liquid cows make.");
setInventory("Cheese",3.99,"It's orange or yellow, and sometimes made by the government");
setInventory("Cookies",5.99,"A round baked good that will enhance happiness!")


//------------------------------------------------
//OUTPUT:
//------------------------------------------------

console.log("----------INVENTORY-----------");
console.log(inventory);

console.log("----------CART-----------");
setCart("Soap");
setCart("Milk");
setCart("Cookies");

console.log(cart);

console.log("----------CART TOTAL -----------");
var total=getCartTotal();
console.log( total );

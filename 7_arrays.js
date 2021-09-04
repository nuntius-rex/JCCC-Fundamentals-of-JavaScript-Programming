

//Simple Array:
var names=[]; //Empty
names[0]="Dan"; //Add to first position
names[1]="Kenni"; //Add to second position
names[2]="Betelhem"; //Add to third position
console.log(names); //Output the fully populated array.

//Pushing Onto Array
var names=[]; //Empty
names.push("Dan");
names.push("Kenni");
names.push("Betelhem");
console.log(names);



//HMTL Array Output Example:
var family=["Dan","Barb","Daniel","Nathan","Ashlyn"]; //populated in declaration
var text="<table></tr><th>Family</th></tr>";
for(i=0;i<family.length;i++){
  text+="<tr><td>"+family[i]+"</td></tr>";
}
text+="</table>";
console.log(text);


//foreach loop
var dice=[1,2,3,4,5,6];
dice.forEach(all);
var diceRoll= roll(dice);
console.log("You rolled a "+diceRoll);

function all(item, index){
  console.log(index+" - "+item);
}

function roll(dice){
  return dice[Math.floor( (Math.random() * dice.length) +1) ];
}

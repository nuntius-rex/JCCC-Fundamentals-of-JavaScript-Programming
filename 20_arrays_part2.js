
//String as Arrays:
//String are arrays of characters.
var str="some text";
console.log(str);
console.log( str[3] );


//Strings with delimiters:
var str="Dan,Guinn,Instructor,JCCC";
console.log( str );
console.log( str.split(",") );

var recArray=str.split(",");
console.log(recArray);


//For Loop - looping over an array:
var animalArray=["dogs","cats","chickens","cows"];
for (var i = 0; i < animalArray.length; i++) {
  console.log(animalArray[i]);
}

//ForEach
var animalArray=["dogs","cats","chickens","cows"];
animalArray.forEach( function(item, index){
    console.log("Index:" + index+ " Item: "+item);
});

//ForEach with outside function:
var animalArray=["dogs","cats","chickens","cows"];
animalArray.forEach(logIt);

function logIt(element){
  console.log(element);
}

//Filter:
var animalArray=["dogs","cats","chickens","cows"];
var houseAnimals=animalArray.filter( function(item){
    if(item=="dogs" || item=="cats"){
      return item;
    }
});
console.log(houseAnimals);

//Map:
var numbers=[4,9,16,25];
var newNumbers=numbers.map( function(element){
    return element+1;
})
console.log(numbers);
console.log(newNumbers);











.

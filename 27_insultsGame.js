
/*
CONCEPTS:
1.) Function as an Object
2.) new operator

INPUT?:

 - ALL SYSTEM:
 1.) insult

 EVALUATION?:
 2.) fight ( random insults, random dying)

      3.) OUPUT?:
      - random insults
      - with sword sound words
      - dying words
      - die (tell who has won and died)

*/

//--------------------------------
//VERSION 1:
//--------------------------------
function Character(id, name, insults){
    this.id=id;
    this.name=name;
    this.insults=insults;
}

var insults1=[
  "Your mother smells of elderberry!",
  "Your father was a drunken seafaring barnicle!"
];
var Player1=new Character(1, "White Knight",insults1);

var insults2=[
  "Thou art a wretched flopdoodle!",
  "Thou pragging shag-haired miscreant!"
];
var Player2=new Character(2, "Dark Paletine",insults2);

console.log(Player1);
console.log(Player2);


//--------------------------------
//VERSION 2:
//--------------------------------
var death_id=(Math.random()<=0.5) ? 1 : 2;

function Character(id, name){
    this.id=id;
    this.name=name;
    this.insults=[
      "Your mother smells of elderberry!",
      "Your father was a drunken seafaring barnicle!",
      "Thou art a wretched flopdoodle!",
      "Thou pragging shag-haired miscreant!"
    ];
    this.insult=function(){
      	let randNum=Math.floor( Math.random()*this.insults.length);
        console.log(this.name+" says: "+this.insults[randNum]  );
    };
    this.swordSounds=["Shing!","Crung!","Parang!","Pareen!","Clang!","Sha-shing!","Tong!","Doing!"];
    this.fight=function(){
      let randNum1=Math.floor( Math.random()*this.swordSounds.length);
      console.log( this.swordSounds[randNum1] );
      let randNum2=Math.floor( Math.random()*this.swordSounds.length);
      console.log( this.swordSounds[randNum2] );
    };
    this.dyingWords=[
      "Ah, it's just flesh wound!",
      "You act like you've won! Pfft",
      "Alas, I fear your ugly face. more than death!",
      "I might have hit you better, hadn't I?"
    ];
    this.die=function(){
      let randNum=Math.floor( Math.random()*this.dyingWords.length);
      if(this.id==death_id){
        console.log(this.name+" says: \" "+this.dyingWords[randNum]+" \" as he died."  );
      }
    }

}

var Player1=new Character(1,"White Knight");
var Player2=new Character(2,"Dark Paletine");

//console.log(Player1);
//console.log(Player2);

Player1.insult();
Player2.insult();
Player1.fight();
Player1.insult();
Player2.fight();
Player2.insult();
Player1.die();
Player2.die();



















//.


//---------------------------
//PASSWORD CREATOR:
//---------------------------

//alphaNum=[0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z ];

//Starts with a string of alphanumeric characters:
var alphaNum="0,1,2,3,4,5,6,7,8,9,"
+"a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
+"A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

//Split it by commas into an array like the one at the top
alphNumArray=alphaNum.split(",");

function  createPassword(length){ //length is the number of characters in password
    var password="";
    for (var i = 0; i < length; i++) { //length will be the amount looped
      //Generate a random number:
      var randNum=getRandomNum(alphNumArray.length);

      //User randome number to select a alpha or numeric value from the array:
      //Add it to the password:
      password+=alphNumArray[randNum];
    }
    //Send the password:
    return password;
}

function getRandomNum(num){
  return Math.floor(  (Math.random() * Math.floor(num) ) );
}

console.log( createPassword(8) );

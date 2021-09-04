
var heartArray=[
  [" ","#","#"," ","#","#"," "],
  ["#","#","#","#","#","#","#"],
  [" ","#","#","#","#","#"," "],
  [" "," ","#","#","#"," "," "],
  [" "," "," ","#"," "," "," "]
];

for (var i = 0; i < heartArray.length; i++) { //Each Row
    var output="";
    for (var j = 0; j < heartArray[i].length; j++) { //Each Column
      output+=heartArray[i][j];
    }
    console.log(output);
}

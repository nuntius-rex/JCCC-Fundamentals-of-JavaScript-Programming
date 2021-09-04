

function charCount(string){
  return string.length+" characters.";
}

function wordCount(string){
  var wordArray=string.split(" ");
  //console.log(wordArray);
  return wordArray.length+" words.";
}


var text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit orci consequat rutrum semper. Integer neque mi, consequat quis efficitur eget, pharetra sit amet metus. Vivamus mollis dui eget erat semper, vitae rhoncus metus facilisis. Praesent sit amet metus tincidunt, scelerisque mauris sed, consequat sem. Vestibulum nec accumsan lectus. Nulla pellentesque ultricies sem a aliquet. Nullam pharetra est a justo finibus tristique.";

var text_count=charCount(text);
console.log(text_count);

var word_count=wordCount(text);
console.log(word_count);

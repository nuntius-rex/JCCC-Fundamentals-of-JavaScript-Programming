

function textFormat(text,task){
    //console.log(text);
    //console.log(task);

    if(task=="U"){ //My test for uppercase
        return text.toUpperCase();
    }

    if(task=="L"){ //My test for lowercase
        return text.toLowerCase();
    }

}

var text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit orci consequat rutrum semper. Integer neque mi, consequat quis efficitur eget, pharetra sit amet metus. Vivamus mollis dui eget erat semper, vitae rhoncus metus facilisis. Praesent sit amet metus tincidunt, scelerisque mauris sed, consequat sem. Vestibulum nec accumsan lectus. Nulla pellentesque ultricies sem a aliquet. Nullam pharetra est a justo finibus tristique.";


var newText=textFormat(text,"U");
console.log(newText);

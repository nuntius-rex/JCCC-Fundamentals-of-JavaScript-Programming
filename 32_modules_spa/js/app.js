
//console.log(home);
//console.log(about);
//console.log(root);

var root=document.getElementById('root');
root.innerHTML=home;

var homeLink=document.getElementById('homeLink');
homeLink.addEventListener("click", function(){
  root.innerHTML=home;
});

var aboutLink=document.getElementById('aboutLink');
aboutLink.addEventListener("click", function(){
  root.innerHTML=about;
});

var contactLink=document.getElementById('contactLink');
contactLink.addEventListener("click", function(){
  root.innerHTML=contact;
});

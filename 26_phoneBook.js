


/*
--Create function to hold object and set phoneBook
first_name
last_name
phone

--call the function to set the phoneBook
--output: display the phonebook.
*/


var phoneBook=[];
function setPhoneBook(first_name, last_name, phone){

  phoneBook.push({
    first_name:first_name,
    last_name:last_name,
    phone:phone
  });
}

//Default Set:
setPhoneBook("Dan","Guinn","123-456-7890");
setPhoneBook("Barb","Guinn","123-456-7890");
//console.log(phoneBook);

//Set by Entry:
//var first_name=prompt("Enter a first name:");
//var last_name=prompt("Enter a last name:");
//var phone=prompt("Enter a phone number:");

//setPhoneBook(first_name,last_name,phone);


var search=prompt("Search: Enter a name");

var result=phoneBook.filter(function(item){
  sArray=search.split(" ");
  if(
    item.first_name==search ||
    item.last_name==search ||
    (item.first_name==sArray[0] && item.last_name==sArray[1])
  ){
    return item;
  }
});

console.log(result);

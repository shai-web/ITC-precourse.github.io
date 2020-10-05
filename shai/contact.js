
// Contact - Submit


function submitForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var myEmail = document.getElementById("my-email").value;
  var comment = document.getElementById("comment").value;
  var color = document.getElementById("color-check").value;

  console.log(`First Name: ${firstName}, Last name: ${lastName}, E-Mail: ${myEmail}, Comments: ${comment} Favorite Color: ${color}`)
  // TODO: automate based on elements in the form.
}

function getVal (id) {
  return document.getElementById(id).value;
} 

var submitButton = document.getElementById("submit")


function validateForm (){
  var firstName = getVal("first-name");
  var lastName = getVal("last-name");
  var myEmail = getVal("my-email");
  var comment = getVal("comment");

  // Not checking color because there is no null for color input
  if (firstName=="" || lastName=="" || myEmail=="" || comment==""){
    submitButton.disabled = true;
  }
  else {
    submitButton.disabled = false;
  }
}

validateForm();


//12. adding onclick to all input. creat a new function called 'validate' and add it to each onclick. try to access all elements with validate
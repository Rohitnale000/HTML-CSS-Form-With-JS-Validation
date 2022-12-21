function Reset() {
  document.getElementById("form").reset();
  manage(this);
}

   function formValidation() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let note = document.getElementById("note").value;

  if (!isNaN(firstName) || firstName == "") {
    //alert("Name should not be empty/ Name should contain only alphabets");
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } else if (password != confirmPassword) {
    //alert("password and conform password are not matching");
    let x = document.getElementById("snackbar1");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } else if (password.search(/[a-z]/) < 0 || password.search(/[A-Z]/) < 0 || password.search(/[0-9]/) < 0 || password.search(/[^a-zA-Z0-9\-\/]/) < 0) {
   // alert("Password must contain at least one lowercase,uppercase,number & special letter");

   let x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);



  } else {
    let x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}

function manage(txt) {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let note = document.getElementById("note").value;
  let submit = document.getElementById("submit");
  if (
    firstName != "" &&
    lastName != "" &&
    password != "" &&
    confirmPassword != "" &&
    note != ""
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}


// function myFunction() {
 
// }
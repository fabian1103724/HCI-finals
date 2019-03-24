var myInput = document.getElementById("psw1");

var use = prompt("praktis lng to username", "username");
var pass = prompt("praktis lng to password", "password");

function loginkuno(form) {
	username = form.username.value;
	passwordm = form.pass.value;

	if(username != use || passwordm != pass){
			alert("incorrect username or password");
			return false;
	}
	else if(username == use && passwordm == pass){
			return true;
			
	}
	
}



function checkeverything(form) {
	password1 = form.psw1.value;
	password2 = form.psw2.value;
	birthday = form.year.value;	
	
  if(password1 != password2) {  
	document.getElementById("incorrect").style.display ="block";
  } 
  else{
	document.getElementById("incorrect").style.display ="none";
  }
  
  birthday = 2019 - birthday;
  if(birthday > 18){
	  document.getElementById("incorrect3").style.display ="none";
	  return true;
  }
  else if(birthday < 18){
	  document.getElementById("incorrect3").style.display ="block";
	  return false;
  }
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    document.getElementById("incorrect2").style.display ="none";
  } 
  else {
    document.getElementById("incorrect2").style.display ="block";
  }

  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    document.getElementById("incorrect2").style.display ="none";
	
  } else {
    document.getElementById("incorrect2").style.display ="block";
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    document.getElementById("incorrect2").style.display ="none";
  } 
  else {
    document.getElementById("incorrect2").style.display ="block";
  }
  
  if(myInput.value.length >= 8) {
    
  } else {
    document.getElementById("incorrect2").style.display ="block";
  }
}


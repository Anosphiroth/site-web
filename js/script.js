
function validation(){
  if ( birthdate() == true ){
    if ( username() == true ) {
      if ( password() == true ){
        if ( email() == true ){
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function birthdate(){
  var birthdate = document.inscription.birthdate;
  var t = birthdate.value.split("/");
  if ( birthdate.value == "" ){
    return true;
  }
  else if ( t[0]==null || t[1]==null || t[2]==null ){
		birthdate.style.backgroundColor = "rgba(230,60,60,0.4)";
		return false;
	}
	else if( t[0]<32 && t[0]>0 && t[1]>0 && t[1]<13 && t[2]<2020 && t[2]>2020-100){
  	birthdate.style.backgroundColor = "rgba(120,210,50,0.7)";
  	return true;
  }
 	else {
  	birthdate.style.backgroundColor = "rgba(230,60,60,0.4)";
  	return false;
  }
}

function password(){
  var userpwd = document.inscription.userpwd;
  if ( /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]{8,15}$/.test(userpwd.value) === true ) {
    userpwd.style.backgroundColor = "rgba(120,210,50,0.7)";
    return true;
  }
  else {
    userpwd.style.backgroundColor = "rgba(230,60,60,0.4)";
    return false;
  }
}

function email(){
  var useremail = document.inscription.useremail;
  if( /^([A-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$)/.test(useremail.value) === true) {
    useremail.style.backgroundColor = "rgba(120,210,50,0.7)";
    return true;
  }
 	else {
    useremail.style.backgroundColor = "rgba(230,60,60,0.4)";
    return false;
  }
}

function username(){
  var username = document.inscription.username;
  if ( username.value == "" ){
    username.style.backgroundColor = "rgba(230,60,60,0.4)";
    return false;
  }
  else if( /^[a-zA-Z0-9]*$/.test(username.value) === true) {
    username.style.backgroundColor = "rgba(120,210,50,0.7)";
    return true;
  }
  else {
    username.style.backgroundColor = "rgba(230,60,60,0.4)";
    return false;
  }
}

document.inscription.lastname.addEventListener("focus", function() {
  document.getElementById("hide").style.display = "block";
});

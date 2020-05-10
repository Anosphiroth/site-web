
document.getElementById("connexion").addEventListener("submit", function(e){
  e.preventDefault();

  var data = new FormData();

  var xhr = new XMLHttpRequest();

  xhr.open("POST","/htbin/login.py", true);
  xhr.onreadystatechange = function(){
    if ( xhr.readyState == 4 && xhr.status == 200 ){
      document.getElementById("msg").style.display = "block";
      document.getElementById("msg").innerHTML = this.response;
    } else {

    }
  };

  var username = document.getElementById("username");
  var userpwd = document.getElementById("userpwd");

  if ( username.value != "" ){
    data.append("username", username.value);
  }
  if ( userpwd.value != "" ){
    data.append("userpwd", userpwd.value);
  }

  if ( username.value != "" || userpwd.value != "" ) {
    xhr.send(data);
  }
  else {
    return false;
  }



});

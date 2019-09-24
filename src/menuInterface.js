$(document).ready(function(){
  var user = sessionStorage.getItem('userName');
  if(!user){
    $('#create').prop('disabled', true);
    $('#list').prop('disabled', true);
  };
  $('#create').click(function(){
    window.location.replace("./createSpace.html");
  });
  $('#list').click(function(){
    window.location.replace("./listSpace.html");
  });
  $('#logout').click(function(){
    sessionStorage.removeItem('userName');
    window.location.replace("./menu.html");
  });
  $('#logIn').click(function(){
    window.location.replace("./logInPage.html");
  });
  $('#signUp').click(function(){
    window.location.replace("./signUpPage.html");
  });
});

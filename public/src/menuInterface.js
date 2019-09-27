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
<<<<<<< HEAD
    window.location.replace("./bookSpace.html");
=======
    $.ajax({
      type: "GET",
      url: 'http://localhost:3000/space',
      data: {},
      success: (data) => {
        sessionStorage.setItem('listSpaces', data);
        window.location.href = "./listSpace.html";
      }
    });
>>>>>>> 511f773ade1b3fa4694f75ad593aa324950199c9
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

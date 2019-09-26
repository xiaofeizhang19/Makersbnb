$(document).ready(function() {
  $("#submit").click(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    
    user = new User('name', 'email@email.com', 'password')

    // if ($('#password').val() === user.password) {
    //   $("#login-confirmation").text("Logged in as: " + user.username);
    //   sessionStorage.setItem('userName', $('#username').val());
    //   window.location.href = "./menu.html";
    // } else {
    //   alert("Password incorrect");
    // };
    // localStorage.setItem('currentUser', username);

    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/users/login',
      data: {
        username,
        password,
      },
      success: (data) => {
        // alert(data);
        window.location.href = "./menu.html";
      }
    });

  });
});


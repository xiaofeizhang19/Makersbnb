$(document).ready(function() {
  $("#submit").click(function() {
    user = new User('name', 'email@email.com', 'password')

    if ($('#password').val() === user.password) {
      $("#login-confirmation").text("Logged in as: " + user.username);
      sessionStorage.setItem('userName', $('#username').val());
      window.location.href = "./menu.html";
    } else {
      alert("Password incorrect");
    };
    // localStorage.setItem('currentUser', username);
  });
});

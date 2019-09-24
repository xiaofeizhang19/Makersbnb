$(document).ready(function() {
  $("#submit").click(function() {
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (password === confirmPassword) {
      user1 = new User(username, email, password);
      $("#login-confirmation").text("Logged in as: " + username);
      // window.location.href = "../Makersbnb/createSpace.html";
    } else {
      alert("Password doesn't match");
    };
    // localStorage.setItem('currentUser', username);
  });
});

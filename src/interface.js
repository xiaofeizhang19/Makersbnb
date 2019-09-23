$(document).ready(function() {
  $("#submit").click(function() {
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    user1 = new User(username, email, password);
    $("#login-confirmation").text("Logged in as: " + username);
  })
})

$(document).ready(function() {
  $("#submit").click(function() {
    user = new User('name', 'email@email.com', 'password')

    if ($('#password').val() === user.password) {
      $("#login-confirmation").text("Logged in as: " + user.username);
      window.location.href = "../Makersbnb/createSpace.html";
    } else {
      alert("Password incorrect");
    };
    // localStorage.setItem('currentUser', username);
  });
});

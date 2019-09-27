$(document).ready(function() {
  $("#submit").click(function() {
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (password === confirmPassword) {
      user1 = new User(username, email, password);

      // sessionStorage.setItem('userName', username);
      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/users',
        data: {
          username,
          password,
          email
        },
        success: (data) => {
          alert("We have signed you up");
          window.location.href = "./logInPage.html";
        },
        error: (xhr, status, error) => {
          if (xhr.status === 400) {
            alert("You need to fill all fields");
          } else if (xhr.status === 409) {
            alert("We already have one of you and don't want two");
          } else {
            alert("Sorry, something went wrong. Please try again later.");
          }
        }
      });
    } else {
      alert("Password doesn't match");
    };

  });
});

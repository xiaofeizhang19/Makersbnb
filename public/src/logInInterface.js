$(document).ready(function() {
  $("#submit").click(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    
    user = new User('name', 'email@email.com', 'password')

    //   window.location.href = "./menu.html";
    // localStorage.setItem('currentUser', username);

    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/users/login',
      data: {
        username,
        password,
      },
      success: (data) => {
        let obj = JSON.parse(data);
        let user_id = obj.id;

        sessionStorage.setItem('userName', user_id);
        window.location.href = "./menu.html";
      },
      error: (xhr, status, error) => {
        if (xhr.status === 401) {
          alert("Invalid username or password");
        }
      }
    });

  });
});


$(document).ready(function() {
  $("#submit").click(function() {
    user1 = new User($("#username"), $("#email"), $("#password"));
    console.log(user1)
  })
})

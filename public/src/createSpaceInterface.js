$(document).ready(function(){
  $('#submit').click(function(){
    var name = $('#name').val();
    var description = $('#description').val();
    var capacity = $('#capacity').val();
    var price = $('#price').val();
    var dateFrom = $('#dateFrom').val();
    var dateTo = $('#dateTo').val();
    //var ownerId = sessionStorage.getItem('userName');
    var ownerId = 5;

    // sessionStorage.setItem('name', name);
    // sessionStorage.setItem('description', description);
    // sessionStorage.setItem('capacity', capacity);
    // sessionStorage.setItem('price', price);
    // sessionStorage.setItem('dateFrom', dateFrom);
    // sessionStorage.setItem('dateTo', dateTo);
    console.log('space')
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/space',
      data: {
        name,
        description,
        price,
        capacity,
        ownerId
      },
      success: (data) => {
        alert(data);
        window.location.href = "./menu.html";
      }
    });
    space = new Space(name, description, price, capacity);
    window.location.replace("./listSpace.html");
  })
});

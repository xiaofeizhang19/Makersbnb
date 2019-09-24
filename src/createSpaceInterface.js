$(document).ready(function(){
  $('#submit').click(function(){
    var name = $('#name').val();
    var description = $('#description').val();
    var capacity = $('#capacity').val();
    var price = $('#price').val();
    var dateFrom = $('#dateFrom').val();
    var dateTo = $('#dateTo').val();

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('description', description);
    sessionStorage.setItem('capacity', capacity);
    sessionStorage.setItem('price', price);
    sessionStorage.setItem('dateFrom', dateFrom);
    sessionStorage.setItem('dateTo', dateTo);

    space = new Space(name, description, price, capacity);
    window.location.replace("./listSpace.html");
  })
});

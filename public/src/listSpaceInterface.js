$(document).ready(function(){
// space = new Space("Space1", "2 bed flat", 200, 5);
$('#mainmenu').click(function(){
  window.location.replace("./menu.html");
});
var name = sessionStorage.getItem('name', name);
var description = sessionStorage.getItem('description', description);
var capacity = sessionStorage.getItem('capacity', capacity);
var price = sessionStorage.getItem('price', price);
var dateFrom = sessionStorage.getItem('dateFrom', dateFrom);
var dateTo = sessionStorage.getItem('dateTo', dateTo);

$('#name').html(name);
$('#capacity').html(capacity);
$('#price').html(price);
$('#description').html(description);
});

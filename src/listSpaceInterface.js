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
  
  
  // WARNING !!!!! Javascript is wierd, and treats months from 0-11 !!!!!!!
  var dateArray = [];
  dateArray.push(new Date(2019,09-1,20).getTime());
  dateArray.push(new Date(2019,09-1,22).getTime());
  dateArray.push(new Date(2019,09-1,24).getTime());

  pickmeup('input', {
    hide_on_select:false,
    mode:'range',
    render: function(date) {
      if ($.inArray(date.getTime(), dateArray) > -1){
        return {
            disabled   : true,
            class_name : 'disabled'
        }
      }
    }
  });
});

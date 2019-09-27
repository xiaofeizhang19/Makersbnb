$(document).ready(function(){
  // space = new Space("Space1", "2 bed flat", 200, 5);
  $('#mainmenu').click(function(){
    window.location.replace("./menu.html");
  });

  spaceListString = sessionStorage.getItem('listSpaces');
  spaceList = JSON.parse(spaceListString);
  var ownerId = spaceList[0].owner_id;
  var id = spaceList[0].id;
  var name = spaceList[0].name;
  var description = spaceList[0].description;
  var capacity = spaceList[0].capacity;
  var price = spaceList[0].price;

  // var name = sessionStorage.getItem('name', name);
  // var description = sessionStorage.getItem('description', description);
  // var capacity = sessionStorage.getItem('capacity', capacity);
  // var price = sessionStorage.getItem('price', price);
  // var dateFrom = sessionStorage.getItem('dateFrom', dateFrom);
  // var dateTo = sessionStorage.getItem('dateTo', dateTo);

  $('#name1').html(name);
  $('#capacity1').html(capacity);
  $('#price1').html(price);
  $('#description1').html(description);
  $('#id1').html(id);
  $('#ownerId1').html(ownerId);
  
  
  // WARNING !!!!! Javascript is wierd, and treats months from 0-11 !!!!!!!
  // This array holds dates you want to disable on the calendar popup
  //
  var dateArray = [];
  dateArray.push(new Date(2019,09-1,20).getTime());
  dateArray.push(new Date(2019,09-1,22).getTime());
  dateArray.push(new Date(2019,09-1,24).getTime());

  var spaceArray = [];
  spaceArray.push(dateArray);
  spaceArray.push(dateArray);

  for (i = 0; i<spaceArray.length; i++){
    spaceDateArray = spaceArray[0];
    pickmeup('#calender'+i, {
      hide_on_select:false,
      mode:'range',
      render: function(date) {
        if ($.inArray(date.getTime(), spaceDateArray) > -1){
          return {
              disabled   : true,
              class_name : 'disabled'
          }
        }
      }
    });
  }
});

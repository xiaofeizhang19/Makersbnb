$(document).ready(function(){
  // space = new Space("Space1", "2 bed flat", 200, 5);
  $('#mainmenu').click(function(){
    window.location.replace("./menu.html");
  });

<<<<<<< HEAD:public/src/bookSpaceInterface.js
  $('#book0').click(function(){
    var dateRange = ($('#calendar0').val().split(' '));
    var check_in = dateRange[0];
    var check_out = dateRange[2];
    var space_id = 2;
    var customer_id = 1;
    // console.log(dateRange);
    // console.log(check_out);
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/booking',
      data: {
        check_in,
        check_out,
        space_id,
        customer_id
      },
      success: (data) => {
        console.log(data)
        // window.location.href = "./menu.html";
      }
    });
    alert("Your booking request has been sent to the owner for approval");
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


=======
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
  
  
>>>>>>> 511f773ade1b3fa4694f75ad593aa324950199c9:public/src/listSpaceInterface.js
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
    pickmeup('#calendar'+i, {
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

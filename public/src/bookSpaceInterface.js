function bookingSave(number) {
    calendar = '#calendar'+number;
    var dateRange = ($(calendar).val().split(' '));
    var check_in = dateRange[0];
    var check_out = dateRange[2];
    var space_id = 2;
    var customer_id = 1;
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
  };

$(document).ready(function(){
  // space = new Space("Space1", "2 bed flat", 200, 5);
  $('#mainmenu').click(function(){
    window.location.replace("./menu.html");
  });

  $('#book1').click(function(){
    alert("hello");
  });

  // $('#book1').click(function(){
  //   var dateRange = ($('#calendar1').val().split(' '));
  //   var check_in = dateRange[0];
  //   var check_out = dateRange[2];
  //   var space_id = 2;
  //   var customer_id = 1;
  //   $.ajax({
  //     type: "POST",
  //     url: 'http://localhost:3000/booking',
  //     data: {
  //       check_in,
  //       check_out,
  //       space_id,
  //       customer_id
  //     },
  //     success: (data) => {
  //       console.log(data)
  //       // window.location.href = "./menu.html";
  //     }
  //   });
  //   alert("Your booking request has been sent to the owner for approval");
  // });

  spaceListString = sessionStorage.getItem('listSpaces');
  spaceList = JSON.parse(spaceListString);
    for (i=1; i<=spaceList.length; i++){
     $('#tableUpdate').append("<tr>"
      + "<td width='80%'>"
      + "<table class=plane>"
      + "<tr><td width='10%' colspan='3' rowspan=5>Image</td></tr>"
      + "<tr><td>Name:</td><td id='name"+i+"'>Name</td></tr>"
      + "<tr><td>Capacity:</td><td id='capacity"+i+"'>Capacity</td></tr>"
      + "<tr><td>Price:</td><td id='price"+i+"'>Price</td></tr>"
      + "<tr><td>Description:</td><td id='description"+i+"'>Description</td></tr>"
      + "</table>"
      + "</td>"
      + "<td><input id='calendar"+i+"'></td>"
      + "<td><button onclick='bookingSave("+i+")'>Book</button></td>"
      + "<input name='id"+i+"' type='hidden'>"
      + "<input name='ownerId"+i+"' type='hidden'>"
      + "</tr>"
      );

      $('#name'+i).html(spaceList[i-1].name);
      $('#capacity'+i).html(spaceList[i-1].capacity);
      $('#price'+i).html(spaceList[i-1].price);
      $('#description'+i).html(spaceList[i-1].description);
      $('#id'+i).html(spaceList[i-1].id);
      $('#ownerId'+i).html(spaceList[i-1].owner_id);
      
    };
    
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

  for (i = 1; i<=spaceArray.length; i++){
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



git branch
  $('#submit').click(function(){
    var name = $('#name').val();
    var description = $('#description').val();
    var capacity = $('#capacity').val();
    var price = $('#price').val();
    var dateFrom = $('#dateFrom').val();
    var dateTo = $('#dateTo').val();
    space = new Space(name, description, price, capacity);
    console.log(space);
  })
});

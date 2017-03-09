console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $('#imperatives, span').on('click', funtion(){
    $('ul').append('<li>click</li>');
  })
  $('span')();
  );

});





// when i click on span
// keep track of that click
// add the content of that span to a new list item
// add the span i am clicking to a list item

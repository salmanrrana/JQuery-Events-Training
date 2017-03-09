console.log("Sanity Check: JS is working!");

console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("#time").text( Date.now() );

  $('input').keyup(function(){
    var a = parseInt($('#left').val());
    var b =   parseInt($('#right').val());
    var total = a + b;
$('#total').val(total);
  });





})


// // pseudocode:
// // left + right = (total)put the total of left and rightover here
// // this is the left number #left
// // this is the right number #right
// // add both of those numbers #left + #right
// // put the value of those numbers in total  total

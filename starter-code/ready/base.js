/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function(){
  // console.log( "The page says:", $("h1").text() );


$("h1").text("Go!");

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
// I moved the curly bracket, bracket, and semicolon to the bottom of the function in order for the DOM to be ready to change?
});

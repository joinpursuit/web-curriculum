//You can either wrap all of your functions in $(document).ready, or use the "defer" keyword in your script tag
// $(document).ready(function() {

// })
// $('p').mouseenter(function(){
//   console.log('thank you')
// })

// $('p').mouseleave(function(){
//   console.log('thank you again')
// })


// $('').click(function() {
//    $(this).animate({left: '250px'});
// })

// $('button').click(function(){
//   $('p').css('background-color': 'magenta')
// })

// $('button').click(function(){
//   var newElement = document.createElement('li');
//   newElement.innerHTML = 'Ten';
//   $('li').after(newElement)
// })

$('button').click(function(){
  var inputVal = $('.input-box').val();
  console.log(inputVal);
})
var arr = [1, 2, 3 ,4 ,5]
function doSomething(arr) {
  for(var i = 0; i < arr.length; i++) {
    debugger;
    console.log(arr[i]);
    debugger;
  }
}

doSomething(arr);





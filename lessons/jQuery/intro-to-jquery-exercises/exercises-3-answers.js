//1. Click Button 1 to append the following paragraph element to the end of list of squares: 
//"<p>How did I get here?</p>"
$('#button1').click(function(){
  $('ol').append("<p>How did I get here?</p>")
})

//2. Click Button 2 to remove all of the green squares from the list (make sure they're removed, and not just hidden)
$('#button2').click(function(){
  $('.green').remove()
})

//3. Click Button 3 to first send and alert (http://www.w3schools.com/jsref/met_win_alert.asp) that says "Don't click me!"
//Then remove the button from the page
$('#button3').click(function(){
  alert("Don't click me!")
  $('#button3').remove()
})

//4. Click Button 3 to add the following text node right before every magenta square:
//"<p>Blue is better than magenta</p>"
$('#button3').click(function(){
  $('.magenta').before("<p>Blue is better than magenta</p>")
})

//5. Enter some text into the text input box. When you click the 'Enter' button, log that text to the console
$('#enter-button').click(function(){
  console.log($('input').val());
})

//6. Click Button 3 to add the following  node right after every magenta square:
//"<div class='square blue'></div>"
$('#button3').click(function(){
  $('.magenta').after("<div class='square blue'></div>")
})

//7. Hover over a blue box to remove that specific box from the page (make sure you're removing itand not just hiding it)
$('.blue').mouseenter(function(){
  $(this).remove();
})

//8. Click Button 1 to replace all the boxes on the page with the following:
//"<p>Words are worth 1000 pictures</p>"
$('#button1').click(function(){
  $('li').html("<p>Words are worth 1000 pictures</p>")
})

//9. Click Button 2 to replace all of the evenly numbered boxes on the page with the following:
//"<p>Pictures are worth 1000 words</p>"
$('#button2').click(function(){
  $('li:odd').html("<p>Pictures are worth 1000 words</p>")
})

//10. Enter some text into the text input box. 
//When you click the 'Enter' button, replace all boxes with the entered text
$('#enter-button').click(function(){
  var enteredText = $('input').val();
  var newNode = document.createElement('p');
  newNode.innerHTML = enteredText;
  $('li').html(newNode)
})

//11. Enter two words into the input box.
//The first word should be the color of the squares you'd like to target.
//The second word should be the color you'd like to change those squares to.
//When you click the 'Enter' button, change the colors.
//For example, if you enter 'green magenta', all green squares should be changed to magenta
//If you enter 'blue purple', all blue squares should be changed to purple
$('#enter-button').click(function(){
  //First we split our string (that was entered into the input box) into an array
  var enteredTextArr = $('input').val().split(' ');
  //We can then save the first word from the array as a variable
  var firstColor = enteredTextArr[0];
  //As well as the second word from the array, as a separate variable
  var secondColor = enteredTextArr[1];
  //We can then use the firstColor variable as a selector
  //And the secondColor variable to change our background color
  $('.' + firstColor).css({'background-color': secondColor});
})

//12. Enter three numbers into the input box.
//When you click the 'Enter' button, change the width and height (respectively) of all magenta boxes according to the numbers you typed in.
//Also move the magenta boxes to the right by the amount you entered in as the third number.
//For example, if you type in 150 100 200, all magenta boxes should be changed to 150px width by 100px height, and moved 200px to the right
$('#enter-button').click(function(){
  var enteredTextArr = $('input').val().split(' ');
  var width = enteredTextArr[0];
  var height = enteredTextArr[1];
  var toTheRight = enteredTextArr[2];
  $('.magenta').animate({'width': width, 'height': height, 'left': toTheRight});
})

//13. Enter a color and any amount of additional words into the input box.
//When you click the 'Enter' button, replace specified color box with whatever you typed in after the color.
//For example, if you type in "magenta money trees is the perfect place for shade", all magenta boxes should be replace with "money trees is the perfect place for shade"
$('#enter-button').click(function(){
  var enteredTextArr = $('input').val().split(' ');
  var color = enteredTextArr[0];
  var sentence = enteredTextArr.slice(1).join(' ');
  var newNode = document.createElement('p');
  newNode.innerHTML = sentence;
  $("." + color).parent().html(newNode);
})



//1. Click Button 1 to change all boxes background color to blue
$('#button1').click(function(){
  $('.square').css({'background-color': 'blue'})
})

//2. Hover over a box to change its background color to magenta
$('.square').mouseenter(function(){
  $(this).css({'background-color': 'magenta'});
})

//3. Hover over a box to change the background color to green. 
//Move your mouse away from the box to change the background color to blue
$('.square').mouseenter(function(){
  $(this).css({'background-color': 'green'});
}).mouseleave(function(){
  $(this).css({'background-color': 'magenta'});
})

//4. Click on a box to add the 'lime' class to that specific box 
$('.square').click(function(){
  $(this).addClass('lime');
})

//5. Click on a box to change its border color to magenta
$('.square').click(function(){
  $(this).css({'border-color': 'magenta'});
})

//6. Click Button 1 to change all evenly numbered boxes' background color to yellow
$('#button1').click(function(){
  $('li :odd').css({'background-color': 'yellow'});
})

//7. Click on any green box to change all other boxes' background color to green.
//Clicking on any other colored box should not do anything
$('.green').click(function(){
  $('.square').css({'background-color': 'green'});
})

//8. Hover over a box to add the 'circle' class to that specific box.
//Stop hovering over a box to remove the 'circle' class
$('.square').mouseenter(function(){
  $(this).addClass('circle');
}).mouseleave(function(){
  $(this).removeClass('circle');
})

//9. Click button 1 to make all even numbered boxes move 100 pixels to the right, and change their background color to lime
$('#button1').click(function(){
  $('li :odd').animate({left: '100px'}).css({'background-color':'lime'});
})

//10. Click on a box to rotate it by 45 degrees (using CSS)
$('.square').click(function(){
  $(this).css({'transform':'rotate(45deg)'});
})


//11. Click on a box to change the background color to magenta, and then five seconds later change the background color to blue
$('.square').click(function(){
  //'this' will refer to the '.square' object
  console.log('outer this', $(this));
  //works because 'this', in this situation, refers to the '.square'
  $(this).css("background-color", "magenta");
  //we'll save 'this' as a variable so we can use it in other funcitons,
  //and still have it refer to the original outer square
  var savedThis = $(this);
  //setTimeout function, which is a method on the global 'window' object
  setTimeout(function(){
    //'this' will refer to the 'window' object, 
    //since it is wrapped in setTimeout
    console.log('inner this $', $(this));
    //so we need to use the 'savedThis' from the outer scope
    savedThis.css('background-color', 'blue');
  }, 2000)
})

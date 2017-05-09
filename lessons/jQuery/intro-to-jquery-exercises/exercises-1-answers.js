//YOUR CODE HERE:

//1. Click on any button to console log "Clicked a button"
$('button').click(function(){
  console.log("Clicked a button");
})


//2. Hover over any box to console log "Hovering over a box"
$('.square').hover(function(){
  console.log("Hovering over a box");
})


//3. Click on Button 1 to hide all squares. Click on Button 2 to show all squares.
$('#button1').click(function(){
  $('.square').hide();
})
$('#button2').click(function(){
  $('.square').show();
})


//4. Click Button 1 to make everything on the page dissapear
$('#button1').click(function(){
  $('*').hide();
})


//5. Click on a box to make it dissapear. Click on Button 1 to make all boxes reappear. 
$('.square').click(function(){
  $(this).hide();
})


$('#button1').click(function(){
  $('.square').show();
})


//6. Hover over a magenta box should hide that box. 
//Hovering over any other boxes should not do anything
$('.magenta').hover(function() {
    $(this).hide();
})


//7. Hover over any green box should make all magenta boxes dissapear. 
// Hovering off of the green box should make all magenta boxes reappear
$('.green').mouseenter(function(){
  $('.magenta').hide()
}).mouseleave(function(){
  $('.magenta').show()
})


//8. Click Button 2 to make all squares grow to 150px x 150px
$('#button2').click(function(){
  $('.square').animate({height: '150px', width: '150px'})
})


//9. Hover over a box to make it grow to 200px height by 200px width. 
//Remove your mouse from the box to make it go back to 50px by 50px. 
$('.square').mouseenter(function() {
    $(this).animate({height: '200px', width: '200px'});
}).mouseleave(function() {
    $(this).animate({height: '50px', width: '50px'});
})


//10. Click on Button 2 to make all green boxes slide to the right by 150px
$('#button2').click(function(){
  $('.green').animate({left: '150px'});
})


//11. Click Button 1 to slide all green, magenta, and purple squares to the right by 150px
$('#button2').click(function(){
  $('.green, .magenta, .purple').animate({left: '150px'});
})


//12. Clicking on any of the odd numbered squares should hide that square. 
//However, clicking on an even numbered square should not do anything
$('li :even').click(function(){
  $(this).hide()
})


//13. Click on any of the first five squares (numbers 1-5) to hide the square. 
//Clicking on any of the last five (numbers 6-10) should not do anything.
$('li :lt(5)').click(function(){
  $(this).hide()
})


//14. Click Button 1 to make all evenly numbered boxes grow to 150px width and 150px height. 
//Click Button 2 to make all odd numbered boxes grow to 150px width and 150px height. 
//Click Button 3 to make all boxes go back to 50 px x 50px

$('#button1').click(function(){
  $('li :odd').animate({height: '150px', width: '150px'})
})

$('#button2').click(function(){
  $('li :even').animate({height: '150px', width: '150px'})
})

$('#button3').click(function(){
  $('.square').animate({height: '50px', width: '50px'})
})


//15. Hover over a box to make it grow to 150px by 150px. 
//While hovering over that box, click it to make it dissapear. 
$('.square').mouseenter(function(){
  $(this).click(function(){
    $(this).hide();
  })
})

// 16. Hover over a box to make it grow to 200px height by 200px width. 
// While hovering over the box, clicking the box should make it grow further to 300px by 300px. 
// Furthermore, while hovering over the box, double clicking should make it grow to 500px by 500px. 
// Once you stop hovering over the box it should go back to 50px by 50px.

$('.square').mouseenter(function() {
    $(this).animate({height: '200px', width: '200px'});
    $(this).click(function(){
      $(this).animate({height: '300px', width: '300px'});
    }).dblclick(function(){
      $(this).animate({height: '500px', width: '500px'});
    });
}).mouseleave(function() {
    $(this).animate({height: '50px', width: '50px'});
})



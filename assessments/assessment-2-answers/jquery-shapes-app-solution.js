$(function () {

$('.square').click(function () { 
  $('#shape').html('SQUARE'); 
});

$('.circle').click(function () { 
  $('#shape').html('CIRCLE'); 
});

$('.triangle').click(function () { 
  $('#shape').html('TRIANGLE'); 
});

$('.square').hover(
  function () { 
    $(this).animate({backgroundColor: 'red'}); 
  }, 
  function () {
    $(this).animate({backgroundColor: 'black'}); 
  });


// Hover animations for the circle and triangle are not required by the 
// assignment; however, they are included here for completeness.

$('.circle').hover(
  function () { 
    $(this).animate({backgroundColor: 'green'}); 
  }, 
  function () {
    $(this).animate({backgroundColor: 'black'}); 
  });

// NOTE: The triangle is rendered with CSS tricks; need to animate its 
// bottom-border-color rather than its background-color.
$('.triangle').hover(
  function () { 
    $(this).animate({borderBottomColor: 'blue'}); 
  }, 
  function () {
    $(this).animate({borderBottomColor: 'black'}); 
  });

});

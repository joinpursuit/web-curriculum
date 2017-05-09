$(function () {

// Splitting this out into a function isn't mandatory, but nice.

function addTask(task) {
  $('.to-do').append('<li class="not-done">' + task + '</li>');
}

addTask('check metrics');
addTask('deploy build');

$('#add').click(function () {
  var taskBox = $('#task');
  var task = taskBox.val();
  addTask(task);
  taskBox.val('');
});

$('#all-done').click(function () {
  $('.not-done').removeClass('not-done').addClass('done');
  $('#controls').hide();
});

});

var canvas2d = {
  drawingTool: "pencil",
  isMouseDown: false,
  context: document.getElementById('canvas').getContext('2d'),
}


function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(); // abs. size of element
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}


$('#pencil').click(function() {
  canvas2d.drawingTool = "pencil";
})

$('#line').click(function() {
  canvas2d.drawingTool = "line";
})

$('#width').change(function() {
  canvas2d.context.lineWidth = Number($('#width option:selected').val());
})

$('#canvas').mousedown(function(event) {

})

$('#canvas').mouseup(function(event) {

})

$('#canvas').mousemove(function(event) {

})

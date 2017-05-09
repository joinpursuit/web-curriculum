$('#add-item').click(function() {
    var inputVal = $('input').val();
    var newNode = document.createElement('li');
    newNode.innerHTML = inputVal;
    $('ul').append(newNode).on('dblclick', function(event){
       event.target.remove();
    })
})


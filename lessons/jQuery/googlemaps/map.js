function resetValue() {

}

function setplaceinput() {

}
function setdirectinput() {

}
function setsearchinput() {

}
function setviewinput() {

}


$('select').change(function() {
  var mode = $(this).val()
  resetValue()
  switch(mode) {
    case "place":
      setplaceinput()
      break
  }
})

function genPlaceURL(arr) {

}

function genDirectURL(arr) {

}

function genSearchURL(arr) {

}

function genViewURL(arr) {

}

$('form').submit(function(event) {
  event.preventDefault()
  var params = $(this).serializeArray()
  var url =
  var mode =
  var key =
  var param
  switch(mode) {
    case "place":
      param = genPlaceURL(params)
      break

  }
  $('iframe').attr('src', url + mode + key + param)
})

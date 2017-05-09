$(document).ready(
  function(){
    $("#place").on("submit", function() {
        // Lookup `preventDefault`; it stops the browser's default action,
        // which is to make a synchronous submission of the form.
        // http://api.jquery.com/category/events/event-object
        event.preventDefault();

        // As a shortcut, when jQuery calls your event handler, it sets
        // `this == event.currentTarget`.
        var formData = $(event.currentTarget).serializeArray();
        var city = formData[0].value
        var country = formData[1].value

        function printWeather(weather) {
          console.log(weather)
        }
        $.ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country +
          '&appid=19ef759cf57d6e34d0f417336fe92af9',
          success: printWeather
        })
        // city name
        // temperature
        // clouds
        // wind speed
        // humidity
        // sunrise vs sunset

      }
    );
  }
)

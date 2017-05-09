# AJAX - Asynchronous JavaScript and XML

## Making our first web server!
[node.js web server](/node webserver)

## Basic HTTP servers
[Modulus blog post: node.js server](http://blog.modulus.io/build-your-first-http-server-in-nodejs)

## JSON
JavaScript Object Notation - String Form
```js
JSON.stringify()
JSON.parse()
```

## Forms
```html
<form id="login">
  <label>Username: </label>
  <input type="text" name="username">
  <label>Password: </label>
  <input type="text" name="password">

  <input type="submit">
</form>
```

## Asynchronous?!
Ain't Nobody Got Time for That! JavaScript doesn't wait.

## APIs
With most APIs, you'll need an API Key that'll grant you access to information stored in a website's database. Companies require you to register a key with them to track your usage. For example, you can embed Youtube videos into your website by using Youtube's API. You'll need to include information within the API call to specify the information that you're looking for.

## AJAX
You need a URL to navigate to and a success callback function to invoke when a response is received.
```js
var options = {
  url: 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success: function(response) {
    return response
    }
};

$.ajax(options)
```

## Google Maps
Address Information - you plug in an address and it returns you a bunch of information about that particular address
`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY`

Latitude/Longitude Lookup
`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
`

## Open WeatherMap API
[OpenWeatherMap API](http://openweathermap.org/current)

## Congress Person API
[Sunlight Labs API](https://sunlightlabs.github.io/congress/)
* Create a form for address, city, state, zip code
* Uses form to retrieve latitude and longitude
* Uses latitude and longitude to find congress person

## Challenge
Youtube or Vimeo API

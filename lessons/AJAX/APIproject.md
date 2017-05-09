# AJAX && API Project

## AJAX
So far we've only been including two property-value pairs in the options object we pass to AJAX.
```js
$.ajax({
  url: "http://adventurega.me/bootstrap/",
  success: doSomethingCallback,
  error: doSomethingElseCallback
})
```
However, there are other things we can include that are useful such as error handling.
* [jQuery AJAX Documentation](http://api.jquery.com/jQuery.ajax/)
* [AJAX reading](http://jqfundamentals.com/chapter/ajax-deferreds)

## Giphy API
[Slack integrates Giphy API](http://giphy.com/posts/slack-adds-giphy-to-every-chatroom-wut) - let's make a little giphy application together! **we don't need it, but for practice let's do a second AJAX call inside the callback for the first AJAX call**

[Giphy API Link](https://api.giphy.com/)

## Marvel API
Marvel has a pretty awesome API that has a ton of information and images on comic book heroes.

### Getting a Key
[Getting Started](http://developer.marvel.com/documentation/getting_started) - You'll need to register an account with Marvel.

### Test API Calls
[Awesome Tool!](http://developer.marvel.com/docs) - You can test out different API calls. You only have 1000 API calls a day. Use them wisely!

### Images
[Easy Image Sizing](http://developer.marvel.com/documentation/images) - By changing the image URL, you can get different image sizes.

### Attribution
[Give credit to Marvel!](http://developer.marvel.com/documentation/attribution) - You must attribute Marvel as the source of data whenever you display any results from the Marvel Comics API. Please use the following text on every application screen or web page which displays the API result:
"Data provided by Marvel. © 2014 Marvel"

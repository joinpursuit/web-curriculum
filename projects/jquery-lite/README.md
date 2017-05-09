# jQuery Lite
In this project you'll be building a library that reconstructs the basic functionality of jQuery.

## Setup
Set up an HTML page you can manipulate. We've provided an `index.html` page with some cute dogs for now, but feel free to completely edit the `index.html` file if you'd like. Just be sure to include a variety of different HTML tags including: `<div>`, `<ul>`, `<li>`, `<img>`

## The following functions are provided for you:
1. A `$d()` has been added directly to the `window`. The `$d()` function is basically the equivalent of the jQuery `$()` or `jQuery()` functions which you can use to select things.
```javascript
window.$d()
```
You can test the `$d()` function by opening your `index.html` file in Chrome, then opening up the Chrome dev tools console and calling the function. For example:
```javascript
$d('.blue');
$d('img');
```

2. A `DOMTree` constructor function which is used by the `$d()`. The `DOMTree` constructor function creates an object with a single property: `htmlElements`. The `htmlElements` property holds an array of DOM elements that are selected using the `$d()` function.
```javascript
function DOMTree(elements){
  //elements should be an array
  this.htmlElements = elements;
};
```
You can define new functions directly on the `DOMTree.prototype` object:
```javascript
DOMTree.prototype = {
  each: function (callback) {
    //...
  },
  html: function (string) {
    //...Â
  }
}
```
And test them in Chrome dev tools like below:
```javascript
$d('img').each(function(){...});
$d('li').html(function(){...});
```
## Instructions
Edit the `dom.js` file. Scroll down to around the middle of the page for instructions on the functions you need to complete.

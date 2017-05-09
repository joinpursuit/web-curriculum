# Callbacks

A callback is a function that you pass an argument to be called at a later time.

```javascript
function greeting() {
  console.log('hello world')
}

setTimeout(greeting, 1000)
```
the greeting function gets invoked or called **once** 1000 milliseconds after the setTimeout function is called.

```javascript
setInterval(greeting, 1000)
```
the greeting function now gets called every 1000 milliseconds.

```javascript
document.getElementById('future').aaddEventListener('click', greeting)
```
when you click on the element with a future id, you invokes the greeting function.


```javascript
function whatClick(e) {
  console.log(e)
}

document.getElementById('future').aaddEventListener('click', whatClick)
```
the addEventListener function passes the event as an argument to the callback.

##how to make something disappear
```javascript
document.getElementById('future').setAttribute('style', 'display: none;')
```

### Q1. Warm-up
Create an input text box on the page that you can paste URLs into. Create a button that takes that URL image address and puts the image onto the page.  

### Q2.
```javascript
var now = new Date() //gets you the date and time
```
Check the `typeof` now. What is it? You can call a variety of functions on the Date object:
`.getHours`, `.getMinutes`, `.getSeconds`.

Write a function `whatTime` that returns the time in this format - 00:00.
(i.e 2:45 PM => 15:45)

### Q3.
Get a select tag with 10 options with values from 1 - 10 seconds and a button onto the page. Use the `setTimeout` function to send an alert `Timeout is over!` after the selected amount of time has passed.

### Q4.
Display the current time on an HTML page in the format of HH:MM:SS. Use the `setInterval` function to update the time every second.

### Q5.
Make the entire window one color. Have the color change  every 3 seconds using the `setInterval` function.
Hint: Have an array of colors to cycle through.  

### Q6.
Display an image of Pikachu on the page. Whenever you hover over the Pikachu picture, it should both console log `ThunderShock` and alert `ThunderBolt`. Use the `addEventListener` function.

### Q7.
Display a picture of Bulbasaur, a picture of Charmander, and a picture of Squirtle. When you click one image, the others disappear and you get an alert `You chose ______!`
Hint: you have to play with the display property and toggling classes on HTML elements.
```css
.hide {
  display: none;
}
```
```html
<div class="hide">
  Stop looking at me swan!
</div>
```

### Q8.
Recreate the [Shake Shack Menu](https://www.shakeshack.com/food-and-drink/).
At the top of your HTML page, you'll want tabs for burgers, chicken, flat-top dogs, fries...
When you hover over the tab, it'll display the items you can order in that category.

**Challenge: Style the menu items by adding more than one class**

### Q9.
Create a Tic-Tac-Toe board where you can click on a square and it alternates placing Xs and Os.

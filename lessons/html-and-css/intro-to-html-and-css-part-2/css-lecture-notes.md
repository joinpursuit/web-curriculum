# CSS (Cascading Style Sheets)

### Warm-Up
````css
selector {
  property1: value1;
  property2: value2;
  property3: value3;
}
````
The basic formation of CSS - you have a selector that picks an HTML element by tag name, id name, or class name.

<strong>ACTIVITY: [CSS Diner](http://flukeout.github.io/)</strong>

### Introduction
How do you link CSS with HTML?
````html
<link rel="stylesheet" href="style.css"  charset="utf-8">
````
You place a link tag in the `<head>` that references a CSS file.


````html
<div style="color: green;">Bulbasaur</div>
````
The code above turns the Bulbasaur text green.

````html
<div>Bulbasaur</div>
````
````css
div {
  color: green;
}
````
This is how you would do it using CSS.

### Display: block vs inline

Block elements extend as far across the page as possible. A `<div>` is the standard block element.

Inline elements take up on the space they need. A `<span>` is the standard inline element.  

#### Classes
````html
<div class="pokemon">Bulbasaur</div>
````
````css
.pokemon {
  color: green;
}
````

#### IDs
````html
<div id="grass">Bulbasaur</div>
<a href="#grass"></a>
````
The above anchor tag creates a link that navigates to the HTML element on the same page with an id of grass.

````css
#grass {
  color: green;
}
````

## Box Model
* Padding
* Border
* Margin

Padding is inside of an element.
The border is between the padding and margin.
Margins are outside of the element.

````css
span {
  padding/margin: top right bottom left;
}

span {
  border: size style color;
}
````

## Resources
* What is [Lorem Ipsum](http://www.lipsum.com/)?
* Use [Google Fonts](https://www.google.com/fonts)!
* Continue to improve your CSS [here](https://designshack.net/articles/css/5-steps-to-drastically-improve-your-css-knowledge-in-24-hours/)

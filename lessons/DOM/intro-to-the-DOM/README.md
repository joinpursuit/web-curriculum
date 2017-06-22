title: Intro to the DOM  
topics: javascript, DOM

# Resources
- [Intro to the DOM](http://www.w3schools.com/js/js_htmldom.asp)
- [Accessing DOM Elements](http://www.w3schools.com/js/js_htmldom_elements.asp)

# Lecture
## What's a DOM?
![http://www.w3schools.com/js/pic_htmltree.gif](http://www.w3schools.com/js/pic_htmltree.gif)

DOM stands for 'Document Object Model.' The DOM basically defines the logical structure of web documents and gives us a way to access and manipulate documents.

Everything in the web page is represented as a 'node' in the DOM. We can access and directly manipulate these nodes in order to change what appears on our web page.

Manipulating the DOM is an example of the power of JavaScript. We can use pure JavaScript to completely change all the HTML and CSS element in a webpage.

Read the following: [Into to the DOM](http://www.w3schools.com/js/js_htmldom.asp)

Please answer the following questions:
- What is the DOM?
- What do we use the DOM for?
- What is the `document` object (checkout the first paragraph [here](http://www.w3schools.com/js/js_htmldom_document.asp))?

## Accessing the DOM
Read the following: [Accessing DOM Elements](http://www.w3schools.com/js/js_htmldom_elements.asp)

How would you do the folllwing?
- Get an element by ID
- Get an element by tag name
- Get an element by class name

## Demo
- `document.body`
- `parent` and `child` nodes
- `innerHTML`
- `document.getElementById`
- `firstChild` / `lastChild`
- [DEMO](demo.md)

## Manipulating the DOM
We can add, remove, and change DOM elements using certain methods. DOM manipulation is the basis of adding interactivity to websites.

Read the following: [Manipulating DOM Nodes](http://www.w3schools.com/js/js_htmldom_nodes.asp)

## Demo: Manipulating elements
- `document.body.appendChild`
- `document.createElement`

## Project
[Directions](groceryList.md)

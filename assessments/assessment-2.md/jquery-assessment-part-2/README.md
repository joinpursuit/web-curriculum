This directory contains a web page that shows a square, a circle, and a triangle.  You will use jQuery to add a few behaviors to the page.

## Guidelines

- Edit [app.js](app.js) only.  Do not change the HTML or CSS files.

- All of your Javascript code should run when the document loads.  This has been set up for you already in [app.js](app.js).

- Submit your completed [app.js](app.js) file.

## Instructions

1. Read over the HTML and CSS files.  Understand the DOM structure and the CSS classes.  

2. Add a click callback to the `square` class.  In it, set the contents of the div with ID `shape` to the string "SQUARE".  

  We've already started this one for you.

3. Add similar click callbacks for the `circle` and `triangle` classes, each setting the contents of `shape` to the name of the shape.

4. Add a hover callback to the `square` class.  In it, animate the square's background color to red when the mouse cursor hovers over the square, and back to black when the cursor leaves the square.  

  We've already started this one for you.  

  Remember that jQuery sets `$(this)` to the target DOM object inside of the callback function.

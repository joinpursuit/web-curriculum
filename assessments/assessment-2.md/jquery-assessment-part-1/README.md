This directory contains a simple HTML and CSS to-do list.  Initially, the list contains a few unchecked tasks and controls.  You will use jQuery to add behavior to the list and controls.

## Guidelines

- Edit [app.js](app.js) only.  Do not change the HTML or CSS files.

- All of your Javascript code should run when the document loads.  This has been set up for you already in [app.js](app.js).

- Submit your completed [app.js](app.js) file.

## Instructions

1. Read over the HTML and CSS files.  Understand the DOM structure and the CSS classes.  

2. Add two more to-do items: "check build" and "deploy release".  

   - Each should be a list item (`<li>`) with CSS class "not-done".  
   - Do this using jQuery; do not edit the HTML file.

3. Enable the _Add_ button.  

   - Add a click callback.
   - In the callback, retrieve the content of the task input box.
   - Add the new item to the to-do list, as in the previous part.

4. Augment the _Add_ button click callback to clear the task input box after adding its contents to the list.

5. Enable the _All Done!_ button.  

   - Add a click callback.
   - In the callback, find all DOM elements with CSS class `not-done`.
   - For each, remove the `not-done` class and replace it with class `done`.  

   If you implement this correctly, the checkboxes will become checked when you click the button.

6. Augment the _All Done!_ click callback to hide all the controls.  

   - Do this by hiding the div with id `controls`.


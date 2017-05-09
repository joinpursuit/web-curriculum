##Setup
- Create an index.html file that just has an empty <body></body> tag in it
- Create an `app.js` in the same folder 
- Add a `script` tag to your `index.html` file and link in your `app.js` file
- Add all of your code directly to the `app.js` file
- Open your index.html file up in Chrome. It should just be a blank page

##Exercises
Do not edit your HTML file for any of these exercises. Only use DOM methods:
- Create a new 'button' element
- Add a 'first-button' id to your button element (you can use the [`setAttribute`](http://www.w3schools.com/jsref/met_element_setattribute.asp) method)
- Append the new button element to the document.body
- Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console
- Add another event listener to the button. When clicked, the button should change the background color of the page `body` to 'magenta.' It should also still log "Clicked the first button" to the console
- Create a new 'button' element
- Add a 'second-button' id to your button element (you can use the [`setAttribute`](http://www.w3schools.com/jsref/met_element_setattribute.asp) method)
- Append the new button element to the document.body
- Add an event listener to the second button. When clicked, the button should create a *new* button element and append it to the body of the document
- Create a new `img` element
- Add a `src` attribute (you can use the [`setAttribute`](http://www.w3schools.com/jsref/met_element_setattribute.asp) method) to your `img`, and a add a link to an image of your choice
- Append the `img` to document.body
- Add an event listener to the image. When you hover over the image, the image should change the `src` and be replaced by another image.
- Add another event listener to the image. When you stop hovering over the image, the image should change back to the original image.
- Create a new `ul` element
- Create three `li` elements and append them all to the `ul`
- Append the `ul` element to `document.body`
- Add an event listener to the `ul`. Whenever a `li` item is clicked, the event listener should log out the text of that specific `li` item to the console. You should only have one event listener on the `ul`, you should not have individual event listeners on each `li` item

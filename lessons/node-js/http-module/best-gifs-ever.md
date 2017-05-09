# Best Gifs Ever App
(for real this time)

## Setup
- Create a folder called best-gifs-ever
- Add an `index.html` file, `page-2.html` file, `page-3.html` file, `app.js` file, 'main.css' file and `server.js` file
- Add a jQuery script tag to your `index.html` file: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`
- Add a script tag to your `index.html` file to link in your `app.js` file
- Add a link tag to your `index.html` file to link in your `main.css` file
- Within your `server.js` file, `require` in the `http` module
- To test your app, run your `server.js` file and open up 'localhost:3000' (or whatever port number you set your server to listen to) in your browser

## Instructions
- In your `index.html` file you should setup three links using an `a` tag. The href for the first link should just be '/', the href for the second link should be '/page-2', and the href for the third link should be 'page-3'
- Copy and paste those three links into your other two html files (page-2.html and page-3.html)
- Decide on three different themes for your GIFs. Each separate HTML page should only contain GIFs for a specific theme (for example, one page can have puppy gifs, another page could have movie gifs, another page could have 90s gifs, etc.)
- Use `img` tags to add some gifs to each page, based on themes. Be sure to add some text to each of the links to let you know which link goes to which themes
- Setup a server in your `server.js` file. Setup your server so if the request url is '/', respond with your `index.html` file. If the request url is '/page-2', respond with your 'page-2.js' file. If the request url is '/page-3', respond with your page-3.js file
- Add some more GIFs and basic styling to your site. Remember to create a route in your server for you `main.css` file (in other words, make sure you have an if statement in your server that accounts for the 'main.css' url), use `fs.readFile` to read the contents, and write a response.
- Add 1- 2 more pages to your site with different GIF themes

## Bonuses
These are optional. Attempt these only if you've completed everything else:
- Setup a 'Random' page. Use the [Giphy API](https://github.com/Giphy/GiphyAPI#random-endpoint) to return a random GIF on that page (you'll need to use both AJAX and jQuery - include the jQuery GET request in you `app.js` file. Be sure to create a route in your server for you `app.js` file (in other words, make sure you have an if statement in your server that accounts for the 'app.js' url), use `fs.readFile` to read the contents, and write a response.
- Setup a 'Trending' page. Use the [Giphy API](https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint) to display trending GIFs on that page (you'll need to use both AJAX and jQuery)
- Add some jQuery into your app.js file so you only show one GIF per page at a time. Add buttons that lets the user click to change to the next GIF and/or go the previous GIF. In other words, if you have 10 GIFs on a certain page, the user should only see one at a time, but should be able to scroll through them by clicking on buttons.
- Use the [Giphy API](https://github.com/Giphy/GiphyAPI) to allow users to search for a GIF and add them to the page (you'll need to use both AJAX and jQuery)

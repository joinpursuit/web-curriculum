# Week 2, Homework

For this homework you will write code that takes some data and renders
it into a web page, using functions, objects and arrays. The data will
be a list of movies with some information about each. You will receive
this in the form of an array of simple JavaScript objects, which your
code will use to create JavaScript strings that contain pieces of
HTML. You will also add some simple CSS to style the page.

To begin, download the zip file for this assignment to your local
machine, and double-click on the file to uncompress it. That will
create a new folder. If you look inside this new folder you should see
an `index.html` file and two subfolders: `css` and `js`. This
directory structure (a project directory with HTML files and
subdirectories for CSS and JavaScript files) is very common for
developing web projects. For this assignment, you will be editing
`index.html` as well as a file in the `css` folder, which will be
described below. And for this assignment, you can ignore the `js`
folder, but feel free to look inside if you are curious -- and brave!

Double-click on the `index.html` file, and it should open in
your browser, displaying a simple `Hello, world.` message.

Now open the `index.html` file in a text editor like Sublime and find
the function with the following signature:

```javascript
function render(movieArray, displayWide)
```

This function will be automagically called for you whenever you open
or reload this webpage in a browser. So you can think of this as the
"entry point" to the code that you will write for this assignment.
This function must return a string, and the string that it returns
will get automagically inserted into the `<body>` of the HTML page for
you.

The function has two arguments:

- `movieArray` will contain an array of "movie" objects, which we will
explain below

- `displayWide` will be a boolean that (in [Step
4](#user-content-step-4)) will control what kind of HTML you should
generate, but you can ignore it for now.

## Step 1:

Begin by creating a function that implements the following signature:
```javascript
function renderMovie(movie)
```

The `movie` argument will be a JavaScript object with five fields,
like this example:

```javascript
{
	name: 'Minions',
	year: 2015,
	genre: 'animation',
	cast: ['Sandra Bullock', 'Jon Hamm', 'Michael Keaton'],
	description: 'Evolving from single-celled yellow organisms at the dawn of time, Minions live to serve, but find themselves working for a continual series of unsuccessful masters, from T. Rex to Napoleon. Without a master to grovel for, the Minions fall into a deep depression. But one minion, Kevin, has a plan.'
}
```

Using the attributes of this object, your function should create a new
string variable, use string concatenation to generate a string of
HTML, and return that variable with the `return` command.

For example, given the above object, you should generate a string with
the following HTML:

```html
<div class="movie animation">
  <h1 class="name">Minions</h1>
  <p>Release date: <span class="year">2015</span>, Genre: <span class="genre">animation</span>.</p>

  <div>
    Starring:
    <ul>
      <li>Sandra Bullock</li>
      <li>Jon Hamm</li>
      <li>Michael Keaton</li>
    </ul>
  </div>
  <p class="description">
    Evolving from single-celled yellow organisms at the dawn of time,
    Minions live to serve, but find themselves working for a continual
    series of unsuccessful masters, from T. Rex to Napoleon. Without a
    master to grovel for, the Minions fall into a deep depression. But
    one minion, Kevin, has a plan.
  </p>
</div>
```

For example, to get you started, you might begin with something like
the following:

```javascript
  var returnValue = '';

  returnValue += '<div class="movie ' + movie.genre + '">';
```

Note that `movie.genre` will be used twice: as a `class` in the outer
`<div>` tag, and also in a `<span>` to display to the user. Note also
that you will need to loop over the array in the `movie.cast`
attribute. We suggest using `forEach`.

Test your function by modifying `render()` so that it calls your
function, passes in the argument `movieArray[0]`, and returns the
string that your function generates, like so:

```javascript
  return renderMovie( movieArray[0] );
```

Now use your text editor to open the `style.css` file in the `css`
folder. Modify it to add some styles that make your HTML display a
little nicer in the browser. We've provided some basic CSS to get you
started. At a bare minimum, use the genre selectors that we have
provided so that each movie is displayed a little differently
depending on its genre. Consider experimenting with the CSS
[background](http://www.w3schools.com/cssref/css3_pr_background.asp)
attribute here to add a different icon or background image for each
genre. We would suggest also adding some `margin` and `padding`
properties to the `.movie` and `.description` selectors as well. After
making changes to `style.css` you should be able to simply reload
`index.html` in your browser to see your changes.

Try changing the index of `movieArray` and reloading to see different
genres displayed. For example: `movieArray[3]` or `movieArray[6]`.

Commit your code with a helpful commit message before proceeding.

## Step 2:

Next, expand on Step 1 so your code renders the entire list of movies
into HTML at once.

Do this by modifying the `render()` function:

1. Add a new string variable

2. Loop over each object in `movieArray`, and for each one:
  1. Call your `renderMovie()` function, passing in a single movie
  object
  2. Concatenate the return value from this function call to your new
  string variable.

3. Return this new string variable, as your function's return value

If you reload your page, you should now see a list displayed of all
movies, with whatever styling you have added for each different genre.

Again, commit your code with a helpful commit message before
proceeding.

## Step 3:

Now we'll demonstrate the power of functions. Without changing your
`render()` function, you'll change the way that the list of movies
gets rendered into HTML. To do this, you'll create a new function that
creates HTML differently, so the looping code that you just wrote in
Step 2 won't need to change, except that you'll call this new function
instead, and you'll see a very different result.

The goal will be to add a new, more compact way of rendering each
movie, kind of like the "mobile version" of the movie list.

To do this, add a new function that implements the following
signature:

```javascript
function renderMovieCompact(movie)
```

Just like in Step 1, this function should use string concatenation and
all the attributes of a single object (from the `movie` argument) to
produce a single string of HTML, which the function should then
return.

The only difference is that now you will create a more compact `<li>`
rather than a `<div>`. So the same movie object from Step 1 should now
produce this HTML:

```html
<li class="movie animation">
  <span class="name">Minions</span>
  (<span class="year">2015</span>,
  <span class="genre"> animation</span>)
  starring: Sandra Bullock, Jon Hamm, Michael Keaton
</li>
```

Modify `render()` so that instead of calling `renderMovie()`, it calls
`renderMovieCompact()` instead. If you reload the page, you should now
see a more compact movie list.

As always, commit your code with a helpful commit message before
proceeding.

## Step 4

Finally, we'll put everything together.

Modify the body of your loop in `render()` by adding an `if`
statement, so that if `displayWide` is `true`, you call
`renderMovie()`, otherwise, call `renderMovieCompact()`.

Now, if you resize your browser window (to less than 500px) and
reload, you should see the compact version, but if your browser is
wider, you should see the full version. Crafting websites like this
that display differently for different sized screens (such as desktop
versus mobile) is called "responsive web design" and is a large and
complicated topic, but we're seeing a small teaser of it here.

You should also add some additional CSS code. First, before your loop
in `render()`, add another `if` statement so that if `displayWide` is
`true`, you put a `<div>` with class `big`, otherwise put a `<div>`
with class `small` and a `<ul>`. Add an `if` statement with the
corresponding close tags after your loop. Now you can add some CSS to
style the different display versions accordingly. Here is a snippet to
get you started:

```css
.big {
    width: 80%;
    margin: 25px auto;
}

.small { 
    width: 100%;
}

.small ul {
    padding: 5px;
}

.small li {
    list-style-type: none;
}
```

And of course, commit your code with a helpful commit message before
proceeding.

## Bonus

If you've gotten this far and still have time, try modifying the
`render()` function by adding `sort()` to sort the data array by
different object attributes -- try movie release year or alphabetical
by title.

## The End

There you have it. In a way, what we have just produced is an
extremely basic responsive templating system that renders JSON into
HTML -- that's the buzzword version. What you've really done is used
an array of JavaScript objects to dynamically generate HTML in a way
that depends on the size of the browser window.

Of course, in the coming weeks we'll see better ways of doing this
with techniques that are less tedious, less error-prone, and more
enjoyable ways to work.


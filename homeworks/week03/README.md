# Week 3, Homework

For this homework you will add interactive functionality to a webpage
that displays a static list of movies.

You will be writing JavaScript code using the jQuery library, and will
also add some CSS to style the page.

In a way you will be building on the homework assignment from Week 2,
but to simplify things, we will no longer be working with the
JavaScript `render()` functions that you wrote last week, and instead
will start with a file of static HTML. The HTML markup in the file is
very similar to what you generated last week, but there are some
differences, and working with a static HTML file that you can examine
in your text editor will hopefully make things easier than using the
JavaScript `render()` functions.

The goal will be to handle various events, so that what is displayed
is dynamically changed by user actions.

As with the previous homework, to begin, download the zip file for
this assignment to your local machine, and double-click on the file to
uncompress it. That will create a new folder. As before, inside this
new folder is the common web project directory structure: an
`index.html` file and two subfolders: `css` and `js`. For this
homework, you will be editing `js/main.js,` as well as `index.html`
and `css/style.css`.

Double-click on the `index.html` file to open it in your browser, and
you should see a list of movies very similar to what you generated
last week. Now open `index.html` in your text editor. The HTML here
should look very familiar, but there are some small differences from
last week.

## Step 1:

Find this line in `index.html`:

```HTML
    <div id="frame" class="big">
```

and change `big` to `small`. When you reload you should see the
"compact" version from last week. Open `css/style.css` in your text
editor. Note that there are numerous style rules that begin with
`.big` and `.small`.

Let's look at a few:

  * Find both instances of `display: inline` - This takes "block"
    items and renders them on a single line. This is how we can render
    the various `<li>` items on a single line in the compact view
    instead of a vertical list.

  * Find three instances of `display: none` - This completely hides
    certain elements. This is how we hide the movie description in the
    compact view.

  * Find 5 instances of `content: ` - This is used with `:before` and
    `:after` and actually inserts small bits of content into the
    markup. This is how we add parenthesis around certain text in the
    compact view.

For your first task, add some JavaScript that makes this change from
large to small dynamic, so you can resize the window and the format
will change without reloading.

Open `js/main.js` in your editor. Note that all code is being
added inside a jQuery block that runs when the document is ready:

```javascript
$(document).ready(function () {
  ...
}
```

Find the "Step 1" comment. Add a handler here for the [resize
event](https://api.jquery.com/resize/#entry-examples).

Inside that handler, use the special JavaScript variable
`window.innerWidth` and add an `if` statement so that if the window
width is greater than 500, select the DOM element with ID `frame`, [remove
the class](https://api.jquery.com/removeclass/) `small` from it, and
[add the class](https://api.jquery.com/addclass/) `big`. (You can do
this on one line by chaining together your class modifiers.)
Otherwise (i.e., if the window is *less* than 500), select the element
with ID `frame`, but now [remove the
class](https://api.jquery.com/removeclass/) `big` from it, and [add
the class](https://api.jquery.com/addclass/) `small`.

Now when you resize the window, you should see your responsive
formatting changes happening in "real time" without needing to reload.

## Step 2:

For your next task, add some user controls that filter what movies are
displayed in the list.

In `index.html`, find the `div` with `class="user-controls"`. Inside
this, add a `<form>` with three checkbox inputs, one for each
genre. Use this one as a model:

```html
  Animation: <input id="animation" type="checkbox" name="animation" checked />
```

Feel free to wrap the `<form>` and `<input>` tags in whatever other
markup you'd like and add some style rules in `css/style.css` to make
them display nicely.

Find the "Step 2" comment in `js/main.js` and add a [change event
handler](https://api.jquery.com/change/) there to respond whenever any
of these checkboxes are toggled. You can target all three at once with
the selector: `input:checkbox`.

Inside this event handler, add an `if`-`else` statement. It should use
the selector `input#animation` to target the first checkbox. If
`.prop('checked')` is `true` for this element, then call `show()` on
all animation movies, otherwise, call `hide()` on them. (You can
target all animation movies with the selector `div.animation`.)

Repeat this exact same `if` statement two more times, one for each
genre: `action`, and `drama`.

Now you should be able to check and uncheck each box and see your list
get filtered in real time.

## Step 3:

Next, add another user control to `index.html`, this time make it a
text box:

```html
  Year: <input id="year" type="text" name="year" />
```

Find the "Step 3" comment in `js/main.js`. We have already added a
line of code to suppress the default submit behavior for this
form. Without this, whenever a user pressed enter in this text box,
the page would be "submitted", effectively reloaded, and you would not
be able to respond to the event. Instead of this submit behavior,
whenever the user enters a character, let's use it to filter the movie
list.

Add a [keyup event handler](https://api.jquery.com/keyup/) there to
respond whenever the user enters a character into the text box. You
can target the text box input by its ID.

Inside this handler, let's start by getting the numerical value of the
year that the user has just entered. Start with this:

```javascript
  var userYear = parseInt( ___ )
```

Replace "___" by using a selector to target your year `<input>` and
calling `.val()` on that. We've wrapped it in `parseInt()` because
`.val()` returns a string, and we want an actual numerical value that
we can do a comparison on.

Now add the following:

```javascript
  $('div.movie').each(function () {

      var movieYear = parseInt( $(this).find('dd.year').html() )

      // comparison:

  })
```

This function will loop over each DOM objects targeted by that
selector. Inside `.each()`, the jQuery object `$(this)` refers to the
element that you are currently looping over. `.find()` searches that
element's children based on the specified selector. So that line
extracts the value of the year for the current movie that we're
looping over.

Now you have all the pieces to finish this filter. Beneath the
"comparison" comment, add an `if` statement that compares `movieYear`
to `userYear`. If `movieYear` is greater, then call `$(this).show()`
to display the current movie. Otherwise, call `.hide()` on it.

This should allow you to type in a year and only see movies that are
newer.

## Step 4

But there is a problem! The year filter and the genre filter conflict
with each other in weird ways. Try to filter all dramas newer than
2000 for example and see what happens.

To solve this, we'll merge the filtering from Steps 2 and 3 into one
handler. First, comment out your solutions to Steps 2 and 3. Don't 
delete them, because we'll refer back to them. But we don't need that
functionality now because we will be recreating it in a better way 
here. But don't comment out the `preventDefault()`! That is still
needed.

Start with the following event handler:

```javascript
  $('input').bind('keyup change', function (event) {

  })
```

By using `bind()` instead of the other handlers from above, we are
able to respond to multiple events with one handler. In this case, we
will use this one handler to respond to `keyup` events *and* `change`
events for each `input` on the page.

Inside that, copy and paste your line from Step 3 that sets `var
userYear` to the value of your year `<input>`.

Add the following `if` to make sure we have a valid value: (Question:
Can you think of why we didn't need to worry about this in Step 3?)

```javascript
  if (isNaN(userYear)) {
    userYear = 0
  }
```

Also, add the entire `.each()` loop from Step 3 above. After setting
`movieYear`, add an almost identical line that sets a new variable
called `movieGenre`. You can do this by targeting `dd.genre` instead
of `dd.year`.

Next, add the following line:

```javascript
  var checked = $('input#'+movieGenre).prop('checked')
```

This uses the `movieGenre` variable to get the value of the
corresponding check box.

Finally, you have all the pieces to put together your filter logic. It
is just as with Step 3, except that now, you want to `.show()` the
movie only if `movieYear` is greater than `userYear` *and* `checked`
is `true`.

Once you get that worked out, your genre filters and year filters
should be working together.

## Bonus

If you've gotten this far and still have time, try adding another form
that lets the user input the title, genre, year, description and
three actors for another movie. When the user hits the 'submit'
button, use a `.submit()` handler that generates an HTML string and
appends that after the last movie `<div>`. Hint: you might want to
copy and paste some of the code from your week 2 homework that
generated a string of HTML.

## The End

Congratulations. You have added dynamic functionality with jQuery to a
static HTML page. As with last week, there are some other techniques
that we'll talk about in the future that we can use to make some of
these tasks easier to manage. But this was a challenging approach to
the problem that was hopefully a good exercise in getting comfortable
with the jQuery API.


# Google Maps

## Objective
Students will be able to make an Embed API request to Google Maps using place, directions, search, or view.

## Google Maps Embed API request
[Documentation - learn to love it](https://developers.google.com/maps/documentation/embed/guide) <br>
`https://www.google.com/maps/embed/v1/MODE?key=YOUR_API_KEY&parameters`
MODES:
* place
  - requires a place name, address, or placeID
* directions
  - requires an origin and a destination
* search
  - requires a search term
* view
  - requires a latitude and longitude

## Steps
1) You're going to want the form element to be responsive to whatever you select. For place, you want one text input. But for directions, you want two text inputs. To start, you want to register an event listener on the option selection. Look up the `.change()` jQuery function. Depending on the selection, the form will change appearances.

2) Within the `.change()` jQuery function, you need to find the value of the select dropdown and use a `switch...case` statements to change text inputs accordingly.

3) To write easy, readable code, you want to separate your functions out as much as possible so you don't have functions that are 50 lines.
For each case of the switch statement, call the following functions: `setplaceinput`, `setdirectinput`, `setsearchinput`, and `setviewinput`.

4) These `set____input` functions should manipulate the text inputs using `.attr()`, `.addClass()`, `.removeClass()`. Hint: use a hide class to make the css `display: none;`

5) Once you have the form responsive to the selection, you'll want to use the information in the forms to set the source attribute of the `<iframe>` holding the Google Map. Create a `.submit()` event listener on the form.

6) Inside of your `.submit()` event listener, you'll again need a `switch...case` statement to detect when you're searching for place, directions, search, or view. Depending on what you're trying to do, you'll need to generate a different URL. Use `.serializeArray()` to get the text input values in an array.

7) Write 4 functions: `genPlaceURL`, `genDirectURL`, `genSearchURL`, `genViewURL` that receive an array of input names and values and return the appropriate string.

8) You'll need to read through the Google Maps documentation to know how to generate the appropriate URL.

9) At the end of your `submit()` function, you'll want `$('iframe').attr('src', URL)`.

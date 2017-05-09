This directory contains a simple HTML and CSS user registration form.  You will use jQuery to add _validation_ to the form.  Validation is logic that checks that user input is correct.

## Guidelines

- Edit [app.js](app.js) only.  Do not change the HTML or CSS files.

- All of your Javascript code should run when the document loads.  This has been set up for you already in [app.js](app.js).

- Submit your completed [app.js](app.js) file.

## Instructions

1. Read over the HTML and CSS files.  Understand the DOM structure and the CSS classes.  

2. Look at [app.js](app.js).  We've already provided two functions for you: `emailAddressIsValid()` and `phoneNumberIsValid()`.  You do not have to understand how these functions work.

3. Add validation to the _First Name_ field: add a key-up callback that checks whether the field value is empty, and if it is not, hides the corresponding error message.  Use the jQuery [`.toggle(display)`](http://api.jquery.com/toggle/#toggle-display) method for this.

4. Add similar validation to the _Last Name_ field.

5. Add validation to the _Email Address_ field.  This should work similarly to the previous two, except call `emailAddressIsValid()` to determine whether the email address is valid.

6. Add similar validation to the _Phone Number_ field. using `phoneNumberIsValid()`.

7. Write a function `checkValid()` that determines whether all four of the fields contain valid inputs, using the same logic as above.  Using this, set the disabled state of the button such that it is disabled if any of the inputs are not valid, [as described here](http://stackoverflow.com/questions/1414365/disable-enable-an-input-with-jquery) like this:

  ```js
  $('#submit').prop('disabled', !isValid);
  ```

  Now add key-up callbacks to all four fields to call `checkValid()`.


If you have completed all steps properly, the pink error messages should disappear one by one as you fill out the form, and the button should become enabled and turn blue once all four are filled out correctly.

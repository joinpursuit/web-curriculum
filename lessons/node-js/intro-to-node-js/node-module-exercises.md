##Setup
- Create a new folder
- Add a `main.js` file to your folder
- Add a `math-module.js` file to your folder

##Exercises
- In your `math-module.js` file add a function called `sum`. The `sum` function should take in two arguments and return the two arguments added together.

  Example:
  ```js
  sum(3, 6); //returns 9
  ```
- Add a `module.exports` object to the bottom of your `math-module.js` file.
- Add your `sum` function to `module.exports`
- In your `main.js` file, use the `require` keyword to import in your `math-module.js` file
- Call the `sum` function from within your `main.js` file and save the results as a new variable
- Add a `console.log` that logs out that saved variable with the results
- Open up your terminal and run your `main.js` file. You should see the output from your `sum` function
- Add three more functions to your `math.module.js` file: a `multiply` function (that takes in two arguments and returns the arguments multiplied together), a `divide` function (that takes in two arguments and returns the first argument divided by the first), and a `square` function (that takes in one argument and returns that argument multiplied by itself).
  Examples:
  ```js
  multiply(2, 5); //returns 10
  divide(20, 10); //returns 2
  square(5); //returns 25
  ```
- Add the `multiply`, `divide`, and `square` functions to `module.exports` in your `math-module.js` file
- In your `main.js` file, use the `require` keyword to import in your new `math-module.js` functions
- Call the three new functions from within your `main.js` file and save the results as new variables
- Add `console.log`s to log out the saved variables with the results
- Open up your terminal and run your `main.js` file. You should see the output from all of your functions
- Create a new file called `strings-module` that contains at least three string functions (for example: return the first letter of a string, reverse a string, etc.) of your choosing.
- Import your `string-module` into your `main.js` file and try calling and console.logging your functions from your `string-module`
- Can you also import your `string-module` into your `math-module` and use it in there? What about vice versa?

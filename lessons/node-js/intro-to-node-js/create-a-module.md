# Create a module
Create a module of functions that you think would be useful to have when building various different apps. Try to think of functions that you find yourself using in different exercises, projects, code wars problems, etc. For example, would a `createRandomNumber` function be useful to have in multiple different apps? What about an `allIndexesOf` function that returns *all* of the indexes of a value in an array (for example, `var arr = ['dog, 'cat', 'dog', 'rabbit']; allIndexesOf(arr, 'dog') // returns [0, 2]`)?

# example
Here's an example of the start of a 'useful array methods' module. The goal would be to continue adding a bunch of other useful array methods (that don't already exist in JavaScript) to this module, so we could easily import them all into any of our projects.

'Useful array methods' is an example of a theme for a module, but you can really choose any theme that you think would be personally useful. Or even have a mostly random collection of functions, if you'd like.
```js
module.exports = {
  // returns arr minus the first item
  tail: function(arr) {
    return arr.slice(1);
  },
  // returns all indexes of a search value within an array
  allIndexesOf: function(arr, searchVal) {
    return arr.map(function(val, index) {
      return val === searchVal ? index : false;
    }).filter(function(val) {
      return val !== false;
    })
  },
  // returns a random value from the array
  randomVal: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
```

# Test it
Try importing your module into some of your other projects. Can you successfully use your module functions with your pre-existing code?

# Debugging

## Chrome Dev Tools
### How to use
Super easy! Add the keyword `debugger` to any file that webpack is using in the `bundle.js` file. When the browser reaches the `debugger` keyword in the code, it will stall the execution of the JavaScript code. Once stalled, you'll be able to interact and inspect variables defined in the scope of where the `debugger` was placed. You can choose to continue the execution of the code by pressing the button that looks like the play symbol.

## Node
Download the `debug` package [here](https://www.npmjs.com/package/debug).<br/>

### How to use
1. `$ npm install --save debug`
2. require the debug module in a file. pass it a secondary argument with whatever it is you're trying to debug.
```js
var debug = require('debug')('sequelize')
```
3. Use the new `debug` variable you just created to console.log a variable. It will colorize the word `sequelize` so that you can easily identify the console.log.
4. You can configure the `debug` function in different ways
```js
debug("%__", object)
```
* `%O` => prints Object on multiple lines
* `%o` => prints Object on a single line
* `%s` => prints a String
* `%d` => prints a Number
* `%j` => prints JSON
5. When running node files now, you have to preface it with `DEBUG=`
* WRONG WAY
```
$ node server.js
```
* RIGHT WAY
```
DEBUG=sequelize node server.js
```

## Resources
* [RisingStack: Debugging Node.js Applications](https://blog.risingstack.com/node-hero-node-js-debugging-tutorial/)
* [Advanced JavaScript Debugging with console.table](https://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable)
*

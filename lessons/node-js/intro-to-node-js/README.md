- title: Intro to Node.js
- topics: javascript, node.js

# Resources
- [Intro to Node.js Slides](https://slides.com/nmadd/intro-to-node-js-and-express-3/live#/)
- [Concise Overview of Node.js Main Topics](http://webapplog.com/node-js-fundamentals-a-concise-overview-of-the-main-concepts/)
- [Intro To Node Modules](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [Node Require and Exports](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)
- [Debugging Your Node.js Code](https://spin.atomicobject.com/2015/09/25/debug-node-js/)
- [Node.js Process Object](http://www.tutorialspoint.com/nodejs/nodejs_process.htm)

## Running files using node.js
Node.js gives us a whole new environment to run our code in. While in the past we've mostly been running our code in the browser, node.js lets us run our code directly in our terminal.

To run a node script, all you need to do is open up your terminal, and type the following commands:
```
node <path-to-file>
```
(<path-to-file> should be replaced with the actual path to your file)
So for example, if you have a folder with a JavaScript file in it called `app.js`, you can run that file by doing the following command:
```
node app.js
```

## Node REPL
You can also run a node.js REPL (read-evaluate-print-loop) environment for testing out simple commands. To enter the REPL, simply type `node` into your command line.

While in the REPL you can do things like create and store variables, and create and excute functions. You can also use the `.load` keyword to load in entire `.js` files. To load a `.js` file, while in the node REPL type in `.load <name-of-file>` and the file should be loaded in (note: you'll need to be in the same folder in order to load in the file by just using it's name - otherwise, you'll need the entire path to the file.)

To exit the REPL, type `control c` twice.

## Importing and Exporting Files Using Node's Module System
Node.js is great for building out large scale projects. You can use node.js to build complex, fullstack web applications that have hundreds or even thousands of files.

However once apps start getting bigger and more complex, organizing them starts becoming a little more crucial. Luckily node.js has a built in module system that makes organizing large apps and pieces of code into multiple files pretty easy. In node.js, each separate `js` file is essentially a separate module.

Basically, the module system lets one `.js` file interact with another `.js` file, and do things like share functions, objects, and variables. Let's take a look at how it works.

Start by reading over the following articles:
- [Intro To Node Modules](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [Node Require and Exports](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)

There are two key concepts for importing and exporting modules: `require`, and `module.exports`.
You can use the `require` keyword to import in other modules. You'll typically save the imported modules as a variable so you can use it elsewhere in your app. To import a file in you'll need to enter the file's path as an argument to `require`. For example, if you had a `math-module.js` file and wanted to import it into a different file in the same folder, you would do the following:
```js
var imported_module = require('./math-module.js');
```
(Note: you can name the variable whatever you want. Also, you can optionally omit the `.js` string at the end of the filename, and it will still work.)

You would now be able to use anything that you exported from the `math-module` file in the file that you imported it into.

if you had a file called `coolFunctions.js` and wanted to import it into a different file in the same folder, you would do the following:
```js
var coolFunctions = require('./coolFunctions.js');
```

Importantly, you also need to export things from the files that you want to import in. To export modules you'll need to use the special `module.exports` keyword. Ultimately, every time you export something you are exporting an object.

There are a few different ways to structure your exports. All of the below essentially do the same thing:
```js
function sum(a, b) {
  return a + b;
}

function multiply() {
  reurn a * b;
}

module.exports = {
  sum: sum,
  multiply: multiply
}
```
```js
module.exports = {
  sum: function sum(a, b) {
    return a + b;
  },
  multiply: function multiply() {
    reurn a * b;
  }
}
```
```js
function sum(a, b) {
  return a + b;
}

function multiply() {
  reurn a * b;
}
module.exports.sum = sum;
module.exports.multiply = multiply;
```
```js
module.exports.sum = function sum(a, b) {
    return a + b;
  }
module.exports.multiply = function multiply() {
    reurn a * b;
  }
}
```

## Exercises
- [Node.js Module Exercises](node-module-exercises.md)

## Challenge Project
- [Create a module](create-a-module.md)

## Intro to npm
One of the most powerful features of node.js is it's package management system. You've seen how easy it is to create modules, and luckily thousands of people have taken advantage of that by creating their own modules and uploading them to the cloud so others can download and use them.

npm (which stands for node package manager) is the best way to install, share and distribute those modules (aka packages). You can checkout the [npm website here](https://www.npmjs.com/) and a list of some of the [most popular packages here](https://www.npmjs.com/browse/star).  

To install packages using npm, you first need to use your terminal to `cd` into the folder you'd like to install the package in. Then, still in your terminal, you need to type in the command `npm init`, which will create a `package.json` file for you. The `package.json` file basically is a config file that just keeps track of all of the packages you have installed. Lastly, you need to enter in `npm install <name-of-package>`, where you replaced <name-of-package> with the specific package you want to install. You can find package names on the npm website.

Let's check a few npm packages out:
- [express](https://www.npmjs.com/package/express)
- [socket.io](https://www.npmjs.com/package/socket.io)
- [chalk](https://www.npmjs.com/package/chalk)
- [moment](https://www.npmjs.com/package/moment)
- [figlet](https://www.npmjs.com/package/figlet)

## package.json file
The `package.json` file is automatically created when you run the  `npm init` command. The `package.json` file basically just keeps track of all of the node modules that you've installed. When you run the `npm install` command with the special `-s` character (which stands for 'save') those modules will automatically be saved in your `packge.json` file.

## node.js process object
`process` is a global object in node.js that gives you helpful information about what your program or script is doing behind the scenes.

The `process` object has a lot of properties but the one we'll be focusing on most is `process.argv`. The `process.argv` property basically returns an array of all the arguments you type into your command line in your terminal when you run a script.

So if you create a `main.js` that just contained the following code:
```js
console.log(process.argv);
```  
And then typed the following into your command line in your terminal (while in the same folder as your `main.js` file):
```
$ node main.js hello world
```
The following would be logged to the console (the first two element of the array are the file paths for `node` and `main.js`):
```js
[ '/usr/local/Cellar/node/6.1.0/bin/node',
  '/Users/Nate/Dropbox (Personal)/Code/C4Q/AC3.3/lessons/node-js/intro-to-node-js/main.js',
  'hello',
  'world' ]
  ```

# Exercises
- [chalk module exercises](chalk-exercises.md)

# Project
- [Block letter logger](ascii/ascii.md)

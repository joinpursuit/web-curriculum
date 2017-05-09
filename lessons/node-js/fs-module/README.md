- title: Intro to Node.js fs module
- topics: javascript, node.js

# Resources
- [Tips for Organizing Your Files](https://slides.com/nmadd/tips-for-organizing-your-files/live#/)
- [Node fs Module](http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm)
- [Node Core Modules](http://www.tutorialsteacher.com/nodejs/nodejs-modules)

# Lecture
## Tips for Organizing Your files
- [Tips for Organizing Your Files](https://slides.com/nmadd/tips-for-organizing-your-files/live#/)

## Intro to core node.js modules
Node.js comes prepacked with a bunch of built-in modules. Some of the built-in modules include:

- `fs` (for manipulating the file system)
- `path` (for parsing and dealing with file paths)
- `http` (for creating node.js servers)

You can see a list of more core node.js modules [here](http://www.tutorialsteacher.com/nodejs/nodejs-modules).

We're first going to look at the `fs` module.

## fs module
The `fs` module lets you interact with your computer's file system directly. In other words, it lets you do things like read and write text files (including files that include code, and files that just include plain text like word documents), create new folders, and reorganize folders.
```js
var fs = require('fs');

```
*Reading files:*
```js
fs.readFile('new-file-2.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
});
fs.readFile('new-file-2.txt', function(err, data) {
  if (err) throw err;
  console.log(data.toString());
});
```
*Writing files:*
```js
fs.writeFile('new-file.js', 'Will this be in the file?');
```
*Reading directories:*
```js
fs.readdir('.', function(err, data){
  if(err) console.log('Error!', err);
  console.log(data);
});
```

*Making directories:*
```js
//Without a callback
fs.mkdir('new-repo');
//With a callback
fs.mkdir('another-new-repo', function(){
  console.log('Created another new repo!')
});
```
*Removing directories:*
```js
//Without a callback
fs.rmdir('new-repo');
//With a callback
fs.rmdir('another-new-repo', function(err, data){
  if(err) console.log('Error!', err);
  console.log('Deleted another new repo!')
});
```
*Renaming files and folders:*
```js
fs.rename('new-file-2.txt', 'not-a-new-file.txt');
```
*Watching files:*
```js
fs.watch('new-file.txt', function(eventType, filename){
  console.log(eventType + ' in ' + filename);
})
```

## `__dirname` variable
`__dirname` is a special variable in node.js that contains the path for the specific directory that you are currently in.

## Sync vs Async
A lot of `fs` methods come in two styles - async, and sync. Sync (which stands for synchronous) basically just means the operations happen in sequential order. Async (which stands for asynchronous) means they can happen in any order.

## Exercises
- [fs module exercises](fs-module-exercises/README.md)

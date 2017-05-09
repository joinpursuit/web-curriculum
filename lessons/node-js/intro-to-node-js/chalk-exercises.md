# Setup
- Create a new folder
- Add an `app.js` file
- Open your terminal and `cd` into the folder you just created
- In your terminal, type in `npm init`, which should start setting up a package.json file for you. Keep on hitting enter until it stops asking questions. You should now see a `package.json` file in your folder.
- In your terminal, enter `npm install chalk`. That should install the `chalk` module for you
- In your `app.js` file, require in the `chalk` module (hint: with npm modules you can just enter in the name of the module into your require, you do not need the entire path)
- Read over the [chalk module documentation](https://www.npmjs.com/package/chalk)

# Exercises
1. Create a function called `helloBlue` that will console.log the string 'Hello world' in blue
2. Create a function called `helloRed` that will console.log the string 'Hello world' in red
3.  Write a function called `stringToColor`. It should take in two arguments: a string, and a color. The function should log out the string to the console in the given color. So for example, `stringToColor('this is a test', red)` would log out "this is a test" to the console in red.
4. Write a function called `evensBlueOddsYellow` that takes in a string as an argument. It should log out all even indexed words in blue and odd words in yellow. For example, `evensBlueOddsYellow('this is a test')` would log out 'this' in yellow, 'is' in blue, 'a' in yellow, and 'test' in blue.
5. Write a function called `angryText` that takes in a string as an argument. It should log out that string to the console in red, underlined, and bold, all in capital letters.
6. Write a function called `backgroundCyan` that takes in a string as an argument, and logs that string out to the console in white font and cyan background-color (look at the chalk documentation to see how to change background colors).
7. Write a function called `boldFirstUnderlineLast` that takes a string as an argument and logs out the string to the console, with the first word in bold and the last word underlined.
8. Write a function called `commandLineChalk` that lets you type in a string in the command line while you're running this file in your terminal. The function should log out whatever was entered into the terminal, in a color of your choice. Try adding more command line argument options so you can specify the color, background color, etc. (hint: use `process.argv`);

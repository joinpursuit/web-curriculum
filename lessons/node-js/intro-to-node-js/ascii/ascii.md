### Setup
- Create a new folder
- Add an `app.js` file
- In your terminal, `cd` into your new folder
- Type in `npm init` and setup your `package.json` file
- Still in your terminal, `npm install figlet` and `npm install prompt`
- `require` figlet and prompt into your `app.js` file
- Read over the [figlet](https://www.npmjs.com/package/figlet) and [prompt](https://www.npmjs.com/package/prompt) documentation

### Ascii Text
For this project you will write a node app that will prompt the user for input and display it as ascii art. The functuonality of the final program is as follows:
1. The user will enter 'node ascii' to run the program.
2. The following prompt will appear that will let the user enter some text, which will eventually be displayed in a cool font in the console:
```
prompt:  Enter some text:
```
3. Following the user's input, A second prompt will appear that will let them choose their font style (out of all of the options that are offered in the figlet npm documentation):
```
prompt:  Enter a font name:  (Standard):
```
4. If they don't select any font, their text will be rendered in the standard figlet font, like this:
```
| |__   ___| | | ___
| '_ \ / _ \ | |/ _ \
| | | |  __/ | | (_) |
|_| |_|\___|_|_|\___/
```
5.  Otherwise, the text will log out whatever the user typed into the terminal in the figlet font of their choosing. If the user enters an invalid font, a list of all possible fonts will be displayed and the user will be prompted again.

### Instructions
Your project will make use of the node modules [figlet](https://www.npmjs.com/package/figlet) and [prompt](https://www.npmjs.com/package/prompt).

We will create several versions of the project.

#### Version 1
Prompt the user for text only. In other words, you should not prompt them to choose a font. Just prompt them to input some text, and then log that text to the console using the standard figlet font, Use `prompt.get(['text']...` and `figlet(result.text...`

#### Version 2
Prompt the user for text and font. Let the user choose and type in their font, and display the font chosen by the user (If no font is supplied figlet will automatically use the standard font). Use  `prompt.get(['text', 'font']...` and `figlet.text(..`.

#### Version 3
Create a custom prompt messages (`Enter some text` and `Enter a font name`). To accomplish this, you will need to create a `schema` object, which will in turn contain a properties object, which will in turn contain an object for each variable you wish to get as an input from the user. refer to the npm page for more details.

#### Version 4
Make sure the user enters a valid font name. First, use `figlet.fontsSync()` to load an array of the available fonts at the begginning of your app. Next, add a [conform](https://github.com/flatiron/revalidator#conform) function inside your `schema` for the `font` variable. Inside the function, check the user input against the fonts array. If the font is valid, return `true`. Otherwise, log the available fonts to the console.

#### Bonuses
1. `require` in the chalk npm module and let the user choose what color they want their text to be logged out in
2. Make sure the user enters some input for the text.
3. Display `Standard` as the default value when prompting the user.
4. Use [prettyjson](https://www.npmjs.com/package/prettyjson) to make a prettier display of available fonts.

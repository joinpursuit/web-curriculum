# Setup
- Create a new folder
- Add an `app.js` file
- Open your terminal and `cd` into the folder you just created
- In your terminal, type in `npm init`, which should start setting up a package.json file for you. Keep on hitting enter until it stops asking questions. You should now see a `package.json` file in your folder.
- In your terminal, enter `npm install socket.io`. That should install the `socket.io` module for you
- In your `app.js` file, require in the `socket.io` module (hint: with npm modules you can just enter in the name of the module into your require, you do not need the entire path)
- Read over the [socket.io module documentation](https://www.npmjs.com/package/socket.io)

# Instructions
User socket.io to build a simple chat app. Your app should let two people type in text, and it should automatically update text on both ends when either user enters something. Follow this guide for more info: [Socket.io chat app](http://socket.io/get-started/chat/)

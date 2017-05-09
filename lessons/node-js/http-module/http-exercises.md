# Node.js Server Exercises
## Setup
- Create a new folder called `node-server-exercises`. Add all of the following files into that folder
- To run a server, you will just need to `cd` into that folder and run the specific server file by running `node <name-of-file>` from your command line. So if your server file is named `server-1.js`, run `node server-1.js`
- Once you start running your server it will keep running until you manually kill the process. To stop a server you can type in `control c` from your command line. You will need to stop the previous server before you run a new server

## Exercises
- Create a `server-1.js` file. Within the file create a server that just serves the sentence "Hello World" in plain text. Set your server to listen to port 3000, and use port 3000 for the rest of your servers throughout the exercise
- Create a `server-2.js` file that serves two HTML elements: and h1 element, and a paragraph element. The `h1` element should say 'Welcome to My Site' and the `p` element should say 'Content coming soon...'. Both html elements should be included directly in your `server-2.js` file, not in separate files.
- Create a separate `index.html` file. In the `index.html` file create an `h1` element, a `p` element, and a `button` element, and add some text of your choosing to each element. Then create a `server-3.js` file that serves up the `index.html` page
- Create another `html` page and call it `page2.html`. Add an `h1` tag into it that says `Welcome to Page 2`. Now create a `server-4.js` file that will serve up the `index.html` page if you go to `localhost:3000/`, and will server the `page2.html` page if you go to `localhost:3000/page-2`
- Add an `a` tag to your `index.html` page, and give the `a` tag an `href` attribute of `href="/page-2"`. Add a similar `a` tag to your `page2.html` file that links back to `index.html`. Reload your `server-4.js` and check to make sure your links work
- Try adding 1-2 more HTML pages and adding links to each html page that lets you navigate to any page from any page. Create a `server-5.js` file that serves up all of your html pages

## Challenges
- Create a node.js server for your personal site (that you made earlier this week) and host it yourself instead of using github pages
- Choose another previous project (such as the pokemon project, google maps project, etc.) and create a server for it.
- Setup a server that can receive data from a request (you'll need to use `request.on`) and automatically write that data as a response to your web page. You'll need to use either the `http.request` module or the npm request module to manually create a `post` request to your site in order to test it out.

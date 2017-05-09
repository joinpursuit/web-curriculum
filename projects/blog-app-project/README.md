# Blog App Project
Your overall goal is to build a simple blog app (from scratch) that will display posts and let you easily create and save new posts. Basically, a simplified version of something like Tumblr.

The project will be broken up into steps. You should aim to complete each step in roughly 1 - 2 days.

# Step by Step Guide
- [Step 1](#step-1)
- [Step 2](#step-2)
- [Step 3](#step-3)
- [Helpful Tools](#helpful-tools)
- [Resources](#resources)

# Step 1

Get your database and server setup to send a "Hello World" response when you visit the homepage ('localhost:3000/') and a JSON response of at least 3 posts from your database when you visit a '/posts' page ('localhost:3000/posts').


- [Install MongoDB, Mongoose, Express](./docs/installing-mongo-mongoose-express.md)
- [Create your project organization/structure](./docs/file-structure.md)
- [Create a `server.js` file that](./docs/setting-up-server.md):
  - Creates a connection to mongoose database connection
  - After connected to a database, uses `app.listen` to create a basic express server
- [Create a 'posts' model file that sets up the schema and model for blog posts](./docs/schemas-and-models.md)
- [Setup basic routing](./docs/express-routing-intro.md):
  - Create a route that sends a response of 'Hello World' when you visit the home page ('/')
  - Create a route that sends a response of all of the posts in your database  when you visit the posts page ('/posts')
  - Create a route that creates a blog post and saves it to your database when you send a `post` request ot your posts page ('/posts')

# Step 2

Connect React to your project and add an input form React component that lets you submit new blog posts.

* Get webpack file configured so we can use React & ES6
* Install the necessary node packages
* Setup express to serve an index
* Create a React component with a text input and submit input. When you submit, it should take the text and send it off in an AJAX request to your server to be saved in the database.
* Have a React component that displays all posts
* Practice debugging

## Challenges:
* add a delete button to posts. When you click it, the post should be removed from your page and deleted from your database.
* add an 'archive' React component. It should have links to individual posts and when you click on a link, it should show that specific post.

# Step 3

Create individual pages for blog posts. You should have a list off all of your blog posts on your home page and when you click on the title of one of the blog posts it should take you to that individual blog post, alone on a page.

For example, you should have a list of all your posts:

<img src="http://i.imgur.com/Ckhx8kn.png" width=350 />


<br />
<br />
<br />

**And when you click on a post, you should go to a page that just has that specific post:**

<br />
<br />
<br />



<img src="http://i.imgur.com/EEe0TIB.png" width=350 />

<br />
<br />
- Add a backend api route for getting a specific post. In other words, you should have an express route that finds a specific post in your database by looking up its ID, and res.sends the data from that database query. You will need to use [Express route parameters](http://expressjs.com/en/guide/routing.html) and the Mongoose [`findByID` or `findOne` method](http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html).
- [Install `react-router`](https://github.com/ReactTraining/react-router)
- Create a `react-router` route that lets you go to routes that have an ID as a param. You will need to use [React Router params](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/06-params).
- Use the post ID to make an AJAX call to your backend api, to hit your post route for finding and returning a specific post. You will need to [make a jQuery AJAX call from a `componentDidMount`](http://stackoverflow.com/questions/29990809/handling-ajax-with-react) in one of your components
- Create a React component for displaying a single post. Use it to display your post on the page

## Challenges:
- Create a navbar that lets you easily navigate between all your pages
- Add the ability to edit your posts directly on your website. In other words, add an 'Edit' button to your posts that lets you edit and update them then saves the edits to your database
- Add in a 'search' bar to in your navbar that lets you search through your blog posts. It should search through your database to find posts that match the search query, and display the results


# Helpful tools:
- [Postman](https://www.getpostman.com/): Send `get` and `post`requests to your site to easily test your api
- [The mongo shell](./docs/mongo-shell.md)
- [Nodemon](https://github.com/remy/nodemon): Automatically reload your server file on changes
- [JSON Viewever Chrome Extension](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
- [LiveReload](./docs/live-reload.md): automatically reload your browser everytime you change your frontend

# Resources
- [Express Guide](http://expressjs.com/en/guide/routing.html)
- [Mongoose Guide](http://mongoosejs.com/docs/guide.html)
- [Scotch.io Intro to Mongoose](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)
- [Scotch.io Building a RESTful API using Express and Node](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)

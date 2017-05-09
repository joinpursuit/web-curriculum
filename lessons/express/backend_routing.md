# Express.js and Backend Routing

# Goals
* Get webpack file configured so we can use React & ES6
* Install the necessary node packages
* Setup express to serve an index
* Create a React component with a text input and submit input. When you submit, it should take the text and send it off in an AJAX request to your server to be saved in the database.
* Have a React component that displays all posts
* Practice debugging - what is debugging?
* Challenge - add a delete button to posts. When you click it, the post should be removed from your page and deleted from your database.
* Challenge - add an 'archive' React components. It should have links to individual posts and when you click on a link, it should show that specific post.


## Vocabulary
* MVC
  * Model: think backend database and tables
  * Controller: think middleman that process requests and queries database
  * View: think frontend browser
* CRUD
  * Create a new resource or row in a database table
  * Read multiple rows or a single resource  
  * Update a resource
  * Destroy a resource
* [RESTful API](https://spring.io/understanding/REST)

## HTTP Verbs
[Undestanding HTTP](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
| Route |	HTTP Verb	| Description |
---|---|---
 /api/dogs  |	GET	  | Fetch information on all the dogs.
 /api/dogs	| POST	| Create a single dog.
 /api/dogs/:dog_id	| GET	| Fetch a single dog.
 /api/dogs/:dog_id	| PUT	| Update a dog with new info.
 /api/dogs/:dog_id	| DELETE| 	Delete a dog.

## Instructions

## NPM & package.json
We are going to need to install some more packages to expand the functionality of our project.
```
$ npm install -save ...
```

## Webpack Configuration
Place the webpack.config.js file into the root directory.
```js
module.exports = {
  entry: "./front/app.js",
  output: {
    path: "./bundle",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
```

## AJAX Request
We are going to be expanding our AJAX requests to handle other HTTP verbs. We do so by changing the type of the AJAX call. In addition, we have a data field that we pass an object to.
```js
$.ajax({
  url: '/posts',
  type: 'POST',
  dataType: 'json',
  data: {key: value}
})
```

## Express - serve index.html file
```js
const rootPath = path.join(__dirname, "../../")
res.sendFile(rootPath + "./front/index.html");
```

## Express - serve static files
Create a bundle file in the root directory. Configure your webpack to place the bundle.js file into that folder.
```js
app.use(express.static('bundle'))
```

## Express - req.body
[Documentation](http://expressjs.com/en/api.html#req.body)<br/>
When you send out an AJAX request with data, you need to use `body-parser` with your `app` to retrieve that data.  
```js
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
```

## React Review
You're going to need to construct a React component that has an input field within a form. Upon submission of the form, a callback with an AJAX request will be called. The AJAX request will package the information in the form and send it over to the server.
```js
<form
  onSubmit={AJAXREQUEST}>
  <input
    type="text"
    onChange={HANDLECHANGE}
    value={STATEVALUE}/>
  <input type="submit"/>
</form>
```

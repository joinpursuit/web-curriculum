# How to organize your app's file structure
There many different design patterns for how to organize your app's file structure. Let's look at two of the most popular ways to organize Express apps:

1. By function. For example, splitting your code into separate folders for your models, routes, and views (aka your database, server, and user interface).

2. By feature. For example, if you were making a blog app, you could split your code into separate folders for posts, users, home page, etc.

Personally, I like to organize by feature, so would setup my file structure something like this:
```
- blog-app
  - backend
    - home
      - home-router.js
    - posts
      - posts-model.js
      - posts-router.js
    - server.js
    - index.js
  - frontend
    - components
    - app.js
  - node_modules
  - package.json
  - README.md
```

However you could also organize it by function, which would look something like this:

```
- blog-app
  - server
    - models
      - posts-model.js
      - home-router.js
      - index.js
    - routes
      - posts-router.js
      - index.js
    - server.js
  - client
    - components
    - app.js
  - node_modules
  - package.json
  - README.md
```


Here are some example file structures for Express apps:
- [functional express code structure](https://github.com/focusaurus/express_code_structure)
- [node-express-mongoose-demo](https://github.com/madhums/node-express-mongoose-demo)

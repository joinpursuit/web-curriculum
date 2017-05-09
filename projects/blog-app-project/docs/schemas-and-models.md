# Scehmas
- [Mongoose Schema Docs](http://mongoosejs.com/docs/guide.html)
Schemas are like blueprints for our documents. They show us exactly what type of data to expect. Here's an example of a simple blog post schema:

```js
const mongoose = require('mongoose');
const blogPostSchema = mongoose.Schema({
  title: String,
  text: String
});
```

What other information do we need in our blog posts? What about date? Author? Tags? Can you think of anything else? If so, you should add it to your schema from the start.

# Models
- [Mongoose Models Docs](http://mongoosejs.com/docs/models.html)
Models let us actually interact with our database. They basically take our schemas and register them with our Mongo database, which gives us functionality to use methods like `find` and `create` to search through and update our database.

Here's how to create a model:

```js
//The first argument is the name of the model
//The second argument is the schema
//Make sure you require in mongoose. You typically want to do this in the same file as your schema
mongoose.model('Post', blogPostSchema);
```

More info:
- [Schemas vs Models](http://stackoverflow.com/questions/22950282/mongoose-schema-vs-model)

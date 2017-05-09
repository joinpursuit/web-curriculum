# Installing MongoDB
MongoDB is a NoSQL database:

- [Docs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

To setup MongoDB on a Mac using homebrew, perform the following steps:

- `brew install mongodb`
In a separate terminal tab (you will need to leave this tab running in the background):
- `mongod`
If that doesn't work try:
- `sudo mongod`

# Installing mongoose
Mongoose is an 'object data modeling' library that makes it much easier to interact with MongoDB databases by making it easy to do things like find, update, and shape our data:

- [Mongoose quick start docs](http://mongoosejs.com/docs/)

To install mongoose, run the following from your terminal (make sure you are in the directory that you want to install it in):
- `npm install mongoose --save`

# Installing Express
Express is a very popular server building framework build on top of the Node.js `http` module. Express makes it easy to build servers and APIs using pure JavaScript:

Install: `npm install express --save`

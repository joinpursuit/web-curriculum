# Running the mongo shell
The mongo shell is a helpful tool for testing out your databases and easily viewing what's in them.

To use the mongo shell, open up a separate terminal tab and run the `mongo` command. You should see a word with '>' at the end, which means you're in the `mongo` REPL.

When in the `mongo` shell you can type 'help' at anytime to get a guide of all possible commands.

Here's a list of helpful terminal commands to run while using the mongo shell:

- `show dbs` will show you a list of all of the databases you've created (note: your datbase will not show up in this list until after you've created and saved your first document)
- `use <name-of-db>` will switch you to using a specific database (for example, if you had a database called 'animals' you would do `use animals`)
- `show collections` will show you a list of all of the collections in your current database
- `db.<name-of-collection>.find()` will show you a list of all of the documents in a specific collection (for example, if you had an 'elephants' collection in your animals database you would do `db.elephants.find()`)

Find some more documentation here:
- [Mongo shell quick reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
- [Mongo shell for beginners](http://www.hongkiat.com/blog/webdev-with-mongodb-part2/)

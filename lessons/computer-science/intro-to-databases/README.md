# Intro to Databases
A database is basically an organized collection of data. Databases let us save data over long periods of time, and keep it neatly organized for retrieval and analysis. Most websites and apps use some sort of database.

# Overview of Database Management Systems
Database management systems are software applications that allow for a way for users to collect and interact with data. There are many different database management systems out there. Some of the most commonly used ones are:

- MySQL
- PostgreSQL
- MongoDB
- Oracle

However there are literally hundreds of others.

# Relational vs Non-relational (SQL vs NoSQL)
There are generally two major paradigms that database systems use for organizing data: relational and non-relational.

## Relational databases (SQL)
Relational databases basically store data in spreadsheet style structures. In other words, data is organized into columns and rows, and stored in different tables, similar to different sheets in a spreadsheet.

For example, if you had a database that stored movie information, you might have one table that has information with movie info (title, year released, etc.) and a separate table with actor info (name, date of birth, etc.). Each individual entry in all of the tables will typically have a unique ID, which is a critical part of querying and looking up data.  

In relational databases, to get data that involves information from more than one table (for example, 'which actors were in Zoolander?') you have to perform something called a 'join', which basically dynamically joins two tables together and returns you some information from both.

These types of databases are called 'relational' because you end up having many different tables that all have some sort of relation to each other. Typically, the way that you know how tables relate to each other (and know how to join them) is by storing the unique ID from one piece of information as a field for another piece of info.

## Non-relational databases (NoSQL)
Non-relational databases are much more open ended than relational databases. In many non-relational databases you can also form different table for different categories of data, but you don't necessarily need to. Non-relational databases generally let you store data in pretty much any format you want, similar to as if you were just storing data in a JSON object.

# Single Source of Truth (eliminating redundancy)
As we've seen with Redux, having a 'single source of truth' (in other words, a single place where you save your data) can help dramatically simplify your apps. The same principle holds true for databases. Eliminating redundancy (or in other words, avoiding saving similar data in more than one place) is a good guiding principle when designing databases.

# Intro to Schemas and Models

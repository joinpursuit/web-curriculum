# Intro to Databases

Databases let us save data and keep it organized for retrieval and analysis. Most websites and apps use some sort of database to persist information. In the first part of our course, it was difficult to save information after we refreshed the page. Databases allow for us to do so quite easily.

# Overview of Database Management Systems
Database management systems are software applications that allow for a way for users to collect and interact with data. There are many different database management systems out there. Some of the most commonly used ones are:
* MySQL
* PostgreSQL
* MongoDB
* Oracle
<br/>
However there are many others.

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
As we've seen with Redux, having a 'single source of truth' (a single place where you save your data) can help dramatically simplify your apps. The same principle holds true for databases. Eliminating redundancy (avoiding saving similar data in more than one place) is a good guiding principle when designing databases.

# Intro to Schemas and Models
Let's take [Facebook](https://www.facebook.com/) as an example. On the sign-up form, there are multiple fields that are required to make an account.

FirstName | LastName | Phone | Email | Password | Birthday | Gender
----------|----------|-------|-------|----------|----------|-------
Harry     | Potter   |(123) 456-7890 | harryp@hogwarts.com | helloworld | 02291980 | Male
Ron       | Weasley  |(012) 345-6789 | ronw@hogwarts.com   | helloworld | 03151990 | Male
Hermione  | Weasley  |(024) 681-3579 | ronw@hogwarts.com   | helloworld | 03151990 | Female

# Instructions
Pick any website - find 20 things that you think need to be saved into a database.
* Instagram  
* Twitter
* Linkedin
* Soundcloud


# Database Schema
A schema describes how you organize your database. You need to decide on a few things when defining your schema:
* how many tables?
* what do you want your tables to keep track of?
* how many columns within each table?
* what kind of information do you want each column to store?
**schemas can always be changed later on, so you don't necessarily have to get everything about your database right the first time around.**

# Object Relational Mapping (ORM)
Takes a row in a database and converts the entire row into an object with keys corresponding to the column and values corresponding to the keys in the database. For example

FirstName | LastName | Phone | Email | Password | Birthday | Gender
----------|----------|-------|-------|----------|----------|-------
Harry     | Potter   |(123) 456-7890 | harryp@hogwarts.com | helloworld | 02291980 | Male

The row in the table above would get converted to an object depicted below.

```js
{FirstName: 'Harry', LastName: 'Potter', Phone: (123) 4567890, Email: 'harryp@hogwarts.com', Password: 'helloworld', Birthday: 02291980, Gender: 'Male'}
```

# Data Types
* BIGINT
* INT
* FLOAT
* DATETIME
* DATE
* TIME
* VARCHAR(140)
* TIMESTAMP

# SQL Commands
* SELECT
* WHERE
* AND / OR / IN
* DISTINCT
* ORDER BY
* LIMIT
* SUM / AVG  

# EXERCISES
* [Learning SQL Textbook](http://www.r-5.org/files/books/computers/languages/sql/mysql/Alan_Beaulieu-Learning_SQL-EN.pdf)
* [SQLZoo](http://sqlzoo.net/)
* [SQLBolt](https://sqlbolt.com/)
* [SQL Teaching](https://www.sqlteaching.com/)

# MariaDB and MySQL
* [Setup](https://mariadb.com/blog/installing-mariadb-10010-mac-os-x-homebrew)
* [execute SQL script](http://stackoverflow.com/questions/4003034/execute-sql-script-to-create-tables-and-rows)
* [world.sql](http://stackoverflow.com/questions/719259/sample-database-for-exercise)

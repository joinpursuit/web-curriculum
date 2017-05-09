## heroku
heroku is also simple deployment software

- [heroku node.js docs](https://devcenter.heroku.com/categories/nodejs)
- [Heroku Sequelize Docs](http://docs.sequelizejs.com/en/1.7.0/articles/heroku/)

### setup
- download the heroku [command line interface](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- once installed, create a heroku account on [heroku.com](https://www.heroku.com/home)
- after you've created an account, login on your command line by running `heroku login`

### package.json
add the following to your package.json file:
- this will let Heroku know that you want to create a Node.js environment:
```js
"engines": {
  "node": "7.4.0"
}
```
- you can also add an optional `"heroku-postbuild"` field which will get run after `npm install`. Here you can add things like `webpack` or run `seed` files - basically anything you'd want to run before `npm start`


### server.js
In your `server.js` make the following changes:
- change you `app.listen` to include `process.env.PORT || 3000` (replace '3000' with whatever your port number is). You need to include `process.env.PORT` because Heroku uses this to dynamically assign a port number:
```js
app.listen(process.env.PORT || '9999', () => console.log('Listening on port 9999'));
```

### heroku create 
To create your app on heroku, run the following command (from within your main project repo):
- `heroku create`

if you now go to heroku.com and look at your projects, you should see a newly created project with a weird somewhat random name (you can chane this name on project settings on the heroku website)


### database setup
- Similarly, change your Sequelize database connection to the following:
```js
let sequelizeConnection = process.env.NODE_ENV === 'production' ? new Sequelize(process.env.DATABASE_URL) : new Sequelize('postgres://natemaddrey@localhost:5432/music-db');
```
- Then, from the command line run `heroku addons:add heroku-postgresql:hobby-dev`. This will create a new database instance for your deployed app.

### deployment
- to deploy new code, run `git push heroku master`
- then open the URL that heroku gives you in your browser (it can sometimes take up to 30 minutes to go live)

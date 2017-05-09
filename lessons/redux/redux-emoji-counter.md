# Setup
- clone the simple-react-setup and rename the folder 'redux-emoji-counter'
- add in Redux by using `npm install redux`
- add in [emoji.css](http://emojicss.com/) by following in his link tag `<link href="http://emojicss.com/emoji.css" rel="stylesheet">` into your `index.html` page. Be sure to look over the [emoji.css docs](http://emojicss.com/)

# Instructions
- Start by setting up a basic counter (without emojis). You should have a '+' button and a '-' button, as well as a counter that displays a number. When you click on one of the buttons a Redux action should be triggered, which should update your store and therefore update the counter on your page.
![basic counter](http://i.imgur.com/N27siqo.png)
- Add in an emoji. Your counter should display a number, as well as emojis to match the current count (for example, if the counter is 5, you should show 5 emojis, if it's 11 you should show 11 emojis, etc.). How can you get your page to display a certain amount of emojis based on your counter number? Hint: you will probably need some way of dynamically creating classes to make different emojis display dynamically. Checkout the [classNames](https://github.com/JedWatson/classnames) module.
![emoji counter](http://i.imgur.com/nwg0sLk.png)
- Add in multiple emoji counters. You'll probably want an 'EmojiCounter' component to make it easy to create new counters with different emojis
![multiple emojis](http://i.imgur.com/vMRyqld.png)
- Try to refactor your app to split up your actions, reducers, and store into three separate files (if you haven't done so already). You'll need to use imports/exports to

# Bonuses
- Add buttons to be able to add or subtract 2 emojis at once. What about adding/subtracting 5 emojis at once? 10?
- Add in react-router and add some different routes for different emojis

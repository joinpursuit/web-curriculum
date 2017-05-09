# Intro
Keep updating your store listing app that you started working on earlier this week. Refactor it to make the following changes:

# Instructions
- Create a variable called `data` that holds a single object. The object should have one property called `items`. `items` should hold an array of objects that represent the items in your store. That was a lot to take in at once, so let's take a look at an example to model your data after:

```js
var data = {items:
  [
    {title: 'Tamagotchi', price: 100, description:"Your new best friend", img: 'http://www.musthavetoy.com/wp-content/uploads/tamagotchi4_small.jpg', featured: true, new: true},
    {title: 'Princess Beanie Baby', price: 10000, description:"Your old best friend", img: 'http://www.tycollector.com/the-scoop/scoop-images/princess-history.jpg', featured: false, new: true}
  ]
}
```

- Add a `getInitialState` method to your parent component (aka the main component that you will be rendering to your screen, and that holds all your other components). Make your `getInitialState` just return your `items` object.

- Update your app to pass down all of the data to your components from the `items` object in your state. You will need to use `this.props` to pass the data down, and you  will need to use `this.state` to initially access the data. Once you are done, you should not have any titles, descriptions, image srcs, or any other data hardcoded in your components.

-  Add a button to your app. When you click on that button it should add a new item to your store, which should be instantly displayed on your site. If you click on the button multiple times it should just keep on adding more items.


# Bonuses


- Create a new 'UserProfile' component. Add things like a profile picture, username, short personal description, and anything else you think would be good to include in a profile. However, do not include this specific information directly in the component. Add another property called `userInfo` to your `data` object (similar to the `items` property), and pass the data down through props to your `UserProfile` component. Add your `UserProfile` component to the top of your app so it shows up at the top of your rendered page.  

- Add a form to your site that has separate fields for `Title`, `Description`, `Image src`, and any other fields you need for your items. If you fill out the form and hit `submit` that new item (with the info you entered into your form) should be rendered onto your page.

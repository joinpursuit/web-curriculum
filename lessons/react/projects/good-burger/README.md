## Good Burger App
We'll be building a website for a restaurant (we'll be using data from the CLASSIC movie Good Burger, but feel free to customize your app however you'd like).

When finished , the app should look something like this (note: the below app has not been styled):

### Home page:
![home](http://i.imgur.com/m7GGgGZ.png)

### Menu page:
![menu](http://i.imgur.com/zuW5pTM.png)

### About page:
![about](http://i.imgur.com/g0hcxDP.png)

## Setup
- Clone the following repo: https://github.com/nmadd/good-burger-setup and rename it to 'good-burger'
- Install 'react-router' in your new repo using the following command: `npm install react-router --save`
- Also `npm install` to install all of the other node modules

## Instructions
Below is the suggested ordering of how to build your app. However, these are just guidelines and the order is really up to you. For example, if you would like create the routes before you build out the componenets, or even before you structure your state, you are free to do so:

**1. Understanding the data:**

Read over the `data.js` file. This is where we'll be getting the data we need for our app. It's a good habit to always start by looking at our data and thinking about how we're going to use it to structure out app, because the architecture and layout of our app is always going to depend on the data that's powering it.   

This data is based on the movie [Good Burger](https://en.wikipedia.org/wiki/Good_Burger), but feel free to change it and customize it to a restaurant of your choice, if you'd like.

**2. Scaffolding the components:**

We'll need the following components:
- `App`
- `NavBar`
- `Home`
- `Menu`
- `About`

For now, just create the files for these different components, and setup basic render functions that just render some placeholder text. We will come back and start building them out after have figured out how we will structure our app's `state`.

**3. Structuring state:**

We will hold state on three separate components: the data for the menu will be held in the state of the `Menu` component, the data for the about page will be held in the state of the `About` component, and the data for the `Home` page will be held in the `Home` component.

To get the data for state, do the following:

- Create a `getInitialState` property in your `Menu` component, to hold the data you will need for your menu.
To get the data for the menu you will need to import in the `data.js` file. You should use the `data.getMenu()` function (that's part of the `data.js` file) to `setState` from within  `componentDidMount` on your `Menu` component.

- Create a `getInitialState` property in your `About` component, to hold the data you will need for your about.
To get the data for the about you will need to import in the `data.js` file. You should use the `data.getAbout()` function (that's part of the `data.js` file) to `setState` from within  `componentDidMount` on your `About` component.

- Create a `getInitialState` property in your `Home` component, to hold the data you will need for your home. You will basically onluy need images, but if you'd like other data feel free to add that as well. To get the data for the home you will need to import in the `data.js` file. You should use the `data.getImages()` function (that's part of the `data.js` file) to `setState` from within  `componentDidMount` on your `Home` component.


**4. Building the components:**

You will need the following functionality in you components:
- An `App` component that will contain your `NavBar` component and will also use `{this.props.children}` to render your other components. Our `App` component will contain our `NavBar`. Our `NavBar` will then have links to 'Home', 'Menu', and 'About', which will change what is displayed in our `App` component depending on which link you click.

- A `NavBar` that has links to 'Home', 'Menu', and 'About' pages. It will also need to display `{this.props.children}`. When you click on links in the `NavBar`, the content on the page should change (depending on what was clicked) but the `NavBar` should remain visible.
- A `Menu` component that will contain information about the restraunt's menu. It is up to you exactly how you want to structure this component, but you will probably also want a `MenuItem` subcomponent for individual menu items. Think about if there are any other components you can add to help break it up even more and make your code even more reusable.

- An `About` component that will just have basic information about the restaurant including the name, address, phone number, and slogan.

- A `Home` component that just contains a landing page for the restaurant, which includes basic info such as the restaurant name and some pictures. Add any other information you think would be helpful.

**5. Creating the routes:**

We'll want to put our routes within the `ReactDOM.render` function in our `App.js` file. Our `'/'` path should display our `App` component. We'll then want to nest all of our other routes within that first route. This will let us keep our `NavBar` component (which is rendered within our `App` componenet) visible on all of our pages.

Our other routes should all be nested within our `'/'` route. They should link to our `Menu` component and `About` component. We should also have an `IndexRoute` that links to the `Home` component.

**6. Styling the app:**

Once you're finished with all fo the functionality, style your app to make it look good. All you'll need to do is `import './App.css'` in your `App.js` file, then add all of your styling directly to the `App.css` file.

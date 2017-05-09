# Redux Part One: Intro to Redux
## Table of Contents
1. [Why Redux?](#why-redux)
2. [What is Redux?](#what-is-redux)
  - [The Three Principles](#the-three-principles)
  - [The Redux Warehouse](#the-redux-warehouse)
  - [Redux Architecture](#redux-architecture)
  - [Redux Terms](#redux-terms)
3. [When to Use Redux](#when-to-use-redux)
  - [Advantages of Redux](#advantages-of-redux)
4. [How to use Redux](#how-to-use-redux)
  - [Installing Redux](#installing-redux)
  - [Store](#store)
  - [Reducers](#reducers)
  - [Actions](#actions)
5. [Putting it All Together](#putting-it-all-together)
6. [Redux Summary](#redux-summary)
7. [Resources](#resources)


# Why Redux?
As you've probably encountered, it gets harder and harder to keep your React code organized as your app gets bigger.
Once you start adding more and more components that need to talk to each other, your code inevitably starts turning into spaghetti. It gets harder and harder to keep track of what parts of your app and your state you need to update every time something changes, which makes it hard to build and maintain big apps.

Redux is one of the solutions to this problem (there are also many other Redux competitors, including [Flux](https://facebook.github.io/flux/docs/overview.html), which Redux is based off of). Redux is basically a specific way for you to structure and build the architecture for your apps. Redux helps simplify your complex apps by giving you a logical way to structure the way data flows throughout your app.

Redux is an advanced topic and takes some time to learn, but once you get down the setup in terms it is amazing how dramatically Redux can help simplify your apps. Understanding Redux will help you become a true JavaScript master (and separate you from the JavaScript peasants).

![karate kid](http://static.rogerebert.com/uploads/review/primary_image/reviews/the-karate-kid-1984/homepage_EB19840101REVIEWS401010351AR.jpg)

# What is Redux?
## The Three Principles
Redux revolves around three main principles:

1) Your entire app's state is kept in one place (the 'store'). In other words, Redux apps have a 'single source of truth' that holds all of your app's data in one object.

2) State is 'ready-only', which essentially means it cannot be directly updated. Instead, it can only be updated in one way: through 'actions'.

3) State is immutable. Old state should be copied and the copy should be updated (instead of directly mutating old state). This is done using 'reducers'.

All of the Redux architecture is setup to promote and maintain these three principles.

## The Redux Warehouse

You can think of Redux kind of like an Amazon.com warehouse. Let me explain...

![amazon-warehouse](http://archive.boston.com/business/technology/innoeco/kiva2.jpg)

There are three main parts to an Amazon warehouse order fulfillment: the warehouse itself, customers, and robots that go and find the actual items.

Firstly there's the warehouse. There's only one warehouse (let's pretend Amazon only has one giant warehouse), and it holds everything.

Since it has everything, it would get too crazy if everyone tried to shop there at once. So customers are not allowed to directly go to the warehouse. Instead, they make their orders online.

Whenever a customer places an order, the order will get processed by the warehouse, and then Amazon will dispatch one of its [Kiva robots](https://www.cnet.com/news/meet-amazons-busiest-employee-the-kiva-robot/) to go find that item in the warehouse. Once the robot locates the item and brings it back to be shipped, the warehouse inventory (and website) is officially updated.

There are many advantages of having robots as part of the process, but perhaps the biggest one is that it makes the entire process very predictable and trackable. The robots keep a record of every single thing they do, which eliminates the possibility of human error, and also makes it really easy to go back and see exactly what happened if something does end up going wrong.

## Redux Architecture

Redux architecture is very similar. There are three main parts to Redux:

- Store (the warehouse)
- Actions (the customers)
- Reducers (the robots)

Basically, in Redux there is one main 'store' that holds the state of our entire application. The only way the state can get updated is through actions, which are typically triggered by the user (for example, typing text into an input box and hitting 'submit' can trigger an action). However actions do not directly update the store - actions are processed by 'reducer' functions, which take in the action, update the state, and return a new state to the store.

## Redux Terms
The most confusing thing about Redux is often the terms and vocabulary used to describe all of the various parts.

- 'Store' - you can think of the store as the place where 'state' for your entire app is held.
- 'Actions' - actions signal that something in the interface has changed. They are typically dispatched when a user triggers an event (like clicking a button or updating a form).
- 'Reducers' - reducers are simply functions that take in two arguments: an action, and state. Reducers update state (depending on the data included with the action) and return that new updated state.


# When to Use Redux
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.5f6z0zolb)

You don't always need Redux in every app. In fact, people often say that 'you'll know when you need Redux....if you aren't sure if you need it, you probably don't need it.' In other words, if you are building an app without Redux and everything is going relatively smoothly and easy to follow, you probably do not need Redux. However if your app has turned into a complete mess and you're ready to set your computer on fire and throw it out a window, you probably need Redux.

Generally, large apps need Redux. You can build almost any app imaginable using Redux. Most large-scale React apps (that contain many different components that all need to communicate) use Redux (or something similar). However, small, simple projects probably don't necessarily need Redux.

## Advantages of Redux
- State is all stored in one place
- State changes are predictable and easily trackable (transactional history of all state changes)
- Time travel debugging
- Ability to build basically any app imaginable

**Without Redux:**
![without-redux](https://cdn.css-tricks.com/wp-content/uploads/2016/03/redux-article-3-01.svg)

**With Redux:**
![with-redux](https://cdn.css-tricks.com/wp-content/uploads/2016/03/redux-article-3-02.svg)

Source: [CSS Tricks](https://css-tricks.com/learning-react-redux/)

# How to Use Redux
## Installing Redux
To install Redux you simply need to `npm install redux`. Since Redux is fairly small, you'll typically import individual functions from Redux one at a time(for example, `import {createStore} from 'redux'`).

Next, let's take a look at the three main parts of Redux (the store, actions, and reducers) one by one:

## Store
- [Redux Store Docs](http://redux.js.org/docs/api/Store.html)

The store is the 'single source of truth' in Redux. In other words, the store holds the entire state of our application. Holding all of our state in one place makes it a lot easier to build complex apps, because we always know where to look for any state changes.

Redux stores are immutable, which means we can't directly change store data. Instead, we need to use 'actions', which are the only things that can update our store.

### Creating a store
- [Redux createStore Docs](http://redux.js.org/docs/api/createStore.html)

`createStore` is one of the main functions included with Redux. We can import in the `createStore` function by doing the following:

```js
import {createStore} from 'redux';
```

We can then use the `createStore` function to create our store:

```js
const store = createStore(reducer);
```

The `createStore` needs to take at least one argument: a reducer.

### Store Methods
Redux stores come with three main methods, that let us interact with the store. They are:

#### 1. getState

`getState` is a method on the store, which we can use to get the current state of our store.

```js
store.getState();
//returns the current state of our store (as an object)
```
#### 2. dispatch

`dispatch` lets you send out an action. This is the only way to update state or set state within our store. `dispatch` must take one argument: an action.

```js
store.dispatch(addTodo(newTodo));
//dispatches the 'addTodo' action, which adds a 'newTodo' to the store
```

#### 3. subscribe
`subscribe` adds a change listener, which listens for any changes within our store so we know to update our view.

This is similar to using `setState`, where a change listener is automatically triggered and a new `render` occurs whenever we `setState`. However in Redux we do not use `setState`, so we need to manually tell our store to listen and update on changes.

```js
let render = () => ReactDOM.render(
  <App />
  document.getElementById('root')
);

render();
store.subscribe(render);
```

## Reducers
- [Redux Reducers Docs](http://redux.js.org/docs/basics/Reducers.html)

A `reducer` is simply a function that takes in an action and the previous state, and returns a new, updated state.

```js
//Example of a simple reducer for a todo-list app.
//The reducer function takes in two arguments: state, and an action.
//Depending on the action type it then updates the state, and returns the new updated state.
//The below reducer only really handles one type of action (adding todos) but can easily be updated to handle more action types, such as removing todos.
let todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {todos: [...state.todos, action.todo]}
    default:
      return state
  }
}
```

`reducers` should always be 'pure', which means they should never mutate their arguments or interact with outside state.

Typically, a `reducer` function contains a switch statements with different outcomes for different actions.

## Actions
- [Redux Actions Docs](http://redux.js.org/docs/basics/Actions.html)

Actions are sent from your application to the store to update or change store data. They are very similar to `setState`.

Actions are really just objects, that have at least one property: `type`. The `type` property simply lets the store know what kind of action is being dispatched.

 Actions can also contain as many other properties as you want that can hold information about what data you want to update.

```js
//Example of a simple 'ADD_TODO' action
{type: ADD_TODO, newTodo: 'Build my first Redux app'}
```
Actions can be dispatched from anywhere in your app using `store.disaptch`:

```js
store.dispatch({type: ADD_TODO, newTodo: 'Build my first Redux app'});
```

### Action creators
Typically, you'll create 'action creator' functions within your app, to make it easier and quicker to create new actions:

```js
//The following action creator function simply returns a new object:
function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}

//This makes creating new actions easier:
addTodo('Build my first Redux app'); //returns a new action object
```

# Putting it all together
- [Redux Data Flow Docs](http://redux.js.org/docs/basics/DataFlow.html)

We now have a picture of how data flows through Redux applications:

- actions are triggered by events or user interactions
- reducers take the action and update the store state, depending on what the action was
- the store updates the state throughout our application


Here is an example of a simple counter app build using Redux:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//Actions
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrementAction = () => {
  return {
    type: 'DECREMENT'
  }
}

//Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

//Store
const store = createStore(counterReducer, 0, window.devToolsExtension ? window.devToolsExtension() : undefined);

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{store.getState()}</h1>
        <button onClick={store.dispatch.bind(this, incrementAction())}>+</button>
        <button onClick={store.dispatch.bind(this, decrementAction())}>-</button>
      </div>
    )
  }
})

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
```

# Redux Summary
- **Redux** -> Redux is a way to structure your apps to promote predictable, trackable data flow. It is composed of three main parts:  
  1. **Store** -> The store is the only place where your app's state is held. It can be created using the `createStore` method, which is imported through Redux. Stores have three main methods:
    - `subscribe` -> listens for changes in the store
    - `dispatch` -> notifies the store of changes
    - `getState` -> returns the current state of the store
  2. **Reducers** -> Reducers are pure functions that take in an action and return a new, updated state
  3. **Actions** -> Actions are dispatched when events occur in your app
- **React-redux** -> React-redux is a separate library, which is used to connect React and Redux in a more elegant way than simply using 'getState' and 'subscribe'
  - **Provider** -> Provider is used to pass down the state from your store to the rest of the components in your app
  - **Connect** -> Connect is used to connect individual components to Redux, and pass down pieces of state through those component's props

# Resources
- [Redux.js.org Docs](http://redux.js.org/docs/basics/)
- [Leveling up With React: Redux](https://css-tricks.com/learning-react-redux/)
- [Getting Started With Redux: An Intro](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
- [10 Tips For Better Redux Architecutre](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44)
- [Redux.js.org Glossary](http://redux.js.org/docs/Glossary.html)
- [A Cartoon Intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.r7worz8yq)
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.5f6z0zolb)

# Projects
- [Redux Emoji Counter](redux-emoji-counter.md)

# Todolist App
We'll be building a simple todo-list app using React.

## Setup
- Clone the [simple-react-setup](https://github.com/nmadd/simple-react-setup) scaffolding to setup a new React project
- Change the name of simple-react-setup to "react-todolist"
- Add Bootstrap by adding the following `script` tag into your `index.html`:
```js
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

## Instructions
- Create an `App` component in your `App.js` file. This component will eventually contain all of our other components. It will also be our only component that has state.
- On that note, add a `getInitialState` method to your `App` component, and initialize a state object. It should have two properties: `todos`, which should start as an empty array, and `newTodo`, which should start as an empty string.
- Create a `Todo` component. This component should display individual Todo items. The data for the todo should be passed down through props, so your JSX should look something like this:

```HTML
<div>
  <li>{this.props.todo}</li>
</div>
```
- Create a `TodoList` component, that should contain your individual Todo items. The `TodoList` component should get its data passed down through props, and map over that data to create individual Todo items. Your component map over the todos from props, which should look something like this:

```js
{this.props.todos.map(function(todo){
  //Your code here...
})}
```
- Create an `AddTodo` component that has a text input box and a button. The text input box should have an `onChange` attribute that triggers a function (that will be passed down through props) when text is entered into the box. Similarly, the button should have an `onClick` attribute that triggers a function (that will be passed down through props) when clicked.
- In your `App` component add a new function called `setNewTodo`. `setNewTodo` should be passed down (through props) to the input box of the `AddTodo` component. `setNewTodo` should update the `newTodo` state property whenever new text is typed into the input box.
- In your `App` component add a new function called `addTodo`. `addTodo` should be passed down (through props) to the button in the `AddTodo` component. It should add a new todo (which should be saved as `newTodo` in state) to the  Todos array that is saved in state.
- Add your `AddTodo` component and `TodoList` component into your parent `App` component. Make sure to pass down `this.state.todos` to your `TodoList`, and the appropriate functions to `AddTodo`
- Style the button and input box using Bootstrap

## Bonus
- Create a new similar app that uses the Spotify API to search for songs and list the results onto the page. The layout should be very similar - you will need an input box, a submit button, and then need to display a list under the input box. However, in this case when you type something into the input box and hit submit your app should send an AJAX request to the Spotify API and search for songs based on the text you entered into input. It should then display the results of the search on your page.

Checkout the [Spotify Search API Docs](https://developer.spotify.com/technologies/metadata-api/search/) for help

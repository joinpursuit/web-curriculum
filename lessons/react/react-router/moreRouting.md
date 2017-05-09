# Routing and props
## Objectives
* Students will be able to link to a route and retrieve information from the path.
* Students will be able to use the React lifecycle method `componentWillReceiveProps`

## Converting the Pokedex React to using React Router
[Link to the Pokedex Solution](https://github.com/ckuang/pokedexSolution)

### Step 1
Pass a Router into the ReactDOM.render function.
```js
<Router history={hashHistory}>
```
### Step 2
Place routes inside of the Router with a specified path and component.
```js
<Route path="SOME_PATH" component={COMPONENT}>
```
### Step 3
Replace the <PokemonInfo /> in the Pokedex render function with {this.props.children}

### Step 4
Construct a nested route within Pokedex to display the PokemonInfo component.

### Step 5
Remove the handleClick function from PokemonList. Instead, add a <Link> to the render function that links to each pokemon name.
```js
<Link to="SOMEWHERE">go</Link>
```
### Step 6
[Matching Routes](https://github.com/ReactTraining/react-router/blob/master/docs/guides/RouteMatching.md) <br>
In your Router tree, your PokemonInfo should be nested within Pokedex. You want it so that when you navigate to `/pikachu`, you'll be able to access `pikachu` through `this.props.params` in PokemonInfo.

### Step 7
The AJAX request to retrieve specific Pokemon information can now be placed within the PokemonInfo React component. You no longer need the handlePokemonClick function. The PokemonInfo component can call `.setState()` within the `componentDidMount` lifecycle method to fetch and display retrieved information.

### Step 8
Sift through the data in the AJAX call to display in the PokemonInfo.

### Step 9
Unfortunately, the page doesn't work when we click on another link. This is because the PokemonInfo component has already mounted and will therefore not call `componentDidMount` again. Fortunately, there is another lifecycle method! `componentWillReceiveProps`
```js
var someComponent = React.createClass({
  componentWillReceiveProps(nextProps) {
    //this.props refers to the old props in the scope
    //nextProps are the newProps
  }
})
```
If you call `.setState` within `componentWillReceiveProps`, you can trigger a re-render!

# Challenge
## Context Router
```js
var Component = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  changeURL: function() {
    this.context.router.push()
  }
})
```
## withRouter
```js
var Wrapper = withRouter(Component)

<Route path="/" component={Wrapper}></Route>

this.props.router.push()
```

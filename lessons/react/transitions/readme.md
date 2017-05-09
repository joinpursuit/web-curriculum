# React Transitions
- add delight and context to your app with transition animations
- tags: CSS, React, Transitions, Animation

# Objectives
- learn CSS animation fundamentals
- learn how to use animation in React with ReactCSSTransitionGroup
- use transitions to guide user attention
- use transitions to indicate navigation and context

# Resouces
- [css transitions intro](https://css-tricks.com/almanac/properties/t/transition/)
- [css animations intro](https://css-tricks.com/almanac/properties/a/animation/)
- [css transform intro](https://css-tricks.com/almanac/properties/t/transform/)
- [ceaser (easing previews)](https://matthewlein.com/ceaser/)
- [the illusion of life](https://vimeo.com/93206523)

# Warmup/Review Exercise
Fork this [codepen](http://codepen.io/sunrader/pen/XjgoGV?editors=0100#0) and try different transition properties.
* Try making the box shrink/grow on hover (hint: try `transform: scale(0.5)`)
* Try making the box move away on hover (hint: try `transform: translateX(100%)`)
* Try making the box rotate on hover (hint: try `transform: rotate(360deg)`)
* Try changing the animation speed/duration
* Try changing the easing function

# Lecture

## Animating with CSS Transitions
We can tell the browser to animate the transition between two different values *of the same style*.

```css
.box {
  width: 150px;
  height: 150px;
  background: red;
}
.box:hover {
  background: blue;
  cursor: pointer;
  transition: background 2s ease;
}
```
[Try it out on CodePen](http://codepen.io/sunrader/pen/XjgoGV?editors=0100#0)

## Animating with keyframes
We can also have multi-step animations by using the *animation* attribute.

```css
.box {
  width: 150px;
  height: 150px;
  background: red;
}
.box:hover {
  animation: colorful 3s;
}
@keyframes colorful {
  25% {
    background: blue;
  }
  50% {
    background: black;
  }
  75% {
    background: yellow;
  }
}
```

## Animating a TodoList app
Clone the starter repo for the todolist app:
```
git clone https://github.com/pzhine/react-transitions.git
cd react-transitions
npm install
npm start
```
This will compile our bundle with webpack and we can just open index.html locally in a browser.

Install the CSSTransitionGroup addon
`npm i --save react-addons-css-transition-group`

Add a reference to our addon tag so React knows where to find it:
```javascript
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
```

Wrap the part of our app that is changing with <ReactCSSTransitionGroup></ReactCSSTransitionGroup>
```html
<ReactCSSTransitionGroup transitionName="todoItem">
  {items}
</ReactCSSTransitionGroup>
```

In base.css, define the CSS transition for "todoItem". 
```css
.todoItem-enter {
  opacity: 0.01;
}
.todoItem-enter.todoItem-enter-active {
  opacity: 1;
  transition: opacity 500ms ease;
}
```
* The first class (.todoItem-enter) defines the starting style for the child component that is being added. 
* The second class (.todoItem-enter.todoItem-enter-active) defines the ending style.

Now let's make it also slide in from the left, to draw the eye:
```css
.todoItem-enter {
  opacity: 0.01;
  position: relative;
  left: 100%;
}
.todoItem-enter.todoItem-enter-active {
  opacity: 1;
  transition: opacity 500ms ease, position 1s ease;
  left: 0;
}
```
* Note we had only had to add position:relative to the first class
* We also had to add a second transition value to animate the position style

Now let's use [ceaser (easing previews)](https://matthewlein.com/ceaser/) to make our animation a little snappier.
```css
transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550); /* easeInOutBack */
```
* Note that we changed the transtioning property to "all". This is so we don't have to repeat that long "cubic-bezier" stuff for each style we're transitioning. You can use libraries like [SASS](http://sass-lang.com/) to add variables to your CSS so you don't have to repeat yourself all the time.

## Exercise 1: Animate task completion
When the user clicks on a task, the word "Done" should make a grand entrance at the right side of the todo item row.

## Exercise 2: Animate route changes
When an app transitions to a new route, there's usually a UI change involved, small or large. To give the user context about what changed and how to go back, it's helpful to animate the change.

We can use ReactCSSTransitionGroup to control transitions between routes.

### Step 1: Start with the solution to the Pokedex add from the last lesson
Clone [the solution](https://github.com/pzhine/pokedexSolution) and install it:
```
git clone https://github.com/ckuang/pokedexSolution.git
cd pokedexSolution
npm install
npm start
```

### Step 2: Install the ReactCSSTransitionGroup addon

### JSX Changes
This is the same process as for the todo list exercise:
`npm i --save react-addons-css-transition-group`

In our parent component (pokedex.jsx), add a reference to our addon:
```javascript
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
```

Now we wrap the part of our app that changes with the <ReactCSSTransitionGroup> tags. In this case, it's the `{this.props.children}` that changes when the route changes, so:
```html
<ReactCSSTransitionGroup transitionName="routeChange">
  {this.props.children}
</ReactCSSTransitionGroup>
```

It won't work yet, though. the ReactCSSTransitionGroup component requires that each child has a unique "key" property so that it knows if something changed (it only transitions if it sees a different key). In order to dynamically add a key prop to "this.props.children", we have to use a React library function called "cloneElement":
```html
<ReactCSSTransitionGroup transitionName="routeChange">
  {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
</ReactCSSTransitionGroup>
```
*Note*: props.location.pathname is path part of our url (everything after the # in this case). If our pokemon info routes had child routes (like /metapod/encounters), the pathname would be a bad key because it would not be unique for each pokemon. Instead, we would want to extract out just the "metapod" part of the pathname and use that.

### CSS Changes
Now let's add some transition effects to the route change in CSS.

First, update the pokemonInfo container to have an absolute position so we can have 2 of them occupying the same space:
```css
.pokemonInfo {
  position: absolute;
  left: 0;
  top: 0;
}
```

Then let's add our enter and leave classes, using the name we set in our JSX ("routeChange"):
```css
.routeChange-enter {
  opacity: 0;
}
.routeChange-enter.routeChange-enter-active {
  opacity: 1;
  transition: opacity 600ms ease;
}
.routeChange-leave {
  opacity: 1;
}
.routeChange-leave.routeChange-leave-active {
  opacity: 0;
  transition: opacity 600ms ease;
}
```

Now our pokedex has nice transitions when routing!

## Challenge Exercise 1: Add better loading behavior
Our route change still looks bad because we're rendering the empty fields (including a broken image) of the pokemon info before the AJAX call has returned. 

1. Hide the pokemon info content until the AJAX has returned
2. Show a loading spinner in the center of the pokemon info area until the AJAX has returned
3. *Extra credit*: use this.context.router and this.context.router.push instead of <Link> to delay the route change until the AJAX has returned.

## Challenge Exercise 2: Add caching
It's really frustrating to the user to wait for some content they've already loaded in the browser. Save the pokemon info to state so that when navigating back/forward, the content appears instantly. 
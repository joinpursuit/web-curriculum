# Advanced CSS (flexbox)
- make your apps look professional and have good UX
- tags: CSS, React, Flexbox, Responsive

# Objectives
- Apply a stylesheet to your React app
- Use flexbox to layout elements in your app
- Use a glyph font to style buttons and add icons

# Resouces
- [Flexbox introduction](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Material Design forms examples](https://www.muicss.com/docs/v1/css-js/forms)
  This is a library that will style your forms to meet the Google Material Design spec. It’s a good example of giving your forms a consistent look and feel.
- [Flexbox demo tool](https://github.com/pzhine/flexboxdemo)
  Clone this repo and follow the readme to build and run the demo. Experiment with different layouts.
- [Flexbox cheatsheet](http://apps.workflower.fi/css-cheats/?name=flexbox)
- Glyph font libraries
  - [FontAwesome](http://fontawesome.io/icons/)
  - [Zurb](http://zurb.com/playground/foundation-icon-fonts-3)
  - [IonIcons](http://ionicons.com/)

# Warmup/Review Exercise
Write CSS for [this html](warmup.html) so that it looks like this in the browser:  
![mockup](warmup.png)

# Lecture

## Webpack and CSS
Start with a new clone of the [simple react setup](https://github.com/nmadd/simple-react-setup). Then run:
```
npm install
npm install --save-dev css-loader style-loader
```
Add the following line to your App.js file:
```javascript
var css = require("./App.css");
```
Now clear out App.css and add the following line:
```css
h1 {
  color: red;
}
```
Run `npm start` and your "Hello world" header should be red!

## Webpack and Glyph fonts
The [Get Started](http://fontawesome.io/get-started/) directions for FontAwesome work in our webpack project. You can use this CDN script tag in your index.html:
```html
<head>
  ...
  <script src="https://use.fontawesome.com/2af5f3d917.js"></script>
</head>
```
Now we can use any of the [FontAwesome icons](http://fontawesome.io/icons/) in our app. Try the following in your App.js. Note that we have to use `className`, not just `class` for this to work:
```html
<div>
  <h1>Hello World!</h1>
  <i className="fa fa-camera-retro"></i> fa-camera-retro
</div>
```

## Exercise 1: Style our giphy App
![mockup](giphy1.png)
![mockup](giphy2.png)
Font: [Roboto light](https://fonts.google.com/specimen/Roboto?selection.family=Roboto:300)

### Ternary operator
Remember the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)? We're going to use it to keep our code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

```javascript
render() {
  if (this.state.present) {
    return (
      <div>
        <input id="find" type="text" placeholder="giphy"></input>
        <button onClick={this.fetchGIF}>Get Giphy</button>
        <img src={this.state.src}></img>
      </div>
    )
  } else {
    return (
      <div>
        <input id="find" type="text" placeholder="giphy"></input>
        <button onClick={this.fetchGIF}>Get Giphy</button>
      </div>
    )
  }
}
```
Becomes...

```javascript
render() {
  return (
    <div>
      <input id="find" type="text" placeholder="search giphy"></input>
      <button onClick={this.fetchGIF}>Get Giphy</button>
      {
        this.state.present ? (
          <img src={this.state.src}></img>
        ) : null
      }
    </div>
  )
}
```

### background-size for responsive images
We'll use [inline styles](https://facebook.github.io/react/tips/inline-styles.html) and some the [background-size attributes](https://css-tricks.com/almanac/properties/b/background-size/) to make our giphy fit its container perfectly.

```html
<div
  className="resultsRow"
  style={{backgroundImage: 'url(' + this.state.src + ')'}}
/>
```

## Exercise 2: Chat Widget App
We're buiding a chat widget similar to the one on Facebook

![mockup](widget.png)

### Step 1: Diagram our boxes
- define the name and boundaries for each box element
- Link to [CSS diagraming Google Drawing](https://docs.google.com/drawings/d/1u2aHIdqPMURSsZKUHA0tBlovr9fVyex0WUGC682Bybg/edit?usp=sharing)

### Step 2: Write our HTML
- Use your CSS diagram to structure your HTML
- Add "placeholder" or "lorem ipsum" content to help you layout your elements

### Step 3: Write our CSS
- Use your CSS diagram to guide your code
- Use the [Flexbox demo tool](https://github.com/pzhine/flexboxdemo) or [Flexbox cheatsheet](http://apps.workflower.fi/css-cheats/?name=flexbox) to help with syntax
- Style one "level" at a time

### Step 4: Diagram our React components
- Define the names and properties for our components
- Link to [CSS diagraming Google Drawing](https://docs.google.com/drawings/d/1u2aHIdqPMURSsZKUHA0tBlovr9fVyex0WUGC682Bybg/edit?usp=sharing)

### Step 5: Build our React components
- Start at the "lowest level" (last frame in our diagram) and work up

## Challenge exercises

### Loading spinner
In the Giphy app, use the FontAwesome "spinner" icon and [fa-pulse](http://fontawesome.io/examples/#animated) class to show a spinner while the app is waiting for the Giphy API to respond. You can use jQuery or React to control the visibility of the spinner, but React is preferred.

### Chat widget minimize
In the Chat Widget app, add a feature so that when you click the name row at the top, it minimizes the widget to a bar at the bottom of the page, like it does in Facebook. When you click the bar, it shows the full widget (restores the widget).

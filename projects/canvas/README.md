author: lev@c4q.nyc

language: javascript

topics: html, dom

difficulty: 4

format: coding

attribution: original

# Paint Program

In this project, you will utilize the html canvas element to create a simple paint program.

The provided HTML file includes a `canvas` element, a `line` and `pencil` buttons, and a `select` element for width.

The provided script.js file includes:

1. The object `canvas2d`. The most important propery of this object is `context`. The canvas2d rendering context provides methods for 2-dimensional drawing on the canvas. Read more about it here: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

2. The function `getMousePos` which returns an object with the current `x` and `y` coordinates of the mouse on the canvas.

3. The `click` event listener for  the `pencil` and `line` buttons. These simply change the `canvas2d` string property `drawingTool`.

4. The `click` event listener for the `width` select. This changes the `canvas2d` context property. The context contains an inner `lineWidth` property that is modified. Read more about it here: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth.

5. Three event listeners which you will need to implement: `mousedown`, `mousemove` and `mouseup`

## Instructions

You will need to implement the methods for the `pencil` and `line` buttons. The `pencil` should allow the user to press and move the mouse button to draw freely. The `line` should allow the user to press and drag the mouse button from point **a** to point **b** in order to create a straight line between the two points (upon release of the mouse button).

In order to make these work you will need to implement the three event listeners for the `canvas`. In addition to the provided methods and properties, you will need to use the following methods of the `context` property:

1. beginPath: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath.

2. moveTo: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo.

3. lineTo: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo.

4. stroke: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke

## Extra credit

Add a color drop-down select. Make sure that it only changes the color of your future line and pencil drawings.

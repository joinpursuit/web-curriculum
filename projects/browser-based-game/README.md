author: lev@c4q.nyc

language: javascript

topics: javascript, objects, prototypes

difficulty: 5

format: coding

attribution: original, inspired by chapter 7 of Eloquent Javascript

# A Simple Game

For this project, you are given an incomplete implementation of a  javascript game. The game features a top-down view of the player ("the `☺` icon"), who must reach the exit ("the `O` icon") while avoiding the monsters (the `@` icons).

The provided index.html icon contain a `<pre>` tag unto which the the game world  is rendered (we will later call this the `maze`) . The `<pre>` tags allow displaying a javascript string exactly the way it appears in your code, including spacing and line breaks.

The provided script.js file includes:
1. A function `getMaze()` that returns an object with two properties:
  * `layout` - an array of arrays (also called a 2-dimensional arrays). Each element of the first array is an array. The secondary arrays contain strings. These represents the basic layout of the game-world: the walls are represented by `X`; the spaces are represented by  `" "`.
  * An object called `startingPosition`. This contains the `x` and `y` coordinates in which the player's character will start the game. Notice that the top left corner will be at coordinates `{x: 0, y: 0}`. In our 2d  array, this will be `[0][0]` - The first `[0]` to get the `y` coordinate of the top row; The second `[0]` to get the `x` coordinate of the first, leftmost element in that row.
2. The functions `getMazeLayout()` and `getStartingCoordinates()` which simply invoke the `getMaze()` function, after which they retrieve and return the corresponding property.

3. An object `gameProps` which contains the global variables of the game. Its properties:
    * `charArray` will contain the player and the monsters objects.
    * `monsterArray` will contain only the monster objects.
    * `keyPressed` a boolean which will become `true` value when a key is pressed.
    * `gameOver` a boolean that will become `true` if the player loses the game.
    * `foundExit` a boolean that will become `true` if the player wins the game.

4. The function `getMazeState()` which calls  `getMazeLayout()` and uses it in conjunction with the `charArray` to generate and return a 2-dimensional array with the layout and the position of all the characters.
5. The function `generateMazeString()` which calls `getMazeState()` and generates a string out of it for display purposes.

6. A `Vector` object. A vector is a simple object that holds an `x` and `y` coordinate and represents a movement in a particular direction. In this game we have four options for a vector:
    * `{x: 1, y: 0}` represents movement to the right.
    * `{x: -1, y: 0}` represents movement to the left.
    * `{x: 0, y: 1}` represents movement upwards.
    * `{x: 0, y: -1}` represents movement downwards.

7. A `Monster` constructor for creating a new monster. The constructor will take as arguments the initial `x` and `y` coordinates and an `initialDirection` Vector. The constructor will add the monster to the  `charArray` and to the `monsterArray`.
8. A `Monster.prototype.move` function that will move the monster a single cell in a direction based on it's `direction` property ( which will hold one of the four vector values mentioned above). The monster will only move if the new cell is either an empty space(`" "`) or the `player` character (`☺`). Otherwise, it will switch direction.
9. A `Monster.prototype.switchDirection` function - **to be implemented**. This function will flip the monster's direction by changing its `direction` property. If, for example, the monster was moving right, it will now be moving left. If it was moving up, it will be moving down.
10. A `Player` constructor which will retrieve and set the object's initial position. It will also push the player object into the `charArray`.
11. A `Player.prototype.move` function - **to be implemented**. This function will take as argument a `direction` vector, and will move the player to a new cell (up, down, left or right) only if that cell is empty.
12. A `keydown` event listener: when a key is pressed, the `keyPressed` value is set to `true` and the *key code* is saved.
13. A `gameStep` function, which will be called in equal intervals once the page is loaded. It will perform the `move()` function for each object in the `monsterArray` (this will move each monster one cell based on its inner `direction` property). It will then check if the game is over: either if the player has reached the exist, or if the player was killed by a monster. If the game is not over, the function will check for a recent key press and will move the player one cell based on the key code (**to be implemented**). Finally, the function will render the current maze with all the characters to the HTML document.
14. The `$(document).ready` function. This will create the player character and four monster characters and render the initial state of the maze to the HTML document. The function will invoke a `setInterval` which will repreately call the `gameStep` function. The `intervalId` will be saved so that when the game is over we can stop calling the `gameStep` function.

## Instruction
Implement `Monster.prototype.switch`, `Player.prototype.move` and complete the `gameStep` function.

## Extra credit
* Add a reset button that will start the game over.
* How would we add more levels to the game? Consider the different ways this could be possible. Try to add a `level` property to the `gameProps`, and on reaching the exit, increment it and reset the game. Consider adding more monster, different monster movement, or even different layouts for different levels.

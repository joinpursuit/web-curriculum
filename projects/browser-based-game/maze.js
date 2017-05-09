function getMaze() {
  return {
    layout: [
      ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X"],
      ["X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X"],
    ],
    startingPosition: {
      x: 1,
      y: 1
    }
  }
}

// Get an array with the maze layout
function getMazeLayout() {
  return getMaze().layout;
}

// Get the starting coordinates of the player
function getStartingCoordinates() {
  return getMaze().startingPosition;
}


// Get a string with the current state of the maze
// including the position of the player and the monsters
function generateMazeString() {
  var mazeString = "";
  var mazeStateArr = getMazeState();
  // Generating string from 2-dimensional array
  for (var i = 0; i < mazeStateArr.length; i++) {
    for (var j = 0; j < mazeStateArr[i].length; j++) {
      mazeString += mazeStateArr[i][j] + " ";
    }
    mazeString += "\n";
  }
  return mazeString;
}


// Variable that holds the global game variables
var gameProps = {
  // The charArray contains all the character objects (monsters and player)
  charArray: [],
  // The monster array contains all the monster objects
  monsterArray: [],
  // An indicator to whether a key was pressed
  keyPressed: false,
  // An indicator to whether the game is over (player lost)
  gameOver: false,
  // An indicator to whether the game is over (player won)
  foundExit: false,
};

// Get an array with the current state of the maze,
// including the position of the player and the monsters
function getMazeState() {
  var mazeArr = getMazeLayout();
  gameProps.charArray.forEach(function(object) {
    //console.log(object.name)
    mazeArr[object.y][object.x] = object.icon;
  })
  return mazeArr;
}

// A constructor for the Vector object
// This is simply an object that holds a direction
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

// The monster constructor
// Initializes the monster's starting coordinates and direction
function Monster(x, y, initialDirection) {
  this.icon = "@";
  this.x = x;
  this.y = y;
  this.direction = initialDirection;
  // Adding monster to character array and to monster array
  gameProps.charArray.push(this);
  gameProps.monsterArray.push(this);
}


Monster.prototype.move = function() {
  var tempX = this.x + this.direction.x;
  var tempY = this.y + this.direction.y;
  var mazeArr = getMazeState();
  // Checking if square is empty, if player is in square, or if it is blocked
  if (mazeArr[tempY][tempX] == " ") {
    this.x = tempX;
    this.y = tempY;
  } else if (mazeArr[tempY][tempX] == "☺") {
    this.x = tempX;
    this.y = tempY;
    gameProps.gameOver = true;
  } else {
    this.switchDirection();
  }
}

// Flips the monster's direction
Monster.prototype.switchDirection = function() {

}

// The player constructor
// Initializes the players starting coordinates
function Player() {
  var startingCoordinates = getStartingCoordinates();
  this.x = startingCoordinates.x;
  this.y = startingCoordinates.y;
  this.icon = "☺";
  gameProps.charArray.push(this);
}

// Move the player
Player.prototype.move = function(direction) {

}

// An event listener to check if a key was pressed
$(document).keydown(function(event) {
  gameProps.keyPressed = true;
  gameProps.keyCode = event.which;
})


// For every game step, the monsters move and then the player moves
function gameStep() {
  // Moving monsters
  gameProps.monsterArray.forEach(function(monster) {
      monster.move();
  })
    // Checking if player has been killed or found the exit
  if (gameProps.gameOver) {
    // Game is over, no need to refresh anymore
    clearInterval(gameProps.intervalId);
    $('#alert').text("Game Over!");
  } else if (gameProps.foundExit) {
    // Game is over, no need to refresh anymore
    clearInterval(gameProps.intervalId);
    $('#alert').text("You have found the exit!");
  } else if (gameProps.keyPressed) {
    // Moving player
    switch (gameProps.keyCode) {
      // left arrow key
      case 37:
        // Do something
        break;
      // up arrow key
      case 38:
        // Do something
        break;
      // right arrow key
      case 39:
        // Do something
        break;
      // down arrow key
      case 40:
        // Do something
        break;
    }
    gameProps.keyPressed = false;
  }
  $('#maze').text(generateMazeString());
}

$(document).ready(function() {
  // Creating player and monsters in maze
  gameProps.player = new Player();

  var monster1 = new Monster(3, 3, new Vector(1, 0));
  var monster2 = new Monster(3, 5, new Vector(-1, 0));
  var monster3 = new Monster(3, 7, new Vector(0, 1));
  var monster4 = new Monster(7, 3, new Vector(0, -1));

  // Displaying maze
  $('#maze').text(generateMazeString());


  // Setting game to refresh
  gameProps.intervalId = setInterval(function() {
    gameStep();
  }, 200);
})

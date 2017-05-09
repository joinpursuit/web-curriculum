// This is the line of words that the app is editing.
line = 'The quick brown fox jumped over the lazy dogs.'.split(' ');

//This function just takes in a word as an argument and returns the position of that word in the line. It's used in a bunch of the functions below
function parsePosition(word) {
  var position = +word;
  if (isNaN(position)) {
    setError('invalid position: ' + word);
    return null;
  }
  if (position <= 0 || position > line.length) {
    setError('position out of range: ' + position);
    return null;
  }
  return position - 1;
}

function doPrepend(parts) {
  if (parts.length !== 2) {
    setError('usage: <tt>prepend WORD</tt>');
    return;
  }
  var word = parts[1];
  
  line.splice(0, 0, word);
}

function doAppend(parts) {
  if (parts.length !== 2) {
    setError('usage: <tt>append WORD</tt>');
    return;
  }
  var word = parts[1];
  
  line.push(word);
}

function doInsert(parts) {
  if (parts.length !== 4 || (parts[2] !== 'before' && parts[2] !== 'after')) {
    setError('usage: <tt>insert WORD before|after POSITION</tt>');
    return;
  }
  var word = parts[1];
  var position = parsePosition(parts[3]);
  if (position === null) return;
  
  if (parts[2] === 'before') {
    line.splice(position, 0, word);
  } else {
    line.splice(position + 1, 0, word);
  } 
}

function doReplace(parts) {
  if (parts.length !== 4 || parts[2] !== 'with') {
    setError('usage: <tt>replace POSITION with WORD</tt>');
    return;
  }
  var position = parsePosition(parts[1]);
  if (position === null) return;
  var word = parts[3];
  
  line[position] = word;
}

//The swap function swaps two words. See below comments for further explanation
function doSwap(parts) {
  if (parts.length !== 4 || parts[2] !== 'with') {
    setError('usage: <tt>swap POSITION with POSITION</tt>');
    return;
  }
  //We need two position variables - one for the first word, and one for the second word
  var position0 = parsePosition(parts[1]);
  if (position0 === null) return;
  var position1 = parsePosition(parts[3]);
  if (position1 === null) return;
  
  //Firstly, save the first word in the 'word' variable
  var word = line[position0];
  //Then replace the first word with the second word. The sentence will now momentarily contian the second word twice 
  line[position0] = line[position1];
  //Then replace the second word with the first word, which we still have saved in the 'word' variable
  line[position1] = word;
}

function doDelete(parts) {
  if (parts.length !== 2) {
    setError('usage: <tt>delete POSITION</tt>');
    return;
  }
  var position = parsePosition(parts[1]);
  if (position === null) return;
  
  line.splice(position, 1);
}

//This function takes in a word, reverses the word, and returns it. It's used in the doReverse function below
function reverse(word) {
  return word.split('').reverse().join('');
}

function doReverse(parts) {
  if (parts.length !== 3 || parts[1] !== 'at') {
    setError('usage: <tt>reverse at POSITION</tt>');
    return;
  }
  var position = parsePosition(parts[2]);
  if (position === null) return;
  
  line[position] = reverse(line[position]);
}

//Takes in a letter and returns 'true' if it's a vowel, and 'false' if not. Used in the below function
function isVowel(letter) {
  letter = letter.toLowerCase();
  return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}

//Takes in a word, and if the first letter if that word is a vowel, returns the word + 'yay.' Otherwise, moves the first letter to the end of the word and adds 'ay' 
function pigLatin(word) {
  if (isVowel(word[0])) {
    return word + 'yay';
  } else {
    return word.substring(1) + word[0] + 'ay';
  }
}

function doPigLatin(parts) {
  if (parts.length !== 3 || parts[1] !== 'at') {
    setError('usage: <tt>pigLatin at POSITION</tt>');
    return;
  }
  var position = parsePosition(parts[2]);
  if (position === null) return;
  
  //Replaces the word with the pigLatin version of the word
  line[position] = pigLatin(line[position]);
}

/**
 * This function is called when the user submits a command.
 * 
 * The argument is a string containing the command.
 */
function execute(command) {
  // Split the command into parts (words). Filter out any empty words.
  var parts = command.split(' ').filter(function (s) { return s.length > 0; });
  
  // Interpret the first word, which is the command.
  switch (parts[0]) {
    case 'prepend': doPrepend(parts); break;
    case 'append': doAppend(parts); break;
    case 'insert': doInsert(parts); break;
    case 'replace': doReplace(parts); break;
    case 'swap': doSwap(parts); break;
    case 'delete': doDelete(parts); break;
    case 'reverse': doReverse(parts); break;
    case 'pigLatin': doPigLatin(parts); break;
    
    default: 
      // Unknown command, so show an error message.
      setError('unknown command: ' + parts[0]); break;
  }
}

//-----------------------------------------------------------------------------------------------

$('#command').keyup(function (event) {
  var ENTER = 13;
  if (event.keyCode === ENTER) $('#execute').click();
});

$('#execute').click(function (event) {
  var command = $('#command').val();
  if (command) {
    clearError();
    execute(command);
    updateLine();
    // Clear the command.
    $('#command').val('');
  }
});

function updateLine() {
  var lineDiv = $('#line');
  lineDiv.empty();
  for (var i = 0; i < line.length; ++i) {
    var word = line[i];
    var html = '<div class="element"><div class="word">' + word + '</div>' + 
      '<div class="position">' + (i + 1) + '</div></div>';
    lineDiv.append(html);
  }
}

function setError(error) {
  $('#error').html(error).show();
}

function clearError() {
  $('#error').hide();
}

$(function () {
  clearError();
  updateLine();
});

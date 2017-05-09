// Module pattern, using IIFE and closure:
var CartModule = (function() {

  var state = {items: [], subtotal: 0};

  var items = [
    {name: 'Furby', price: 10000000.00},
    {name: 'Tamagotchi', price: 10.00},
  ]

  function calculateSubtotal() {
    return state.items.map(item => item.price).reduce((a, b) => a + b);
  }

  function createListItem(listText) {
    var newListItem = document.createElement('li');
    var newTextNode = document.createTextNode(listText);
    newListItem.appendChild(newTextNode);
    return newListItem;
  }

  function updateList() {
    // create a new list based on updated state
    var newList = document.createElement('ul');
    // add 'cart-list' class to the new list
    newList.className = 'cart-list';
    var oldList = document.querySelector('.cart-list');
    // add an 'li' node for each item in state to our new 'ul'
    state.items.forEach(item => newList.appendChild(createListItem(item.name)))
    // replace the old list with the new list
    document.querySelector('.cart-list-container').replaceChild(newList, oldList)
  }

  function buttonClickHandler(event) {
    // filter out any events that are not button clicks
    if(event.target.tagName === 'BUTTON') {
      var buttonName = event.target.innerHTML;
      // find the list item object based on the name of the button that was lcicked
      var newItem = items.filter(item => item.name === buttonName)[0]
      // add the new item to our state
      state.items.push(newItem);
      // update our list to reflect our new state
      updateList();
    }
  }

  // initialize buttons with click handlers
  function addButtonListeners() {
    document.querySelector('.item-buttons').addEventListener('click', buttonClickHandler)
  }

  // initialize the module
  function initialize() {
    addButtonListeners();
  }

  // public API
  return {
    initialize: initialize
  }

})()

CartModule.initialize();

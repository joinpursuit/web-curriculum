var newDiv = document.createElement('div');
newDiv.classList.add('main-div');
newDiv.classList.add('main-div-2');

newDiv.setAttribute('id', 'main-div-class');
console.log(newDiv);
document.body.appendChild(newDiv);

var newDiv2 = document.createElement('div');
//Add multiple classes
newDiv2.classList.add('main-div');
newDiv2.classList.add('main-div-2');
//Can also add classes using className
newDiv2.className = 'main-div';
document.body.appendChild(newDiv2);

var newButton  = document.createElement('button');
newButton.innerHTML = 'New Button';
//One way to append child (this is the best practice way):
newDiv.appendChild(newButton);
//Another way to append child:
document.body.childNodes[2].appendChild(newButton);

//getElementsByTagName and getElementsByClass will return an array
console.log('DIVS:', document.getElementsByTagName('div'));

var newList = document.createElement('ul');
//Create and append a single list item
var newListItem = document.createElement('li');
newListItem.innerHTML = 'Go to the store';
newList.appendChild(newListItem);

//Loop to create 100 list items and append them all to the list
for(var i = 0; i < 100; i++){
  var newListItem = document.createElement('li');
  var listText = document.createTextNode('List item ' + i);
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  newListItem.appendChild(listText);
  newList.appendChild(newListItem);
  newListItem.insertBefore(checkbox, listText);
}

//Append the new list to the body
document.body.appendChild(newList);

//Turning the array-like-object into a real array
var liArr = Array.prototype.slice.call(document.getElementsByTagName('li'));

//Looping over the array to add an event listener to every individual list item
liArr.forEach(function(item){
  item.addEventListener('click', function(event){
    this.style.backgroundColor = "lime";
  })
})

//Adding a single event listener to the parent 'ul' element, and using the special event object to log out info from the specific li item that was clicked
document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
  console.log(event.target.innerText + ' was clicked')
})

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>example</title>
  </head>
  <body>
    <ul> Cars
      <li class="german luxury">BMW</li>
      <li class="italian sport">Lamborghini</li>
      <li class="japanese">Toyota</li>
      <li class="german">Volkswagen</li>
      <li class="american">Chevrolet</li>
      <li class="british">Land Rover</li>
      <li class="italian sport">Ferrari</li>
      <li class="german luxury">Audi</li>
      <li class="american">Cadillac</li>
      <li id="future" class="american">Tesla</li>
      <li class="british">Jaguar</li>
      <li class="japanese">Honda</li>
      <li class="italian">Fiat</li>
      <li class="german luxury">Mercedes-Benz</li>
      <li class="japanese">Acura</li>
    </ul>
    <input id="new" type="text" name="name" value="">
  </body>
</html>
```

## Selecting Elements
Get everything with the HTML tag `li`.
```javascript
document.getElementsByTagName('li')
//returns an array-like object
```

```javascript
document.getElementsByTagName('li').toString()
//displays what you're working with
```

You can bracket into the array-like object.
```javascript
document.getElementsByTagName('li')[0]
//returns the first element of the collection which is BMW
```

See what it the elements of the array-like object are.
```javascript
document.getElementsByTagName('li')[0].toString()
```

Specifically returns one element with that particular ID.
```javascript
document.getElementById('future')
```

```javascript
HTMLElement.children
//returns an array-like object with all the tags nested within the HTMLElement

HTMLElement.innerHTML
//spits out everything found in between the opening and closing tag

HTMLElement.value
//returns the value for that element - not all tags have values
```

## Creating Elements
```javascript
document.createElement('p')

document.createTextNode('thing')
//creates text you can insert into another element

HTMLElement.innerHTML = 'whatever you like'
//assigns the content to whatever you decide
```

## Changing Elements
```javascript
HTMLElement.appendChild(thing)
//inserts thing into the HTMLElement
//the thing has to be an HTMLElement

HTMLElement.setAttribute(attribute, value)
//inserts attribute="value" into the opening HTML tag

HTMLELement.removeChild(thing)
```

## Brief Introduction to Events
Events are specified interactions between the user and the browser.
```html
<button onclick="alert('Hello World');">Hello World</button>
```

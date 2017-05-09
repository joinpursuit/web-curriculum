1. You're creating a Pokemon game where each Pokemon has a set of attack skills. Should you store the skills as an array, or as an object? What are the advantages or disadvantages of each?

- You're creating a music app where you need to keep track of all songs that a user has previously listened to. Should you store the songs as an array, or as an object? What are the advantages or disadvantages of each?

- You're creating a fashion app where users can buy new clothes. Should you store your entire selection of women's shirts as an array, or as an object? What are the advantages or disadvantages of each?

- Given the following code:
  ```js
  var arrOfObjs = [
    {title: 'I Heard it Through The Grapevine', artist: 'Marvin Gaye'},
    {title: 'Bring It On Home To Me', artist: 'Sam Cooke'},
    {title: "Let's Stay Together", artist: 'Al Green'}
  ];
  ```
  - How would you select the title of the 2nd song?
  - How would you select the artist of the 1st song?

- Given the following code:
  ```js
  var objOfArrs = {
    grocery_list: ['bananas', 'apples', 'pears'],
    todo_list: ['clean my room', 'go to the grocery store', 'workout']
  };
  ```
  - How would you select the second item of the grocery list?
  - How would you select the last item of the todo list?

- Given the following code:
  ```js
  var arrOfArrs = [
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f'],
    ['g', ['h', 'i']]
  ];
  ```
  - How would you select the second item of the second-inner array? ('d')
  - How would you select the last item of the last-inner array? ('i')

- Given the following code:
  ```js
  var objOfObjs = {
    person1: {name: 'Aaron', hometown: 'NYC'},
    person2: {name: 'Crystal', hometown: 'LA'},
    person3: {name: 'Francis', hometown: 'Chicago'}
  };
  ```
  - How would you select the hometown of person2?
  - How would you select the name of person3?

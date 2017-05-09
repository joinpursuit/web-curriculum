**In order to signup for a CodeWars account you'll need to do the following:**

- Go to [codewars.com](https://www.codewars.com/) and click the 'Sign Up' button in the upper right corner
- It will then ask you to 'Choose your language to begin...' Select 'JavaScript' to continue.
- You should then be prompted to solve two chllanges. A couple hints: the first problem is missing a `return` statement. The second problem is missing a `this` keyword, which we have not covered yet, so the soluttion is provided for you below:

```javascript 
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}
```

- You should then be prompted to sign up by entering your email and username. Do not worry about entering a 'Clan' (aka company/school/organization) - you can leave that blank for now. Once you've entered your email, username, and password, hit 'Enlist.'


- You should then see a 'Training Setup' page which first asks 'What is your programming experience?' Select 'Learning to Program'. It also asks again for the language you'd like to use, so double check that you've selected 'JavaScript.' Finally, scroll to the bottom of the page and hit the blue 'SAVE' button.

- You'll be redirected to a page with some general info and a 'Your Next Challenge' section with a recommended next challenge. You do NOT need to follow the recommended challenge. In fact, you can attempt any challenge at any time. You can browse challenegs by clicking the 'Kata'
tab on the left side of the page. However before you move on to any other challenges, please complete enough of the following challenges to move up to a 7 kyu ranking.
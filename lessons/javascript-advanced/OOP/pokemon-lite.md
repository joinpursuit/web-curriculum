#Pokemon Lite

Let's try to make a simplified version of pokemon!

##Setup:
- Create a new folder
- Add an `app.js` file, and `index.html` file, and a `main.css` file
- Add a script tag to your `index.html` for your `app.js` file
- Add a script tag to you `index.html` file to add jQuery. You can use the following tag: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`

##Functionality:
1. You should have a `Pokemon` constructor function that creates new pokemon that have name, health , magic and a bunch of skills (the skills can be stored in an array or object).
2. You should have an `AttackSkill` constructor function for creating new attacks. Attacks consumes the pokemon's magic to cause damage to other pokemons. Each individual pokemon has a specific set of attacks.The `AttackSkill` method should take in three arguments: the name of the attack, the amount of damage the attack does, and the amount of magic the attack requires. For example, here we're creating a 'lightning' attack skill that causes 40 damage, and requires 30 magic: `var lightning = new AttackSkill("lightning", 40, 30);`. These numbers don't have to be correct or correspond to the real Pokemon numbers at all - you can just make them up.
3. A pokemon has no skills when created. it has to use the method `learnAttackSkill` to learn a new skill. `learnAttackSkill` should take an attack object as an argument. The specific attacks should be created using the `attackSkill` constructor function, and then internally added to that Pokemon's 'skills' array. Here is an example of first creating a skill, then adding it to a Pokemon: `var lightning = new AttackSkill("lightning", 40, 30); pikachu.learnAttackSkill(lightning);`
4. Your pokemon should have a method called `showStatus` that console.logs its status (how much health, magic left)
5. Your pokemon should have a method called `attack` which picks one of the pokemon's attack skills to attack another pokemon. This is its most important method! Consider all the possiblites in this method. (e.g what if the pokemon doesn't have enough magic to launch the attack skill?). The attack method should call one of the Pokemon's attack and apply it to the other Pokemon. So for example, if you call the 'lightning' attack (which we created above), it should deal 40 damage to the other Pokemon, and deplete 30 magic from the Pokemon that commited the attack. The attack method should additionally console.log out whether the attack was successful (in other words, whether the attacking pokemon had enough magic to actually carry out the attack), and the result of the attack. The `attack` method should take in two arguments: the index (or key) of the attack to be used, and the Pokemon object that needs to be attacked. For example, here is an attack being called from Pikachu to Bulbasaur: `pikachu.attack(0, bulbasaur);`
6. finally create a method called `getMagic` to help your pokemon add some magic back to your Pokemon (you can choose exactly how much magic should be added back).

You should create a constructor function to create a pokemon, and then add the methods onto the `.prototype` property of the constructor function. You should then use that constructor function to create all new pokemon.

Similarly, you should have a constructor function to create an `attackSkill`

For example, the following sequence:

```javascript
//Each Pokemon should start with a certain amount of health and magic
//for example, here Pikachu starts with 120 health and 80 magic 
//These numbers don't have to be correct or correspond to the real Pokemon numbers at all - you can just make them up
var pikachu = new Pokemon("pikachu", 120, 80);
var bulbasaur = new Pokemon("bulbasaur", 95, 105);
//Each skill should do a certain amount of damage, and consume a certain amount of magic
//from the Pokemon that used the skill
//Again, these do not have to be real skills - you can make them up
var lightning = new AttackSkill("lightning", 40, 30);
var poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
//The first argument to `attack` should be the index (or key) of the attack
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
```

should log out the following to the console:

```javascript
pikachu launched skill 'lightning' successfully!
bulbasaur got 40 damage
-------------------
bulbasaur launched skill 'poison seed' successfully!
pikachu got 20 damage
-------------------
pikachu status
health: 100
magic: 50
-------------------
bulbasaur status
health: 55
magic: 85
-------------------
pikachu launched skill 'lightning' successfully!
bulbasaur got 40 damage
-------------------
not enough magic, cannot launch attack!
-------------------
pikachu got 20 magic back
-------------------
pikachu launched skill 'lightning' successfully!
bulbasaur got 40 damage
-------------------
bulbasaur is killed!
-------------------
bulbasaur is already dead!
```

That's just one example. You can call different series of attacks to get different results!


##Web interface:

Build a simple website (using HTML, CSS, and jQuery) that lets two people battle each other. To start, only Pikachu and Bulbasaur should be available. You should start with a very simple interface, that just shows the two Pokemon and has a button for each to attack. Initially, the attacks and status can just be logged to the console.

You can see an example interface here: [Example Pokemon Interface](http://i.imgur.com/L2QmHvX.png)

##Bonus 1:
Show the attacks and status updates on the web page instead of just logging the attacks and status to the console. Use jQuery to append the updates to the page as the attacks happen. Health should update as the battle goes on, and eventually a winner should be declared. 

##Bonus 2: 
Add some more Pokemon and attack types. The users should be able to select their Pokemon and their attack. 

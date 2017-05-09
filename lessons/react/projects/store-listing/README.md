## Intro
Your goal is to create a simple store listing app. In other words, you will want to display a list of items that you'll (pretend to) be selling. Think of a simplified version of the Amazon homepage, where you can see things like featured items, recommendations, and new arrivals.

You can choose the types of items you'd like to have in your store...you can choose to focus on clothing, video games, toys, or anything else you choose. At this time we'll just start to build the very basic parts of the app, and will keep building on it in the future. Do not worry about building out the actual functionality of the app yet...for now we will just be building the visual interface.

## Instructions
- Create an 'Item' component to display an item. Each item should have an image, a title (the name of the item), a short 1-2 sentence description, and a price.
- Create a FeaturedItems component. It should have some text that says "Featured Items" (or something similar), and it should contain at least one Item that you'd like to feature
- Create a NewArrivals component. It should have some text that says "New Arrivals" (or something similar), and it should contain at least one Item that you'd like to feature
- Create an AllItems component. It should have some text that says "All Items" (or something similar), and it should contain all of your items
- Create a Navbar component. The navbar should have at least three links, that can eventually link to different pages
- Create a Search component. It should have an input box and a button to submit the search. Do not worry about actually getting it to work yet - for now just create the component to hold the input and button HTML elements. Your Search component can either be nested within your Navbar, or right below it
- Create a 'StoreApp' component that contains your other components

## Bonus
- Try to make your app more modular. Is there a way you can better reuse your components, so you don't need to create so many?
- Try adding a form that lets you add new items to your store listing, and update your listings when you submit a new item

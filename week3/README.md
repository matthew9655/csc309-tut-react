# How many fruits do we need to to eat?

## Things you will learn this tutorial
 - Handling APIs
 - Routers

### You need to fill in the TODO blanks. All of these code sections can be found in `src/Index.js` and `src/routes/Fruit/FruitApp.js`

### Since we are trying to call domain APIs from localhost, we will probably run into a CORS issue. To solve this, we create a proxy. run `node cors.js` before you `npm start`.

### Tasks

1. Create the router to route `FruitApp` to our website.
2. It is vital that we handle error cases from our API calls:
    - create a modal for `FruitInfo` when we get a 404. 
    - replace `FruitEmoji` with `defaultFruit` no emoji comes back from our search results.


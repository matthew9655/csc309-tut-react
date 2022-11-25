## Setup
If you have never installed `Node` or `npm` before please follow this:

1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash`
2. restart your shell (close it and open, alternatively you can `source` your `rc` or `profile` script)
3. `nvm install node`
4. `cd` into the respective weeks
5. `npm install`
6. `npm start`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Week 1
We introduce props, states, and events by creating a simple calculator app.

## Week 2
We build on the calculator app by firstly converting all state creation to the `useState` hook. We add logging by using the `useEffect` hook. Lastly, we introduce `npm` packages by adding a color wheel package into our calculator to change the colors of the display and the board.
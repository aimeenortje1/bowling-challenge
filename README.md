
## BOWLING GAME

The game rules: 
 - A game consists of 10 frames.
  - In general each frame has 2 rolls.
  - In general a player scores the number of pins knocked down.
  - If the player knocks down all 10 pins on the first roll it’s a strike. The player scores 10 plus the number of pins knocked down in the next two rolls.
  - If the player knocks down all 10 pins in two rolls it’s a spare. The player scores 10 plus the number of pins knocked down in the next roll.
  - Added 2 buttons to force a strike and a spare, mainly for demonstrationn purposes

### Outstanding features / bugs
As I wanted to limit myself to more or less 8 hours, I updating here what is outstanding that I would like to have completed
- CSS is very rudamentary, ideally I would like to have made it fully responsive, some animations for when a ball is rolling and the score is updated. 
- The 'end of game' case only works to end the game, not yet to allow for additional attempts to get a bonus
- Ideally I would liked to have cleaned up the code by creating custom hooks. It's getting pretty tough to read :( 
- Testing is minimal, of course I would have liked to add more comprehensive tests
- there is a bug on the game score when hitting strikes and spares
- I really enjoyed this challenge! Up to this point I will merge to main for clarity on where I got to in the 8 hours and will create a new branch with some added features/fixes


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


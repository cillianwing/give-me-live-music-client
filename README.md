# Sound Check

## Concert finding app built with React frontend connected to a Rails API backend.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link to [Rails API backend](https://github.com/cillianwing/give-me-live-music-backend) github repo.

## App Capabilities

### This app utilizes data from Songkick API to provide the user with upcoming concerts for the desired location. User is provided detailed information for each returned concert (artists, venue, etc.). From here, the user is able to add concerts they are attending/interested in attending to their calendar. They can view concerts they have added to better keep track of what is coming up. 

**Eventual Additions**: 
- User will be able to "follow" certain venues, allowing them to easily view the concerts coming up at their favorite venues.
- Links to various playlists (utilizing Spotify API) that are relevant to artists the user will be seeing at upcoming concerts on their calendar.

## To Get Started

1. Clone repo for backend API.
2. Once cloned, run `rails s` to fire up the server.
3. Run `npm start` to start frontend server. It will ask if the user is fine with opening [http://localhost:3001](http://localhost:3001) due to the backend already running on port 3000. Type 'Y' and press enter.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

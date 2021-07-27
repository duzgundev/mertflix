# Mertflix

This is a simple project made by [me](https://m2t.dev) for learning purposes.

[Live App](https://mertflix.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6282557b-37d1-41c5-9ce7-1cfcf0861e5c/deploy-status)](https://app.netlify.com/sites/mertflix/deploys)

You can:

- Sign Up, Sign In
- Search for any movie or TV show
- Mark any title as your favorite
- Login from any device to see your favorites later

I used:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/) for routing
- [React Context Api](https://reactjs.org/docs/context.html) for global state management
- [TailwindCSS](https://tailwindcss.com/) along with [SASS](https://sass-lang.com/) for styling
- [Firebase](https://firebase.google.com/) for authentication and firestore for storing favorites data
- And an API called [TMDB](https://www.themoviedb.org/) for getting all the data I need

## Once you download the project

First go to projects root directory and run:

```
cp .env.example .env
```

This will create an `.env` file with needed fields in root directory.

You need three things for this project to work:

1. A [TMDB API key](https://developers.themoviedb.org/3/getting-started/introduction).
2. A [Firebase](https://firebase.google.com/products-build) web project and your Firebase config credentials.
3. Enable Email/Password sign-in method in Firebase console.

Once you get your credentials, open `.env` file and fill the related variables with your own credentials.

### `yarn install` or `yarn`

Downloads all the necessary dependencies and installs them in your project directory.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### TODO

- [ ] Movie Detail Page
- [ ] Lazy Loading
- [ ] Responsive Layout (Actually, only Header section needs some changes)
- [ ] Skeleton Loader

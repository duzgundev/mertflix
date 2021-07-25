# Mertflix

This is a simple project made by [me](https://m2t.dev) for learning purposes.
I used [React](https://reactjs.org/), [SASS](https://sass-lang.com/) and a movie API called [TMDB](https://www.themoviedb.org/).

[Live Demo](https://mertflix.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6282557b-37d1-41c5-9ce7-1cfcf0861e5c/deploy-status)](https://app.netlify.com/sites/mertflix/deploys)

## Once you download the project

1- You will need your own [API key](https://developers.themoviedb.org/3/getting-started/introduction) for running the project locally.

2- After getting your API key, create a file called `.env` in projects `root` directory and inside the `.env` file type `REACT_APP_TMDB_API_KEY=[YOUR_API_KEY]`.

### `yarn install`

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

- [x] React router
- [x] Context api
- [x] Firebase auth
- [x] TMDB setup
- [x] Favoriye alma
- [ ] Film detay modalı
- [ ] Lazy loading
- [ ] Responsive layout
- [ ] Skeleton loader

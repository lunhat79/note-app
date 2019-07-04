This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##To run the project

npm install 
npm start
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
To run unit test
Using Jest && enzyme for unittest

### notes server API
AT : http://5d1bf861dd81710014e88b3c.mockapi.io/api/notes
- using mockapi.io for sample data.

### usage npm package
Typescript, Using typescript to develop this sample
- React
- React-Redux , Thunk
- React-Router-Dom

### Under SRC Director explain.
1/ appConfigs : Contain configuration for redux-Store
  -- libs : define the following [apiCall, Action, Reducer, Types use for the app]
2/ atoms : 
  Contain smalless component (mostly statelessfunction component) 
  Like Button, Input, ...
3/ compnonents : 
  partial of a page component: Like a list of notes. 
4/ pages : 
  Page of the app correspond to the router
5/Router : 
  Root router of this SPA.
   
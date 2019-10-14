import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path = "/" component = {Home}/>
    <Route path = "/about" component = {About}/>
    <Route path = "/contact" component = {Contact}/>
  </div>
);

export default App;


// * Inside of your `App.js` file `import { Route } from 'react-router-dom';`
// * This is where we're going to declare and specify our router.
// * Create 3 `<Route />` setting their `path` prop equal to `/`, `/about`, `/contact` with their respective components.
// * Be sure to include the `exact` prop on the root component for `/` to make sure that it's rendering the exact component and not all the other components.

// ### Steps for setting up your Navigation

// * Inside of `Navigation.js` `import { Link } from 'react-router-dom'`.
// * Declare the `to` as the href on `<Link>` and specify the correct routes for your app to navigate towards.
// * Head over to your app and start navigating. You should be able to see your URLS changing their paths as you go. Each path should display the proper component. 

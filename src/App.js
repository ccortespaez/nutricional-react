import React, { Fragment } from 'react';
import Header from './components/Header';
import SearchFoodDishes from './components/SearchFoodDishes';
import Footer from './components/Footer';
import './assets/css/styles.css'

const App = () => (
  <Fragment>
    <Header/>
    <SearchFoodDishes/>
    <Footer/>
  </Fragment>
);

App.displayName = "App";

export default App;






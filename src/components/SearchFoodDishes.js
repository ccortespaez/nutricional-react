import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PredefinedFoodDishes from './PredefinedFoodDishes';
import AnyFoodDishes from './AnyFoodDishes';
import FoodDishes from './FoodDishes';
import {getApiUrl} from './../constants';

const SearchFoodDishes = () => {
    const [hits, setHits] = useState();

    const getData = query => {
        query &&
            fetch(getApiUrl(query))
            .then(data => data.json())
            .then(res => setHits(res.hits))
            .catch(error => console.log(error));
    };

    return(
        
    );
};

SearchFoodDishes.displayName = 'SearchFoodDishes';


export default SearchFoodDishes;
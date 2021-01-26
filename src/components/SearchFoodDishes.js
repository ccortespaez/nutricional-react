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
            .catch(error => console.error(error));
    };

    return(
        <Fragment>
            <div className="root">
                <Grid container spacing={3} justify="center">
                    <AnyFoodDishes/>
                    <PredefinedFoodDishes 
                        getData={getData}
                        setHits={setHits}/>
                </Grid>
            </div>
            {hits && <FoodDishes hits={hits}/>}
        </Fragment>
    );
};

SearchFoodDishes.displayName = 'SearchFoodDishes';


export default SearchFoodDishes;
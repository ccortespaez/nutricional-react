import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import FoodDish from './FoodDishes';
import NoResults from './NoResults';

const FoodDishes = ({hits}) => (
    <Fragment>
        {
            hits.length ? 
                <div className="root">
                    <Grid container spacing={3} justify="center">
                        {
                            hits.map(hit => {
                                const {url, label, image, calories, ingredients} = hit.recipe;
                                return(
                                    <FoodDish
                                    key={url}
                                    label={label}
                                    image={image}
                                    calories={calories}
                                    ingredients={ingredients}
                                    />
                                )
                            })
                        }
                    </Grid>
                </div>
            :
                <NoResults/>

        }
    </Fragment>
);

export default FoodDishes;
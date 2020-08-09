import React , { Component, Fragment } from 'react'
import Meal from '../meal'
import style from './index.module.css'

class MealGrid extends Component {
    constructor(props){
        super(props)

        this.state = {
            meals: []
        }
    }

    getMeals() {
        fetch('http://localhost:9999/api/meal')
            .then((meals) => meals.json())
            .then((meals) => {
                this.setState({
                    meals
                })
                console.log(meals);
            })
            .catch((err) => console.log(err))
    }

    componentDidMount(){
        this.getMeals()
    }

    renderMeals() {
        const {meals} = this.state

       return meals.map((meal, index) =>{
            return(
                <Fragment key={index}>
                    <Meal
                        id={meal._id} //meal.id
                        imgUrl='https://via.placeholder.com/450x250'
                        title={meal.title}
                        category={meal.category}
                        raiting={2.5} //meal.raiting
                    />
                </Fragment>
            )
        })
    }

    render(){
        return(
            <div className={style.mealGrid}>
                {this.renderMeals()}
            </div>
        )
    }
}

export default MealGrid
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
        fetch(this.props.fetchURL)
            .then((meals) => meals.json())
            .then((meals) => {
                this.setState({
                    meals
                })
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
                        id={meal._id}
                        imgUrl='https://via.placeholder.com/450x250'
                        title={meal.title}
                        category={meal.category}
                        raiting={2.5} //meal.raiting
                        mealURL={this.props.mealURL}
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
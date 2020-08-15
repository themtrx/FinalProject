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
        if(this.props.fetchURL){
            
            fetch(this.props.fetchURL)
                .then((meals) => meals.json())
                .then((meals) => {
                    this.setState({
                        meals
                    })
                })
                .catch((err) => console.log(err))
        } else {
            const meals = this.props.mealsArr
            this.setState({
                meals
            })
            
        }
    }

    componentDidMount(){
        this.getMeals()
    }

    renderMeals() {
        const {meals} = this.state

        if(meals.length<=0){
            return (
                <div className={style.noMeals}>
                    <h3>There are no meals yet...</h3>
                    <p>
                        {/* <a href="">Register</a> and add new meal. */}
                        Go and <a href="">add new meal</a>
                    </p>
                </div>
            )
        }

       return meals.map((meal, index) =>{
            return(
                <div  key={index}>
                    <Meal
                        id={meal._id}
                        imgUrl={meal.imgUrl}
                        title={meal.title}
                        category={meal.category}
                        raiting={meal.raiting} 
                        mealURL={this.props.mealURL}
                    />
                </div>
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
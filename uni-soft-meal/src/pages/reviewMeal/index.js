import React from 'react'
import MealDetails from '../../components/mealDetails'
import { useContext } from 'react'
import UserContext from '../../services/context'
import Wrapper from '../../components/wrapper'
import SiteLinks from '../../components/link'
import style from './index.module.css'

const ReviewMeal = (props) => {
    const context = useContext(UserContext)
    if(!context.loggedIn){
        return (
            <Wrapper>
                <div className={style.notLogged}>
                    <h3>If you want to read this meal recepie, please go and <SiteLinks href='http://localhost:3000/user/register' title='Register'/></h3>
                    <h3>Or if you already have account <SiteLinks href='http://localhost:3000/user/login' title='Login' /></h3>
                </div>
            </Wrapper>
        )
    }

    return (
        <MealDetails history={props.history}/>
    )
}

export default ReviewMeal
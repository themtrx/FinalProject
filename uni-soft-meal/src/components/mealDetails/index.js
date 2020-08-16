import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import Button from '../button'
import Wrapper from '../wrapper';
import cookieParse from '../../services/cookieParse'
import style from './index.module.css'
import UserContext from '../../services/context';
import chefArr from '../../services/chefs'

const MealDetails = (props) => {
    const params = useParams()
    const id = params.id
    const token = cookieParse.get('x-auth-token')
    const context = useContext(UserContext)
    const chefLevels = chefArr('chefs')

    const [title, setTitle] = useState('')
    const [complexity, setComplexity] = useState('')
    const [prepTime, setPrepTime] = useState(0)
    const [cookTime, setcookTime] = useState(0)
    const [servings, setServings] = useState(0)
    const [category, setCategory] = useState('')
    const [preparation, setPreparation] = useState('')
    const [imgUrl, setimgUrl] = useState('')
    const [raiting, setRaiting] = useState('')
    const [author, setAuthor] = useState('')
    const [published, setPublished] = useState('')

    useEffect(()=> {
        fetch(`http://localhost:9999/api/meal/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }}
        )
        .then((res) =>{
            return res.json()
        })
        .then((meal) => {

            if(meal){
                setTitle(meal.title)
                setComplexity(meal.complexity)
                setPrepTime(meal.prepTime)
                setcookTime(meal.cookTime)
                setServings(meal.servings)
                setCategory(meal.category)
                setPreparation(meal.preparation)
                setimgUrl(meal.imgUrl)
                setRaiting(meal.raiting)
                setAuthor(meal.author.username)
                setPublished(meal.published)
            }
        })

    }, [])

    const approveMeal = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9999/api/meal/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({
                published: true
            })
        })
        .then((res) => res.json())
        .then((meal) => {
            if(meal) {
                props.history.push('/')
            }
        })
        .catch((err) => console.log(err))
    }

    const deleteMeal = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9999/api/meal/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
        })
        .then((res) => res.json())
        .then((meal) => {
            if(meal) {
                props.history.push('/')
            }
        })
        .catch((err) => console.log(err))
    }
    return (
        <Wrapper>
            <div className={style.mealDetails}>
                <img src={imgUrl} alt=""/>
                <h2>{title}</h2>
                <h3><span>Category: </span>{category}</h3>
                <p><span>Author: </span>{author}</p>
                <ReactStars size={30} value={Number(raiting)} edit={true}/>
                <p><span>Complexity: </span>{complexity}</p>
                <p><span>Preparation Time: </span>{prepTime}</p>
                <p><span>Cooking Time: </span>{cookTime}</p>
                <p><span>Servings: </span>{servings}</p>
                <p>{preparation}</p>
                {context.user.isAdmin?<Button handleClick={deleteMeal} name='Delete'/>: null}
                {
                    (!published) && chefLevels.includes(context.user.level) ||
                    (!published) && context.user.isAdmin ? 
                    <Button handleClick={approveMeal} name='Approve'/>
                    : null
                }
            </div>
        </Wrapper>
    )
}

export default MealDetails
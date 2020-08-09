import React from 'react'
import style from './index.module.css'
import ReactStars from 'react-rating-stars-component'

const Meal = ({imgUrl, title, category, raiting, id, key}) => {
    return (
        <article className={style.article}>
            <a href={`http://localhost:3000/api/viewMeal/${id}`}>
                <img src={imgUrl} alt=""/>
                <h3>{title}</h3>
                <h4>{category}</h4>
                <ReactStars size='30' value={raiting} edit={false}/>
            </a>
        </article>
    )
}

export default Meal
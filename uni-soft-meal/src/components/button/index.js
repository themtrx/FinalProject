import React, { Fragment } from 'react'
import style from './index.module.css'

const Button = ({type ,name}) =>{
    return(
        <Fragment>
            <button className={style.button} type={type}>{name}</button>
        </Fragment>
    )
}

export default Button
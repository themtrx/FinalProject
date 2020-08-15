import React, { Fragment } from 'react'
import style from './index.module.css'

const Button = ({type ,name, handleClick}) =>{
    return(
        <Fragment>
            <button className={style.button} onClick={handleClick} type={type}>{name}</button>
        </Fragment>
    )
}

export default Button
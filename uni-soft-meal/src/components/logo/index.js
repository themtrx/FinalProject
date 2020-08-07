import React from 'react'
import logo from '../../images/logo.png'
import style from './index.module.css'

const Logo = ({slogan}) => {

    return (
        <div className={style.container}>
            <a href='/' className={style.link} >
                <img className={style.image} src={logo} alt=""/>
            </a>
                {slogan? <h1 className={style.slogan}>{slogan}</h1>: undefined}
        </div>
    )
}

export default Logo
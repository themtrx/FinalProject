import React from 'react'
import Nav from '../nav'
import style from './index.module.css'
import Logo from '../logo'

const Header = () => {
    return (
        <header className={style.header}>
            <Logo slogan='Unique, soft food for every taste!'/>
            <Nav className={style.navigation}/>
        </header>
    )
}

export default Header
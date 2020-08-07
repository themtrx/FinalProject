import React from 'react'
import SiteLink from '../link'
import style from './index.module.css'

const Nav = () => {
    return (
        <nav className={style.navigation}>
            <SiteLink addClass={style['link-add-style']} href='#' title='New Meals'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Add Meal'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Chefs'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='My Profile'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Logout'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Login'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Register'/>
        </nav>
    )
}

export default Nav
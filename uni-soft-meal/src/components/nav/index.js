import React from 'react'
import SiteLink from '../link'
import style from './index.module.css'

const Nav = () => {
    return (
        <nav className={style.navigation}>
            <SiteLink addClass={style['link-add-style']} href='/' title='Home'/>
            <SiteLink addClass={style['link-add-style']} href='/meals/unpublished' title='Unpublished'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Add Meal'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Chefs'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='My Profile'/>
            <SiteLink addClass={style['link-add-style']} href='#' title='Logout'/>
            <SiteLink addClass={style['link-add-style']} href='/user/login' title='Login'/>
            <SiteLink addClass={style['link-add-style']} href='/user/register' title='Register'/>
        </nav>
    )
}

export default Nav
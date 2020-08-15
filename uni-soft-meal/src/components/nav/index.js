import React, { Component, Fragment } from 'react'
import SiteLink from '../link'
import style from './index.module.css'
import UserContext from '../../services/context'



class Nav extends Component {
    constructor(props){
        super(props)
    }

    static contextType = UserContext

    onClick = () => {
        this.context.logOut()
    }

    checkLogin = () => {
        const isLogged = this.context.loggedIn
        const userId = this.context.user._id

        if(isLogged){
            return (
                <Fragment>
                    <SiteLink addClass={style['link-add-style']} href='/' title='Home'/>
                    <SiteLink addClass={style['link-add-style']} href='/meals/unpublished' title='Unpublished'/>
                    <SiteLink addClass={style['link-add-style']} href='/meals/addMeal' title='Add Meal'/>
                    <SiteLink addClass={style['link-add-style']} href='/chefs' title='Chefs'/>
                    <SiteLink addClass={style['link-add-style']} href={`/user/profile/${userId}`} title='My Profile'/>
                    <SiteLink addClass={style['link-add-style']} href='/' onClick={this.onClick} title='Logout'/>
                </Fragment>
            )
        }else {
            return (
                <Fragment>
                    <SiteLink addClass={style['link-add-style']} href='/user/login' title='Login'/>
                    <SiteLink addClass={style['link-add-style']} href='/user/register' title='Register'/>
                </Fragment>
            )
        }
    }

    render(){
        return (
            <nav className={style.navigation}>
                {this.checkLogin()}
            </nav>
        )
    }
}

export default Nav
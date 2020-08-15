import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Unpublished from './pages/unpublished'
import ErrorPage from './pages/errorPage'
import UserContext from './services/context'
import ProfilePage from './pages/profile'
import AddMeal from './pages/addMeal'


class Routing extends Component {
    constructor(props){
        super(props)
    }

    static contextType = UserContext

    render(){

        const isLogged = this.context.loggedIn
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/meals/unpublished' component={Unpublished}>
                        {isLogged? (<Unpublished/>) : <Redirect to='/user/login'/>}
                    </Route>
                    <Route path='/meals/addMeal' component={AddMeal}/>
                    <Route path='/chefs'/>
                    <Route path='/user/profile/:id' component={ProfilePage}/>
                    <Route path='/user/login' component={Login}/>
                    <Route path='/user/register'component={Register}/>
                    <Route path='/user/logout'/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routing
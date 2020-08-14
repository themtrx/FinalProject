import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Unpublished from './pages/unpublished'
import ErrorPage from './pages/errorPage'

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/meals/unpublished' component={Unpublished}/>
                <Route path='/user/login' component={Login}/>
                <Route path='/user/register'component={Register}/>
                <Route path='/user/logout'/>
                <Route component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing
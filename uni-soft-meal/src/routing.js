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

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/meals/unpublished' component={Unpublished}/>
                <Route path='/user/login' component={Login}/>
                <Route path='/user/register'component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing
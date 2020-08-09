import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/home'

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/user/login'/>
                <Route path='/user/register'/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing
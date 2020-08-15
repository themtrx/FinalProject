import React, { Component } from 'react'
import UserContext from '../../services/context'
import cookieParse from '../../services/cookieParse'

class AuthHandle extends Component {
    constructor(props){
        super(props)

        this.state = {
            loggedIn: null,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logOut = () => {
        cookieParse.dell('x-auth-token')

        this.setState({
            loggedIn: false,
            user: null
        })
    }

    componentDidMount(){
        const token = cookieParse.get('x-auth-token')

        if(!token) {
            this.logOut()
            return
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({
                token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {

            if(res.status) {
                this.logIn({
                    user: res.user
                })
            }else {
                this.logOut()
            }
        })
        .catch((err) => {
            this.logOut()
        })
    }

    render(){
        const {
            loggedIn,
            user
        } = this.state
        
        return(
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}      
            </UserContext.Provider>
        ) 
    }
}

export default AuthHandle
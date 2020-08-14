import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Input from '../../components/input'
import Button from '../../components/button'
import FormWrap from '../../components/formWrap'
import SiteLinks from '../../components/link'
import style from './index.module.css'

import formImage from '../../images/Login.png'


class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    onChange(event, type){
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    onSubmit = (event) => {
        event.preventDefault()

        const {
            username,
            password
        } =  this.state

        fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => 
                Promise.all([
                    res.json(),
                    res.headers.get('Authorization')
                ])
            )
        .then(([currentUser, auth]) => {

            if(currentUser && auth){
                document.cookie = `x-auth-token=${auth}`
                this.props.history.push('/')
            }
        })
        .catch((err) => console.log(err))

    }

    render(){
        console.log(this.state);
        return(
            <Wrapper>
                <FormWrap imgUrl={formImage}>
                    <form className={style.formContainer} onSubmit={this.onSubmit}>
                        <Input 
                            name='username' 
                            type='text'
                            label='Username'
                            onChange={(e)=> this.onChange(e, 'username')}
                        />
                        <Input 
                            name='password' 
                            type='password'
                            label='Password'
                            onChange={(e)=> this.onChange(e, 'password')}
                        />
                        <Button type='submit' name='Login'/>
                        <div>
                            <span>You don't have profile?</span>
                            <SiteLinks href='/user/register' title='Register' />
                        </div>
                    </form>
                </FormWrap>
            </Wrapper>
        )
    }
}

export default Login
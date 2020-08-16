import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Input from '../../components/input'
import Button from '../../components/button'
import FormWrap from '../../components/formWrap'
import SiteLinks from '../../components/link'
import style from './index.module.css'

import formImage from '../../images/Login.png'
import authRequest from '../../services/auth'
import UserContext from '../../services/context'
import { toast } from 'react-toastify';


class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    static contextType = UserContext

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

        authRequest('http://localhost:9999/api/user/login', {username, password})
        .then((user) => {
            if(user){
                this.context.logIn(user)
                this.props.history.push('/')
            }else {
                toast.error('Your username or password is wrong!')
            }
        })
        .catch((err) => {
            toast.error('Your username or password is wrong!')
        })
    }

    render(){
        
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
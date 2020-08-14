import React, {Component} from 'react'
import Wrapper from '../../components/wrapper'
import FormWrap from '../../components/formWrap'
import Input from '../../components/input'
import style from './index.module.css'
import SiteLinks from '../../components/link'
import Button from '../../components/button'

import registerImage from '../../images/undraw_cooking_lyxy.png'
import authRequest from '../../services/auth'
import UserContext from '../../services/context'


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            rePassword: ''
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
            password,
        } =  this.state

        authRequest('http://localhost:9999/api/user/register',{username, password})
        .then((user) => {
            this.context.logIn(user)
            this.props.history.push('/')
        })
        .catch((err) => console.log(err))
    }

    render(){
        return (
            <Wrapper>
                <FormWrap imgUrl={registerImage}>
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
                        <Input 
                            name='rePassword' 
                            type='password'
                            label='Repeat Password'
                            onChange={(e)=> this.onChange(e, 'rePassword')}
                        />
                        <Button type='submit' name='Register'/>
                        <div>
                            <span>Already registered?</span>
                            <SiteLinks href='/user/login' title='Login' />
                        </div>
                    </form>
                </FormWrap>
            </Wrapper>
        )
    }
}

export default Register
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
    }

    onChange(){
    }

    render(){
        return(
            <Wrapper>
                <FormWrap imgUrl={formImage}>
                    <form className={style.formContainer}>
                        <Input 
                            name='username' 
                            type='text'
                            label='Username'
                            onChange={this.onChange()}
                        />
                        <Input 
                            name='password' 
                            type='password'
                            label='Password'
                            onChange={this.onChange()}
                        />
                        <Button name='Login'/>
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
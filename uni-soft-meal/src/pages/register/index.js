import React, {Component} from 'react'
import Wrapper from '../../components/wrapper'
import FormWrap from '../../components/formWrap'
import Input from '../../components/input'
import style from './index.module.css'
import SiteLinks from '../../components/link'
import Button from '../../components/button'

import registerImage from '../../images/undraw_cooking_lyxy.png'


class Register extends Component {
    constructor(props) {
        super(props)
    }

    onChange(){

    }

    render(){
        return (
            <Wrapper>
                <FormWrap imgUrl={registerImage}>
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
                        <Input 
                            name='rePassword' 
                            type='password'
                            label='Repeat Password'
                            onChange={this.onChange()}
                        />
                        <Button name='Register'/>
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
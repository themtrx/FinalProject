import React from 'react'
import Wrapper from '../../components/wrapper'

import style from './index.module.css'
import errorImage from '../../images/error.png'

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className={style.errorPage}>
                <h3>Error! Something went wrong!</h3>
                <img src={errorImage} alt=""/>
            </div>
        </Wrapper>
    )
}

export default ErrorPage
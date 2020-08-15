import React, { Fragment } from 'react'
import Header from '../header'
import Footer from '../footer'
import style from './index.module.css'

const Wrapper = (props) => {
    return (
        <Fragment>
            <Header />
                <main className={style.container}>
                    {props.children}
                </main>
            <Footer />
        </Fragment>
    )
}

export default Wrapper
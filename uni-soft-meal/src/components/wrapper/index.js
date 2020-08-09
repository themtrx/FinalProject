import React from 'react'
import Header from '../header'
import Footer from '../footer'
import style from './index.module.css'

const Wrapper = (props) => {
    return (
        <div>
            <Header />
                <main className={style.container}>
                    {props.children}
                </main>
            <Footer />
        </div>
    )
}

export default Wrapper
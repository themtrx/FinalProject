import React, { Fragment } from 'react'
import Header from '../header'
import Footer from '../footer'
import style from './index.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = (props) => {
    return (
        <Fragment>
            <ToastContainer
                hideProgressBar={true}
            />
            <Header />
                <main className={style.container}>
                    {props.children}
                </main>
            <Footer />
        </Fragment>
    )
}

export default Wrapper
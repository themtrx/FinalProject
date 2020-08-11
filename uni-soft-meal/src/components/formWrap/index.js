import React from 'react'
import style from './index.module.css'

const FormWrap = (props) => {

    return (
        <div className={style.formWrap}>
            <div className={style.imgSide}>
                <img src={props.imgUrl} alt=""/>
            </div>
            <div className={style.formSide}>
                {props.children}
            </div>
        </div>
    )

}

export default FormWrap
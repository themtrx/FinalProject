import React, { Fragment } from 'react'
import style from './index.module.css'

const Input = ({label, name, type, value, onChange, defaultValue, disabled}) => {
    return(
        <Fragment>
            <label htmlFor={name}>{label}</label>
            <input className={style.formInput} disabled={disabled} type={type} value={value} id={name} onChange={onChange} defaultValue={defaultValue}/>
        </Fragment>
    )
}

export default Input
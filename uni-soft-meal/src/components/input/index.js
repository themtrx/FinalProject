import React, { Fragment } from 'react'
import style from './index.module.css'

const Input = ({label, name, type, value, onChange, defaultValue, disabled, onBlur}) => {
    return(
        <Fragment>
            <label htmlFor={name}>{label}</label>
            <input onBlur={onBlur}
                className={style.formInput}
                disabled={disabled}
                type={type}
                value={value}
                id={name}
                onChange={onChange}
                defaultValue={defaultValue}/>
        </Fragment>
    )
}

export default Input
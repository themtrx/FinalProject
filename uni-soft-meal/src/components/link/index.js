import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

const SiteLinks = ({href, title, addClass, onClick}) => {

    return (
        <Link className={[style.link, addClass].join(' ')} to={href} onClick={onClick}>
            {title}
        </Link>
    )

}

export default SiteLinks
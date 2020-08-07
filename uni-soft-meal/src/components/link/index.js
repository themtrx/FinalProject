import React from 'react'
import style from './index.module.css'

const SiteLinks = ({href, title, addClass}) => {

    return (
        <a className={[style.link, addClass].join(' ')} href={href}>
            {title}
        </a>
    )

}

export default SiteLinks
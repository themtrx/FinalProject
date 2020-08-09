import React from 'react'
import style from './index.module.css'
import SiteLinks from '../link'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style['footer-links']}>
                <SiteLinks href='#' title='Contacts' />
                <SiteLinks href='#' title='Cookie Policy' />
                <SiteLinks href='#' title='Site Conditions' />
            </div>
            <p>Copyright &copy; Uni Soft Meal - All Rights Reserved</p>
        </footer>
    )
}

export default Footer
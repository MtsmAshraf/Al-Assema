import React from 'react'
import styles from "./vertical-nav.module.css"
import SocialUl from '../SocialUl/SocialUl'
import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { Link } from '@/i18n/routing'
const VerticalNav = ({
    shown,
    lo
} : {
    shown: boolean,
    lo: string
}) => {
  return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        <h3>Language</h3>
        <LangSwitch lo={lo}></LangSwitch>
        <h3>Pages</h3>
        <ul className={styles.links}>
            <li>
                <Link href={'/products'}>Products</Link>
            </li>
            <li>
                <Link href={'/services'}>Services</Link>
            </li>
            <li>
                <Link href={'/about'}>About Us</Link>
            </li>
        </ul>
        <h3>Social Media</h3>
        <SocialUl></SocialUl>
    </div>
  )
}

export default VerticalNav
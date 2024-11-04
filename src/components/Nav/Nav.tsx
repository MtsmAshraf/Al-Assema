import React from 'react'
import styles from "./nav.module.css"
import Link from 'next/link'
import LangSwitch from './LangSwitch/LangSwitch'

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
        <LangSwitch></LangSwitch>
    </nav>
  )
}

export default Nav
import React from 'react'
import styles from "./nav.module.css"
import Link from 'next/link'
import LangSwitch from './LangSwitch/LangSwitch'
import { useTranslations } from 'next-intl'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Header")
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
        <ul className={styles.links}>
            <li>
                <Link href={'/products'}>{t("Nav.Products")}</Link>
            </li>
            <li>
                <Link href={'/services'}>{t("Nav.Services")}</Link>
            </li>
            <li>
                <Link href={'/about'}>{t("Nav.AboutUs")}</Link>
            </li>
        </ul>
        <LangSwitch lo={lo}></LangSwitch>
    </nav>
  )
}

export default Nav
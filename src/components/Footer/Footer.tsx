import Image from 'next/image'
import React from 'react'
import logo from "../../../public/imgs/logo-removebg.png"
import bgLogo from "../../../public/imgs/favicon.ico"
import styles from "./footer.module.css"
import SocialUl from '../SocialUl/SocialUl'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.bgImg}>
            <Image src={bgLogo} alt='logo bg'></Image>
        </div>
        <div className={styles.footerContainer}>
            <Link href={"/"} className={styles.logo}>
                <Image src={logo} alt='Al-Assema Logo'></Image>
            </Link>
            <p>
                &copy; Al-Assema for Compressed Air Systems
            </p>
            <SocialUl></SocialUl>
            <div className={styles.devFooter}>
                by: <a href="https://moatasim-ashraf.netlify.app">Moatasim</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
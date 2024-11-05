"use client"
import React, { useState } from 'react'
import styles from "./header.module.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../public/imgs/logo-removebg.png"
import Nav from '../Nav/Nav'
import SocialUl from '../SocialUl/SocialUl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import VerticalNav from '../VerticalNav/VerticalNav'

const Header = ({
    lo
  }: {
    lo: string
  }) => {
    const [showVNav, setShowVNav] = useState(false)
  return (
    <header className={styles.header}>
        <div className="container">
            <Link className={styles.logo} href={"/"}>
                <Image loading='lazy' src={logo} alt='Al Assema Logo'></Image>
            </Link>
            <Nav lo={lo}></Nav>
            <button className={styles.bars} onClick={() => {setShowVNav(!showVNav)}}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <button className={showVNav ? styles.close + " " + styles.shown : styles.close} onClick={() => {setShowVNav(!showVNav)}}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <VerticalNav lo={lo} shown={showVNav}></VerticalNav>
            <SocialUl></SocialUl>
        </div>
    </header>
  )
}

export default Header
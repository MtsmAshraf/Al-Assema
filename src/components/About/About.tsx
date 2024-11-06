import React from 'react'
import styles from "./about.module.css"
import MainBtn from '../MainBtn/MainBtn'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import logo from "../../../public/imgs/logo-removebg.png"
const About = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations('HomePage');
    const tBtn = useTranslations('MainBtn');
  return (
    <section className={lo === "ar"? styles.about + " " + styles.ar: styles.about}>
        <div className="container">
            <div className={styles.text}>
                <div className={styles.aboutHeading}>
                    <h2>{t("About.Heading")}</h2>
                    <p>{t("About.Span")}</p>
                </div>
                <p className={styles.aboutDetails}>
                    {t("About.P")}
                </p>
                <MainBtn lo={lo}>
                    <Link href={"/about"}>
                        <span>
                            {tBtn("More")}
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </MainBtn>
            </div>
            <div className={styles.logo}>
                <Image src={logo} alt='Al-Assema logo'></Image>
            </div>
        </div>
    </section>
  )
}

export default About
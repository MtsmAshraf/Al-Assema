import React from 'react'
import styles from "./services.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faScrewdriverWrench, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
const Services = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("HomePage")
  return (
    <section className={lo === "ar" ? styles.services + " " + styles.ar : styles.services}>
        <div className="container">
            <MainHeading>
                <h2>
                    {t('Services.MainHeading.H2')}
                </h2>
                <p>
                    {t('Services.MainHeading.P')}
                </p>
            </MainHeading>
            <div className={styles.servicesCards}>
                <Link href={"/services"} className={styles.card}>
                    <span>
                        <FontAwesomeIcon icon={faHeadset} />
                    </span>
                    <h3>
                        {t('Services.Cards.Headings.1')}
                    </h3>
                    <ul>
                    <li>
                            {t('Services.Cards.Uls.1.0')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.1.1')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.1.2')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.1.3')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.1.4')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.1.5')}
                        </li>
                    </ul>
                </Link>
                <Link href={"/services"} className={styles.card}>
                    <span>
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                    </span>
                    <h3>
                        {t('Services.Cards.Headings.0')}
                    </h3>
                    <ul>
                        <li>
                            {t('Services.Cards.Uls.0.0')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.0.1')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.0.2')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.0.3')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.0.4')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.0.5')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.0.6')}
                        </li>
                    </ul>
                </Link>
                <Link href={"/services"} className={styles.card}>
                    <span>
                        <FontAwesomeIcon icon={faUserCheck} />
                    </span>
                    <h3>
                        {t('Services.Cards.Headings.2')}
                    </h3>
                    <ul>
                    <li>
                            {t('Services.Cards.Uls.2.0')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.2.1')}
                        </li>
                        <li>
                            {t('Services.Cards.Uls.2.2')}
                        </li>
                    </ul>
                </Link>
                {/* <Link href={"/services"} className={styles.card}>
                    <span>
                        <FontAwesomeIcon icon={faChalkboardUser} />
                    </span>
                    <h3>
                        Training
                    </h3>
                                    <ul>
                                    <li>
                                    </li></ul>
</Link> */}
            </div>
        </div>
    </section>
  )
}

export default Services
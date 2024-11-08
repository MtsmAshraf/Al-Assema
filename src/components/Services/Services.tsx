import React from 'react'
import styles from "./services.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardUser, faHeadset, faScrewdriverWrench, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
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
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                    </span>
                    <h3>
                        Spare Parts
                    </h3>
                    <p>
                        The only way to get trouble-free and long-term use of the compressor is to use only original spare parts and lubricants. Al-assema competent service staff use only genuine SmartPARTS spare parts with proven durability to ensure unrivalled reliability and long service life.
                    </p>
                </Link>
                <Link href={"/services"} className={styles.card}>
                    <span>
                        <FontAwesomeIcon icon={faHeadset} />
                    </span>
                    <h3>
                        Service & Support
                    </h3>
                    <p>
                        Al-Assemaxpert servicing team experienced in compressors and spare parts delivers a servicing service 24 hours a day, 365 days a year in Türkiye and the 130+ countries we export to providing our business partners in every industry with non-stop compressed air solutions.
                    </p>
                </Link>
                <Link href={"/services"} className={styles.card}>
                    <span>
                        <FontAwesomeIcon icon={faUserCheck} />
                    </span>
                    <h3>
                        Customer Experience
                    </h3>
                    <p>
                        Al-Assema customer experience team of professionals are just a call or email away to help you find exactly what you need. This service allows us to respond to your requests and queries on time and track issue resolution
                    </p>
                </Link>
                <Link href={"/services"} className={styles.card}>
                    <span>
                        <FontAwesomeIcon icon={faChalkboardUser} />
                    </span>
                    <h3>
                        Training
                    </h3>
                    <p>
                        Al-Assema support engineers offer effective and world-class air compressor and compressed air equipment training programs to operation and maintenance teams. Naturally prepared and tailored precisely to your individual requirements. Training takes place at our facility, with qualified service partners or directly on-site for you on request.
                    </p>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Services
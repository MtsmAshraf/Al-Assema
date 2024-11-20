import React from 'react'
import styles from "./services.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
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
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100.000000 100.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M204 790 c-12 -4 -31 -21 -43 -36 -20 -26 -21 -36 -21 -290 l0 -264
                            360 0 360 0 0 300 0 300 -317 -1 c-175 0 -328 -4 -339 -9z m636 -290 l0 -280
                            -340 0 -340 0 0 251 0 251 29 29 29 29 311 0 311 0 0 -280z"/>
                            <path d="M199 733 c-11 -12 -15 -70 -17 -250 l-3 -233 320 0 321 0 0 250 0
                            250 -304 0 c-270 0 -305 -2 -317 -17z m281 -13 c0 -6 -47 -10 -120 -10 -73 0
                            -120 -4 -120 -10 0 -6 47 -10 120 -10 100 0 120 -2 120 -15 0 -13 -22 -15
                            -135 -15 l-135 0 0 28 c0 16 3 32 7 35 11 11 263 8 263 -3z m162 -92 c4 -136
                            0 -168 -21 -168 -14 0 -16 13 -13 100 l4 100 -47 0 -47 0 4 -100 c4 -111 0
                            -117 -52 -78 -18 13 -30 31 -30 45 0 21 -4 23 -50 23 -49 0 -50 -1 -50 -30 0
                            -16 -4 -30 -10 -30 -5 0 -10 7 -10 15 0 8 -4 15 -9 15 -5 0 -11 -7 -15 -15 -3
                            -10 -19 -15 -46 -15 l-40 0 0 75 c0 43 4 75 10 75 6 0 10 -9 10 -20 0 -19 7
                            -20 110 -20 103 0 110 1 110 20 0 15 7 20 25 20 23 0 25 4 25 45 l0 45 69 0
                            70 0 3 -102z m148 -9 c0 -71 -4 -108 -10 -104 -5 3 -10 44 -10 89 0 64 -4 87
                            -16 97 -21 18 -48 0 -52 -35 -2 -18 -9 -26 -23 -26 -16 0 -19 7 -19 45 l0 45
                            65 0 65 0 0 -111z m-40 -25 c0 -73 3 -85 20 -96 11 -7 20 -18 20 -25 0 -16
                            -56 -17 -66 -2 -8 13 -6 197 2 210 15 24 24 -10 24 -87z m-320 36 c0 -6 -37
                            -10 -90 -10 -53 0 -90 4 -90 10 0 6 37 10 90 10 53 0 90 -4 90 -10z m160 -61
                            c0 -67 -1 -70 -22 -67 -21 3 -23 9 -26 71 -3 66 -3 67 23 67 24 0 25 -2 25
                            -71z m110 21 c0 -23 -4 -30 -20 -30 -16 0 -20 7 -20 30 0 23 4 30 20 30 16 0
                            20 -7 20 -30z m-10 -60 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10
                            10 6 0 10 -4 10 -10z m-270 -20 c0 -15 -7 -20 -24 -20 -27 0 -41 14 -31 30 3
                            6 17 10 31 10 17 0 24 -5 24 -20z m280 -30 c0 -13 -7 -20 -20 -20 -13 0 -20 7
                            -20 20 0 13 7 20 20 20 13 0 20 -7 20 -20z m-120 -15 c0 -8 -4 -15 -10 -15 -5
                            0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m-340 -54 c0 -65 -7 -94 -21
                            -85 -10 6 -12 127 -2 137 16 17 23 3 23 -52z m180 49 c0 -6 -33 -10 -80 -10
                            -47 0 -80 4 -80 10 0 6 33 10 80 10 47 0 80 -4 80 -10z m48 -2 c14 -14 16
                            -107 2 -128 -17 -26 -30 8 -30 78 0 62 6 72 28 50z m93 -28 c26 0 29 -3 29
                            -34 0 -37 -12 -46 -61 -46 -28 0 -29 2 -29 46 0 38 3 45 16 40 9 -3 29 -6 45
                            -6z m77 -38 c2 -33 0 -42 -12 -42 -12 0 -16 11 -16 46 0 59 24 55 28 -4z m72
                            38 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 11 10 25 10 18 0 25 -5 25 -20 0
                            -11 -7 -20 -15 -20 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 8 0 15 -7 15 -15 0
                            -9 -9 -15 -25 -15 -14 0 -25 5 -25 10 0 6 -7 10 -15 10 -8 0 -15 -4 -15 -10 0
                            -5 -11 -10 -25 -10 -23 0 -25 4 -25 45 0 41 2 45 25 45 14 0 25 -4 25 -10z
                            m-290 -25 c0 -25 -1 -25 -80 -25 -79 0 -80 0 -80 25 0 25 1 25 80 25 79 0 80
                            0 80 -25z m0 -55 c0 -6 -33 -10 -80 -10 -47 0 -80 4 -80 10 0 6 33 10 80 10
                            47 0 80 -4 80 -10z m190 -51 l0 -29 -80 0 c-44 0 -80 4 -80 9 0 16 55 46 95
                            51 55 8 65 3 65 -31z m50 -5 c0 -15 -6 -24 -15 -24 -15 0 -21 40 -9 53 12 11
                            24 -3 24 -29z m40 6 c0 -16 -4 -30 -10 -30 -5 0 -10 14 -10 30 0 17 5 30 10
                            30 6 0 10 -13 10 -30z m50 -6 c0 -15 -6 -24 -15 -24 -15 0 -21 40 -9 53 12 11
                            24 -3 24 -29z m40 6 c0 -16 -4 -30 -10 -30 -5 0 -10 14 -10 30 0 17 5 30 10
                            30 6 0 10 -13 10 -30z m-460 -10 c0 -17 -7 -20 -40 -20 -33 0 -40 3 -40 20 0
                            17 7 20 40 20 33 0 40 -3 40 -20z m100 0 c0 -17 -7 -20 -40 -20 -33 0 -40 3
                            -40 20 0 17 7 20 40 20 33 0 40 -3 40 -20z m-200 -11 c0 -5 -4 -9 -10 -9 -5 0
                            -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z"/>
                            <path d="M520 390 c0 -5 11 -10 25 -10 14 0 25 5 25 10 0 6 -11 10 -25 10 -14
                            0 -25 -4 -25 -10z"/>
                            </g>
                        </svg>
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
                    <div className={styles.cardMore}>
                        <h4>
                            {t('Services.Cards.More')}
                        </h4>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
            </Link>
            <Link href={"/services"} className={styles.card}>
                <span>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                    <path d="M0 0 C2.31 0 4.62 0 7 0 C7.495 6.93 7.495 6.93 8 14 C9.051875 12.9171875 9.051875 12.9171875 10.125 11.8125 C16.87366131 5.12070943 22.17635748 1 32 1 C32 19.48 32 37.96 32 57 C22.75707365 55.97300818 18.31058581 54.71585457 12.171875 48 C7.31565431 41.77649387 5.67505872 36.81765922 5.8125 28.875 C5.81314453 28.15957031 5.81378906 27.44414062 5.81445312 26.70703125 C5.84102098 23.54840896 5.99476887 21.01569338 7 18 C6.34 17.67 5.68 17.34 5 17 C4.5859375 13.83984375 4.5859375 13.83984375 4.375 9.9375 C4.30023438 8.64714844 4.22546875 7.35679688 4.1484375 6.02734375 C4.09945312 5.02832031 4.05046875 4.02929688 4 3 C3.67 3 3.34 3 3 3 C2.67 9.27 2.34 15.54 2 22 C0.02 22 -1.96 22 -4 22 C-4.33 19.69 -4.66 17.38 -5 15 C-6.65 15.33 -8.3 15.66 -10 16 C-10 16.66 -10 17.32 -10 18 C-10.99 18 -11.98 18 -13 18 C-13 19.32 -13 20.64 -13 22 C-13.66 22 -14.32 22 -15 22 C-15 22.66 -15 23.32 -15 24 C-14.113125 24.04125 -13.22625 24.0825 -12.3125 24.125 C-8.81567396 25.0486899 -7.08837453 26.13944666 -4.921875 29.05859375 C-3.07347653 32.95119562 -3.13637361 36.83705093 -4 41 C-5.70431827 44.11414036 -7.77619399 46.38809699 -11 48 C-15.09157355 48.51512617 -19.23589546 48.94367269 -22.95703125 46.953125 C-25.85592636 44.55501226 -27.79811835 42.60351712 -28.2734375 38.828125 C-28.58169788 31.00305393 -28.58169788 31.00305393 -25.875 27.4375 C-22.75477323 24.79209034 -21.03467916 24.1876595 -17 24 C-17 23.34 -17 22.68 -17 22 C-17.66 22 -18.32 22 -19 22 C-19 20.68 -19 19.36 -19 18 C-19.99 18 -20.98 18 -22 18 C-22 17.34 -22 16.68 -22 16 C-23.98 16 -25.96 16 -28 16 C-28 14.02 -28 12.04 -28 10 C-26.02 10 -24.04 10 -22 10 C-22 9.34 -22 8.68 -22 8 C-21.34 8 -20.68 8 -20 8 C-20 6.68 -20 5.36 -20 4 C-17.36 4 -14.72 4 -12 4 C-12 5.32 -12 6.64 -12 8 C-11.34 8 -10.68 8 -10 8 C-10 8.66 -10 9.32 -10 10 C-8.68 10 -7.36 10 -6 10 C-6 10.66 -6 11.32 -6 12 C-4.68 12 -3.36 12 -2 12 C-2 14.31 -2 16.62 -2 19 C-1.34 19 -0.68 19 0 19 C0 12.73 0 6.46 0 0 Z M16.76953125 10.09375 C10.02976156 17.45961851 8.51399378 22.5569732 8.69140625 32.5546875 C9.34893571 39.89571262 12.85920263 44.55971667 18.12890625 49.5234375 C21.74862663 52.3799183 25.31983406 54 30 54 C30 52.02 30 50.04 30 48 C29.22076172 47.67128906 29.22076172 47.67128906 28.42578125 47.3359375 C23.23385503 44.97509859 20.28405391 42.67728891 17 38 C15.04053054 32.12159161 15.20669623 25.42398374 17.125 19.5625 C20.55168021 14.87937038 24.46880455 11.78950441 30 10 C30 8.02 30 6.04 30 4 C24.63809516 4 20.57986643 6.51697302 16.76953125 10.09375 Z M-18 6 C-18 6.66 -18 7.32 -18 8 C-16.68 8 -15.36 8 -14 8 C-14 7.34 -14 6.68 -14 6 C-15.32 6 -16.64 6 -18 6 Z M-20 10 C-20 11.98 -20 13.96 -20 16 C-17.36 16 -14.72 16 -12 16 C-12 14.02 -12 12.04 -12 10 C-14.64 10 -17.28 10 -20 10 Z M-26 12 C-26 12.66 -26 13.32 -26 14 C-24.68 14 -23.36 14 -22 14 C-22 13.34 -22 12.68 -22 12 C-23.32 12 -24.64 12 -26 12 Z M-10 12 C-10 12.66 -10 13.32 -10 14 C-9.34 14 -8.68 14 -8 14 C-8 13.34 -8 12.68 -8 12 C-8.66 12 -9.32 12 -10 12 Z M28 13 C28 13.99 28 14.98 28 16 C28.66 16.33 29.32 16.66 30 17 C30 15.68 30 14.36 30 13 C29.34 13 28.68 13 28 13 Z M23 16 C22.01 17.485 22.01 17.485 21 19 C21.804375 19.763125 22.60875 20.52625 23.4375 21.3125 C26 24 26 24 27 27 C24.03 27 21.06 27 18 27 C18 28.32 18 29.64 18 31 C20.97 31 23.94 31 27 31 C25.16172132 34.15133488 23.24027294 37.11964908 21 40 C21.99 40.66 22.98 41.32 24 42 C27.98285712 39.17880954 29.69479021 37.56489381 30.64453125 32.6953125 C31.05307342 25.85438623 31.05307342 25.85438623 28.41796875 19.7578125 C26.67843284 18.27690413 25.01105539 17.0773511 23 16 Z M-17 18 C-17 18.66 -17 19.32 -17 20 C-16.34 20 -15.68 20 -15 20 C-15 19.34 -15 18.68 -15 18 C-15.66 18 -16.32 18 -17 18 Z M19 22 C18.67 22.99 18.34 23.98 18 25 C19.32 24.67 20.64 24.34 22 24 C21.01 23.34 20.02 22.68 19 22 Z M-23 29 C-25.68652977 33.02979465 -25.40344574 35.23934031 -25 40 C-24.01 40.495 -24.01 40.495 -23 41 C-22.67 41.99 -22.34 42.98 -22 44 C-18.76823243 45.61588379 -15.49384717 45.57451407 -12 45 C-8.83333333 43.16666667 -8.83333333 43.16666667 -7 40 C-6.4712973 37.08935249 -6.65467118 35.00929404 -7 32 C-7.66 31.34 -8.32 30.68 -9 30 C-9.66 30 -10.32 30 -11 30 C-11.33 29.01 -11.66 28.02 -12 27 C-17.86543252 26.45501225 -17.86543252 26.45501225 -23 29 Z M18 33 C18.99 34.485 18.99 34.485 20 36 C20.66 35.01 21.32 34.02 22 33 C20.68 33 19.36 33 18 33 Z M29 41 C28.01 42.485 28.01 42.485 27 44 C27.99 44.33 28.98 44.66 30 45 C29.67 43.68 29.34 42.36 29 41 Z " fill="#000000" transform="translate(30,3)"/>
                    <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C1.78021621 3.54121623 0.51752562 5.6811403 -1.125 8 C-3.99365043 13.03366963 -3.85661678 18.39102232 -3 24 C-0.80814169 29.75479395 2.71265305 33.04892263 8 36 C7.67 36.99 7.34 37.98 7 39 C2.73681528 38.50809407 -0.15581437 36.02670021 -3 33 C-8.07414783 26.55614355 -7.92386095 18.8573916 -7 11 C-5.61288894 6.54094541 -3.38226963 3.20782593 0 0 Z " fill="#000000" transform="translate(47,14)"/>
                    <path d="M0 0 C0.86625 0.4640625 0.86625 0.4640625 1.75 0.9375 C3.84294184 1.92583364 5.74535275 2.5168613 8 3 C8.66 5.31 9.32 7.62 10 10 C4.30769231 10 4.30769231 10 2 9 C0.21715186 5.70173093 0 3.8225249 0 0 Z " fill="#000000" transform="translate(9,33)"/>
                    <path d="M0 0 C0.99 0 1.98 0 3 0 C2.67 0.99 2.34 1.98 2 3 C1.01 3 0.02 3 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#000000" transform="translate(56,52)"/>
                    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#000000" transform="translate(13,15)"/>
                    </svg>
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
                <div className={styles.cardMore}>
                    <h4>
                        {t('Services.Cards.More')}
                    </h4>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </Link>
            <Link href={"/services"} className={styles.card}>
                <span>
                    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.0261 7.548V11.578L27.0521 9.253L28.0521 10.986L23.0261 13.887V20.815L29.0261 17.351V11.548H31.0261V16.196L34.5171 14.182L35.5171 15.914L32.0261 17.929L36.0521 20.253L35.0521 21.986L30.0261 19.083L24.0261 22.547L30.0271 26.012L35.0521 23.11L36.0521 24.842L32.0261 27.166L35.5171 29.182L34.5171 30.914L31.0261 28.899V33.548H29.0261V27.744L23.0261 24.279V31.208L28.0521 34.11L27.0521 35.842L23.0261 33.517V37.548H21.0261V33.517L17.0001 35.842L16.0001 34.11L21.0261 31.208V24.279L15.0261 27.743V33.548H13.0261V28.898L9.53606 30.914L8.53606 29.182L12.0251 27.166L8.00006 24.842L9.00006 23.11L14.0251 26.011L20.0251 22.547L14.0261 19.083L9.00006 21.986L8.00006 20.253L12.0261 17.929L8.53606 15.914L9.53606 14.182L13.0261 16.196V11.548H15.0261V17.351L21.0261 20.815V13.887L16.0001 10.986L17.0001 9.253L21.0261 11.578V7.548H23.0261Z" fill="#3C3C3C"/>
                    </svg>
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
                <div className={styles.cardMore}>
                    <h4>
                        {t('Services.Cards.More')}
                    </h4>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </Link>
            </div>
        </div>
    </section>
  )
}

export default Services
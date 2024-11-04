import React from 'react'
import styles from "./about.module.css"
import MainBtn from '../MainBtn/MainBtn'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <section className={styles.about}>
        <div className="container">
            <div className={styles.aboutHeading}>
                <h2>Al-Assema Compressor</h2>
                <p>for Compressed Air Systems</p>
            </div>
            <p className={styles.aboutDetails}>Dalgakıran Kompresör is Turkey&apos;s global brand that produces industrial compressors and compressed air systems. Our products ensure that our customers achieve sustainable productivity in a wide range of markets including general engineering, manufacturing and process industries, construction, automotive, pharmaceutical, food and many more. Founded by Ömer Dalgakıran in Istanbul in 1965, Dalgakıran Kompresör is Turkey&apos;s largest industrial compressor manufacturer and exporter. Dalgakıran Kompresör, which exports to more than 130 countries today, meets the oil-injected and oil-free compressed air needs of many different sectors with high efficiency with its rotary screw compressor, reciprocating compressor and scroll compressor models.</p>
            <MainBtn>
                <Link href={"/about"}>
                    <span>
                        More
                    </span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </MainBtn>
        </div>
    </section>
  )
}

export default About
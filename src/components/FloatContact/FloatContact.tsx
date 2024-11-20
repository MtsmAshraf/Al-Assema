"use client"
import React, { useEffect, useState } from 'react'
import styles from "./float-contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const FloatContact = () => {
    const [active, setActive] = useState(false)
    useEffect(() => {
        setInterval(() => {
            setActive(true)
        }, 60000);
        setTimeout(() => {
            setInterval(() => {
                setActive(false)
            }, 60000);
        }, 3000);
    }, [])
  return (
        <div className={styles.parent}>
            <span onClick={() => {setActive(false)}} className={active ? styles.overlay + " " + styles.shown : styles.overlay}></span>
            <button className={active ? styles.floatContact + " " + styles.active : styles.floatContact}>
                <FontAwesomeIcon icon={faInfo} />
                <div>
                    <span>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                    <div>
                        <a target='_blank' href="https://wa.me/201017047579">Services</a>
                        <a target='_blank' href="https://wa.me/201096953160">Sales</a>
                    </div>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <div>
                        <a target='_blank' href="tel:+201017047579">Services</a>
                        <a target='_blank' href="tel:+201000220174">Sales</a>
                    </div>
                </div>
            </button>
        </div>
  )
}

export default FloatContact
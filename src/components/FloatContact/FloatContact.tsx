import React from 'react'
import styles from "./float-contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const FloatContact = () => {
  return (
    <button className={styles.floatContact}>
        <FontAwesomeIcon icon={faInfo} />
        <div>
            <span>
                <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <div>
                <a href="https://wa.me/201096953160">Services</a>
                <a href="https://wa.me/201096953160">Sales</a>
            </div>
        </div>
        <div>
            <span>
                <FontAwesomeIcon icon={faPhone} />
            </span>
            <div>
                <a href="tel:00201096953160">Services</a>
                <a href="tel:00201096953160">Sales</a>
            </div>
        </div>
    </button>
  )
}

export default FloatContact
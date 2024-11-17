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
                <a target='_blank' href="https://wa.me/201017047579">Services</a>
                <a target='_blank' href="https://wa.me/201096953160">Sales</a>
            </div>
        </div>
        <div>
            <span>
                <FontAwesomeIcon icon={faPhone} />
            </span>
            <div>
                <a target='_blank' href="tel:00201017047579">Services</a>
                <a target='_blank' href="tel:00201000220174">Sales</a>
            </div>
        </div>
    </button>
  )
}

export default FloatContact
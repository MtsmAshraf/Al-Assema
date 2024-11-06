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
                <a href="/">Services</a>
                <a href="/">Sales</a>
            </div>
        </div>
        <div>
            <span>
                <FontAwesomeIcon icon={faPhone} />
            </span>
            <div>
                <a href="/">Services</a>
                <a href="/">Sales</a>
            </div>
        </div>
    </button>
  )
}

export default FloatContact
import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li>
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebookF}/>
            </a>
        </li>
        <li>
            <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </li>
        <li>
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl
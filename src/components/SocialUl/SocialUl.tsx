import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li>
            <a title="Facebook" href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebookF}/>
            </a>
        </li>
        <li>
            <a title="Linkedin" href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </li>
        <li>
            <a title="Whatsapp" href="https://facebook.com">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
        </li>
        <li>
            <a title="Gmail" href="mailto:assemaforcompressor@gmail.com?subject=AlAsema-website">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl
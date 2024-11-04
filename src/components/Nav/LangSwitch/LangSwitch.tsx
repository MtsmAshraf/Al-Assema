import React from 'react'
import styles from "./lang-switch.module.css"
const LangSwitch = () => {
  return (
    <button className={styles.langSwitch}>
      <span>Ar</span>
      <span className={styles.active}>En</span>
    </button>
  )
}

export default LangSwitch
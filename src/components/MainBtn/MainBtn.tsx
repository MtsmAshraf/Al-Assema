import React from 'react'
import styles from "./main-btn.module.css"
const MainBtn = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <button className={styles.mainBtn}>
        {children}
    </button>
  )
}

export default MainBtn
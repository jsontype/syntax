import React from "react"
import styles from "./Button.module.scss"

export default function Button() {
  return (
    <div>
      <button className={styles.primaryButton}>버튼</button>
      <button className={styles.secondaryButton}>버튼</button>
      <button className={styles.dangerButton}>버튼</button>
      <button className={styles.infoButton}>버튼</button>
    </div>
  )
}

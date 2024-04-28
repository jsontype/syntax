import React from "react"
import styles from "./page.module.css"

export default function List() {
  return (
    <div>
      <h2 className={styles.title}>상품목록</h2>
      <div>
        <div className={styles.item}>상품1 $40</div>
        <div className={styles.item}>상품2 $40</div>
      </div>
    </div>
  )
}

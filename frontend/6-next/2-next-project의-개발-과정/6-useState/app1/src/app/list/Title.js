import React from "react"
import styles from "./page.module.css"

// Props를 쓰는 것만 주는 방법
export default function Title({ text }) {
  return <h2 className={styles.title}>{text}</h2>
}

// Props 전체를 주는 방법
// export default function Title(props) {
//   return <h2 className={styles.title}>{props.text}</h2>
// }

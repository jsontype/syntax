import Child from "./Child"
import styles from "./style.module.scss"

export default function index() {
  return (
    <div className={styles.app}>
      <h1>CssModule</h1>
      <Child />
    </div>
  )
}

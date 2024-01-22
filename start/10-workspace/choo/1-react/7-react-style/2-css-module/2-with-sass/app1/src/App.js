import styles from "./App.module.scss"
import Button from "./Button"

export default function App() {
  return (
    <div className={styles.App}>
      <div>Hello React!</div>
      <Button />
    </div>
  )
}

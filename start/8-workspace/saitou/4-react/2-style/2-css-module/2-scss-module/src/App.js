import styles from "./App.module.scss"
import Movies from "./components/movies"

export default function App() {
  return (
    <div className={styles.App}>
      <div>おはよう！</div>
      <Movies />
    </div>
  )
}

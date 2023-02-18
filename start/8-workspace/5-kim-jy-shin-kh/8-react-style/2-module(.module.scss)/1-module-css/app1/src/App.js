import styles from "./App.module.css"
import Button from "./Button"

function App() {
  return (
    <div className="App">
      <Button />
      <button className={styles.btn}>앱 쪽 버튼</button>
    </div>
  )
}

export default App

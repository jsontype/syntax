import styles from "./App.module.scss";
import TextBox from "./TextBox";

function App() {
  return (
    <>
      <div className={styles.Text}>
        <TextBox />
      </div>
      <div className={styles.Text}>Hello 222</div>
      <div className={styles.Text}>Hello 333</div>
    </>
  );
}

export default App;

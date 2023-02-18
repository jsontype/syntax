import Styles from "./App.module.css";
import TextBox from "./TextBox";

function App() {
  return (
    <>
      <div className={Styles.Text}>
        <TextBox />
      </div>
      <div className={Styles.Text}>Hello Vue</div>
      <div className={Styles.Text}>Hello Angular</div>
    </>
  );
}

export default App;

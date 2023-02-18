import "./App.scss";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import TextBox1 from "./TextBox1";
import TextBox2 from "./TextBox2";

export default function App() {
  // JS
  const name = "React";

  // XML
  return (
    <div className="App">
      Hello {name}!!!
      <Button1 />
      <Button2 />
      <Button3 />
      <TextBox1 text="안녕하세요!" />
      <TextBox2 text="scss입니다!" />
    </div>
  );
}

import "./App.scss";
import Button from "./Button";
import TextBox from "./TextBox";

export default function App() {
  // JS
  const name = "React";

  // XML
  return (
    <div className="App">
      Hello {name}!!!
      <Button />
      <TextBox text="안녕하세요!" />
    </div>
  );
}

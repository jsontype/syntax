import "./App.css";
import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={toggle}>Count</button>
      <div>{isOpen && <Count />}</div>
    </div>
  );
}

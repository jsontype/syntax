import "./App.scss"
import Button from "./Button"

export default function App() {
  return (
    <div className="App">
      <div className="font-xxl">Hello React!</div>
      <div className="font-md">Hello React!</div>
      <div className="color-red">Hello React!</div>
      <div className="color-indigo">Hello React!</div>
      <div className="font-xl color-purple">Hello React!</div>
      <Button />
    </div>
  )
}

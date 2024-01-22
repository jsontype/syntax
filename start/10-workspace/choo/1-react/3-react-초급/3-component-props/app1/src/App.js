import "./App.css"
import Title from "./components/Title"

export default function App() {
  // JS
  function sayHi(text) {
    alert(text)
  }

  // XML
  return (
    <>
      <Title text="투두앱" mark="?" sayHi={sayHi('hello!')} />
      <Title text="무비앱" mark="!" />
      <Title text="카운트앱" />
      <Title text="뉴스앱" />
    </>
  )
}

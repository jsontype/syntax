import { useState } from "react"
import Counter from "./Counter"

export default function App() {
  // JS
  const [open, setOpen] = useState(false)

  // XML
  return (
    <>
      <button onClick={() => setOpen(!open)}>{open ? "닫기" : "열기"}</button>
      <div>{open && <Counter />}</div>
    </>
  )
}

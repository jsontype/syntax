import "./App.css"
import { useState } from "react"
import AlertBeforeUnloadTab from "./components/AlertBeforeUnloadTab"
import NoAlertBeforeUnloadTab from "./components/NoAlertBeforeUnloadTab"
import JsBeforeUnloadTab from "./components/JsBeforeUnloadTab"
import AsyncLoopStopBeforeUnloadTab from "./components/AsyncLoopStopBeforeUnloadTab"
import AsyncLoopResumeBeforeUnloadTab from "./components/AsyncLoopResumeBeforeUnloadTab"
import AsyncLoopNoStopBeforeUnloadTab from "./components/AsyncLoopNoStopBeforeUnloadTab"

export default function App() {
  const [openId, setOpenId] = useState(0)

  return (
    <div className="App">
      <h2>Hello React!</h2>

      <button onClick={() => setOpenId(0)}>None</button>
      <button onClick={() => setOpenId(1)}>Alert</button>
      <button onClick={() => setOpenId(2)}>No Alert</button>
      <button onClick={() => setOpenId(3)}>Change States</button>
      <button onClick={() => setOpenId(4)}>Stop Async Loop</button>
      <button onClick={() => setOpenId(5)}>Resume Async Loop</button>
      <button onClick={() => setOpenId(6)}>No Stop Async Loop</button>

      { openId === 0 && <div>none</div> }
      { openId === 1 && <AlertBeforeUnloadTab /> }
      { openId === 2 && <NoAlertBeforeUnloadTab /> }
      { openId === 3 && <JsBeforeUnloadTab /> }
      { openId === 4 && <AsyncLoopStopBeforeUnloadTab /> }
      { openId === 5 && <AsyncLoopResumeBeforeUnloadTab /> }
      { openId === 6 && <AsyncLoopNoStopBeforeUnloadTab /> }
    </div>
  )
}

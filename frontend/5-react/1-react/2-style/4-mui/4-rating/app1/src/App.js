import React from "react"
import PullDowns from "./components/PullDowns"
import Buttons from "./components/Buttons"
import Ratings from "./components/Ratings"

import "./App.css"

export default function App() {
  return (
    <div className="App">
      <PullDowns />
      <Buttons />
      <Ratings />
    </div>
  )
}

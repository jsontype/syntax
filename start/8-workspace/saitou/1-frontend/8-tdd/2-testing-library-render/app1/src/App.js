import "./App.css"
import React from "react"
import Profile from "./components/Profile"

export default function App() {
  return (
    <div className="App">
      <div>Hello React!</div>
      <Profile username="jsontyper" name="John Doe" />
    </div>
  )
}

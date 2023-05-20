import React from "react"
import Profile from "./Profile"
import Counter from "./Counter"

export default function App() {
  return (
    <div className="app">
      <Profile username="Jsontyper" name="D.Yang" />

      <Counter />
    </div>
  )
}

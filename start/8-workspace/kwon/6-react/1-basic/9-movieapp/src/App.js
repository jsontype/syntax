import React, { useState } from "react"
import Counter from "./components/Counter"
import Movie from "./components/Movie"

export default function App() {
  // JS
  const [number, setNumber] = useState(0)
  const [openCounter, setOpenCounter] = useState(false)
  const [openMovie, setOpenMovie] = useState(false)

  const onClickCounter = () => {
    setOpenCounter(true)
    setOpenMovie(false)
  }

  const onClickMovie = () => {
    setOpenMovie(true)
    setOpenCounter(false)
  }

  // XML
  return (
    <div className="app">
      <button onClick={() => onClickMovie()}>무비</button>
      <button onClick={() => onClickCounter()}>카운터</button>
      {openMovie && <Movie />}
      {openCounter && <Counter number={number} setNumber={setNumber} />}
    </div>
  )
}

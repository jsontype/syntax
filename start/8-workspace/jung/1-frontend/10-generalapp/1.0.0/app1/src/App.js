import { useState } from "react"

import TopMenu from "./components/TopMenu"
import Movies from "./components/Movies"
import Counter from "./components/Counter"

export default function App() {
  // JS
  const [openMovies, setOpenMovies] = useState(false)
  const [openCounter, setOpenCounter] = useState(false)

  // XML
  return (
    <>
      <TopMenu
        openMovies={openMovies}
        setOpenMovies={setOpenMovies}
        openCounter={openCounter}
        setOpenCounter={setOpenCounter}
      />
      {openMovies && <Movies />}
      {openCounter && (
        <>
          <Counter />
        </>
      )}
    </>
  )
}

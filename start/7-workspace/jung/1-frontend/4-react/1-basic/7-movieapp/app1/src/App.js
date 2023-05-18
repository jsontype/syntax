import { useState } from "react"
import Movies from "./components/Movies"
import TopMenu from "./components/TopMenu"

export default function App() {
  // JS
  const [openMovies, setOpenMovies] = useState(false)

  // XML
  return (
    <>
      <TopMenu openMovies={openMovies} setOpenMovies={setOpenMovies} />
      {openMovies && <Movies />}
    </>
  )
}

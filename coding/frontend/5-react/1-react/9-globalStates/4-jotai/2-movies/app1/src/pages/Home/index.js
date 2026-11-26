import React from "react"
import Label from "../../components/Atoms/Label"
import { store } from "../../stores"
import { useAtom } from "jotai"

export default function Home() {
  const [count] = useAtom(store.countAtom)
  const [movies] = useAtom(store.moviesAtom)

  return (
    <div>
      <Label text="Home" />
      <div>Count: {count}</div>
      <div>Movies: {movies.length}</div>
    </div>
  )
}

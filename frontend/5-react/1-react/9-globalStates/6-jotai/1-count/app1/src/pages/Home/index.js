import React from "react"
import Label from "../../components/Atoms/Label"
import { useAtom } from "jotai"

export default function Home({ store }) {
  const [count] = useAtom(store.countAtom)

  return (
    <div>
      <Label text="Home" />
      <div>Count: {count}</div>
    </div>
  )
}

import React from "react"
import { Button } from "@mui/material"
import Label from "../../components/Atoms/Label"
// store: globalState 창고
import { store } from "../../stores"
// useAtom: useState 대신 (jotai의 atom이라는) globalState을 사용하는 스테이트 정의 훅
import { useAtom } from "jotai"

export default function Counter() {
  const [count, setCount] = useAtom(store.countAtom)

  return (
    <div>
      <Label text="Count" />

      <h1>Count: {count}</h1>
      <Button className="mx-1" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button className="mx-1" onClick={() => setCount(count - 1)}>
        -
      </Button>
    </div>
  )
}

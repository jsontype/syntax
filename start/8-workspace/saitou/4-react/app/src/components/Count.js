import React from "react"
import Button from "@mui/material/Button"
import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-[36px] font-bold">Count: {count}</h1>

      <Button
        size="small"
        variant="outlined"
        color="success"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
    </>
  )
}

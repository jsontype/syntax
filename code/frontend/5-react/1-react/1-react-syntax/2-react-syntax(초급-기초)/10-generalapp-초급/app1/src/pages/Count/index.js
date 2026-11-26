import React from "react"
import Button from "@mui/material/Button"
import Label from "../../components/Atoms/Label"
import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Label text="Counter" />

      <h1>{count}</h1>

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

import React, { useState } from "react"
import Button from "@mui/material/Button"

export default function Counter() {
  const [number, setNumber] = useState(0) // local state

  return (
    <div>
      <h1>Counter: {number}</h1>
      <Button
        sx={{ mr: "10px" }}
        variant="outlined"
        onClick={() => setNumber(number + 1)}
      >
        +
      </Button>
      <Button
        sx={{ mr: "10px" }}
        variant="outlined"
        onClick={() => setNumber(number - 1)}
      >
        -
      </Button>
    </div>
  )
}

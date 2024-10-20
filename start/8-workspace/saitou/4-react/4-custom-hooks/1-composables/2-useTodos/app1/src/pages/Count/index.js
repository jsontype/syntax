import React from "react"
import Button from "@mui/material/Button"
import Label from "../../components/Atoms/Label"
import useCounter from "../../composables/useCounter"

export default function Count() {
  const counter = useCounter()

  return (
    <>
      <Label text="Counter" />

      <h2>count: {counter.count}</h2>

      <Button
        size="small"
        variant="outlined"
        color="success"
        onClick={counter.increase}
      >
        +
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={counter.decrease}
      >
        -
      </Button>
    </>
  )
}

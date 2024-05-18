import React from "react"
import Button from "@mui/material/Button"

export default function buttons() {
  return (
    <div>
      <h2>buttons</h2>
      <div>
        <Button variant="contained">Hello world</Button>
        <Button variant="secondary">Hello world</Button>
        <Button variant="contained" color="success">
          Hello world
        </Button>
        <Button variant="contained" color="primary">
          Hello world
        </Button>
        <Button variant="contained" color="secondary">
          Hello world
        </Button>
        <Button variant="contained" color="error">
          Hello world
        </Button>
        <Button variant="contained" color="warning">
          Hello world
        </Button>
      </div>
    </div>
  )
}

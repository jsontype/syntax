import React from "react"
import Button from "@mui/material/Button"

export default function NormalButton({ buttonText, onClick }) {
  return (
    <span>
      <Button variant="contained" onClick={() => onClick}>
        {buttonText}
      </Button>
    </span>
  )
}

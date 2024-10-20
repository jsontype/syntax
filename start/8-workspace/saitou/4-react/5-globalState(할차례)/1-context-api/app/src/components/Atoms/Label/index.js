import React from "react"
import Typography from "@mui/material/Typography"

export default function Label({ text }) {
  return (
    <Typography variant="h3" gutterBottom>
      <span className="font-bold">{text}</span>
    </Typography>
  )
}

// Atomic Design
// Atoms: Label, Button, ...
// Models: Label + Button = TextAndButton, Button + Button = ButtonGroup, ...

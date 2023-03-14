import React from "react"
import TextField from "@mui/material/TextField"

const AppInput = ({ label, ...rest }) => {
  return <TextField label={label} fullWidth margin="normal" {...rest} />
}

export default AppInput

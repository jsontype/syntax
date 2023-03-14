import React from "react"
import Button from "@mui/material/Button"

const AppButton = ({ children, ...rest }) => {
  return (
    <Button variant="contained" color="primary" {...rest}>
      {children}
    </Button>
  )
}

export default AppButton

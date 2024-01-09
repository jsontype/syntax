import React from "react"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

export default function Alerts() {
  return (
    <>
      <h1>얼럿</h1>
      <h5>얼럿</h5>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
      <h5>얼럿 타이틀</h5>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
      <h5>행동</h5>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert
          onClose={() => {
            alert("closed!")
          }}
        >
          This is a success alert — check it out!
        </Alert>
        <Alert
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => {
                alert("undone!")
              }}
            >
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </>
  )
}

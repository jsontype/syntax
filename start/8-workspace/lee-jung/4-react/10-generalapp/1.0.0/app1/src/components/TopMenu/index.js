import React from "react"
import "./style.css"
import Button from "@mui/material/Button"

export default function TopMenu(props) {
  const reset = () => {
    props.setOpenMovies(false)
    props.setOpenCounter(false)
  }

  return (
    <div className="topMenu">
      <Button
        className="topMenuButton"
        sx={{ mr: "10px" }}
        variant="contained"
        onClick={() => {
          reset()
          props.setOpenMovies(true)
        }}
      >
        무비
      </Button>
      <Button
        className="topMenuButton mr-2"
        sx={{ mr: "10px" }}
        variant="contained"
        onClick={() => {
          reset()
          props.setOpenCounter(true)
        }}
      >
        카운터
      </Button>
    </div>
  )
}

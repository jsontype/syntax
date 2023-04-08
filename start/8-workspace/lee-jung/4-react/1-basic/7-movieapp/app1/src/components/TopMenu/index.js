import React from "react"
import "./style.css"
import Button from "@mui/material/Button"

export default function TopMenu({ openMovies, setOpenMovies }) {
  return (
    <div className="topMenu">
      <Button variant="contained" onClick={() => setOpenMovies(!openMovies)}>
        무비
      </Button>
    </div>
  )
}

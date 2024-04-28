import React, { useState } from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import Switch from "@mui/material/Switch"

export default function Loaders() {
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  const handleClose = () => {
    setChecked(false)
  }

  return (
    // Backdrop이 전체 화면을 감싸려면, 최상위의 태그가 div여야 한다.
    <div>
      <h1>로딩</h1>

      <h5>로딩 스위치 : {checked ? "On" : "Off"}</h5>
      <Switch checked={checked} onChange={handleChange} />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={checked}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
        로딩중... (클릭해서 닫으세요.)
      </Backdrop>
    </div>
  )
}

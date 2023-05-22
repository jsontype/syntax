import React, { useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

export default function Modals() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <h1>모달</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        모달 열기
      </Button>
      <Dialog
        // fullScreen={fullScreen} // 이게 있으면 ((윈도우가 모달보다 작을 때) 전체화면으로 바뀌는) 반응형 모달이 됨
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Google의 위치 서비스를 사용하시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Google에서 앱이 위치를 결정하도록 돕습니다. 즉, 실행 중인 앱이 없는
            경우에도 Google에 익명의 위치 데이터를 전송하는 것입니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            동의하지 않는다
          </Button>
          <Button onClick={handleClose} autoFocus>
            동의하다
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

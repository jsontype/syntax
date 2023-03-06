import React from "react"
import Stack from "@mui/material/Stack"
// 라벨 버튼
import Button from "@mui/material/Button"
// 아이콘 버튼
import IconButton from "@mui/material/IconButton"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import AlarmIcon from "@mui/icons-material/Alarm"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

export default function Buttons() {
  return (
    <>
      <h1>버튼</h1>
      <h5>라벨 버튼</h5>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          onClick={() => {
            alert("clicked")
          }}
        >
          onClick
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>

      <h5>라벨 버튼 사이즈</h5>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="error" size="small">
          small
        </Button>
        <Button variant="outlined" color="error" size="medium">
          medium
        </Button>
        <Button variant="outlined" color="error" size="large">
          large
        </Button>

        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Stack>

      <h5>아이콘 버튼</h5>
      <Stack direction="row" spacing={2}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>

      <h5>아이콘 버튼 사이즈</h5>
      <Stack spacing={2} direction="row">
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>

      <h5>아이콘 + 라벨 버튼</h5>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </>
  )
}

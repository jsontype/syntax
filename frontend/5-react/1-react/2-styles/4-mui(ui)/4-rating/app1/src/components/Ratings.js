import React, { useState } from "react"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"

export default function Ratings() {
  const [value, setValue] = useState(2)

  return (
    <>
      <h1>등급</h1>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <h5>등급</h5>

        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(e, newValue) => {
            e.preventDefault()
            setValue(newValue)
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />

        <h5>등급 정밀도</h5>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="half-rating"
          value={value}
          onChange={(e, newValue) => {
            e.preventDefault()
            setValue(newValue)
          }}
          defaultValue={2.5}
          precision={0.5}
        />
        <Typography component="legend">Read only</Typography>
        <Rating
          name="half-rating-read"
          value={value}
          precision={0.5}
          readOnly
        />
        <Typography component="legend">Disabled</Typography>
        <Rating
          name="half-rating-read"
          value={value}
          precision={0.5}
          disabled
        />
      </Box>
    </>
  )
}

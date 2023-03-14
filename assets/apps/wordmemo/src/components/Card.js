import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const WordCard = ({ word }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {word.title}
        </Typography>
        <Typography variant="body1">{word.definition}</Typography>
      </CardContent>
    </Card>
  )
}

export default WordCard

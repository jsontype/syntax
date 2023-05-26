import React from "react"
import TextField from "@mui/material/TextField"
// 셀렉트 풀다운
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
// 오토컴플리트 풀다운
import Autocomplete from "@mui/material/Autocomplete"

export default function PullDowns() {
  const [age, setAge] = React.useState("")

  const handleChange = (e) => {
    setAge(e.target.value)
  }

  return (
    <>
      <h1>풀다운</h1>
      <h5>셀렉트 풀다운 : 나이 {age ? age + "세" : "미상"}</h5>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <h5>오토컴플리트 풀다운</h5>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top10Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  )
}

// 참조URL: http://www.imdb.com/chart/top (IMDb users들의 영화 순위)
const top10Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
]

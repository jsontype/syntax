import React from "react"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import CircularProgress from "@mui/material/CircularProgress"
import Tooltip from "@mui/material/Tooltip"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Label from "../../components/Atoms/Label"
import useMoviesConnector from "../../connectors/useMoviesConnector"

export default function Movies() {
  const moviesConnector = useMoviesConnector()

  const error = <div class="text-red-500">* Error is occured.</div>

  const loading = (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  )

  const render = moviesConnector.movies.map((movie) => {
    return (
      <div key={movie.id}>
        <a
          className="block text-gray-500 text-[24px] font-bold no-underline p-[5px] m-[10px] border-[1px] border-white rounded-[5px] hover:bg-red-300 hover:text-white"
          href={movie.url}
        >
          {movie.title} ({movie.year})
        </a>

        <img
          className="block w-[300px]"
          src={movie.large_cover_image}
          alt={movie.title}
        ></img>

        <div className="my-[10px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              詳細を見る
            </AccordionSummary>
            <AccordionDetails>
              <div>
                評価：
                <Tooltip title={movie.rating + "/10点"} placement="right">
                  <Box
                    display="inline"
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      size="small"
                      name="simple-controlled"
                      readOnly
                      value={movie.rating / 2}
                    />
                  </Box>
                </Tooltip>
              </div>
              {/* <div>ジャンル：{movie.genres.join(", ")}</div> */}
              <div>ランタイム：{movie.runtime}分</div>
              <div>ストーリー：{movie.synopsis || "情報無し"}</div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Label text="Movies" />

      <div>
        {moviesConnector.error
          ? error
          : moviesConnector.isLoading
          ? loading
          : render}
      </div>
    </div>
  )
}

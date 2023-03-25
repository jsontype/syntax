import React, { useState } from "react"
import Button from "../../atoms/Button"
import MovieList from "../../organisms/MovieList"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`

export default function MovieLists() {
  const [sortBy, setSortBy] = useState("")

  return (
    <>
      <Title>무비 리스트 : {sortBy || "추천"}별</Title>
      <Button color="gray" small onClick={() => setSortBy("")}>
        추천
      </Button>
      <Button color="gray" small onClick={() => setSortBy("rating")}>
        평점
      </Button>
      <Button color="gray" small onClick={() => setSortBy("year")}>
        연도
      </Button>
      <MovieList sortByLabel={sortBy || "추천"} sortByValue={sortBy || ""} />
    </>
  )
}

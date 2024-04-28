import React from "react"
import MovieLists from "../../components/templates/MovieLists"
import styled from "styled-components"

const MovieContainer = styled.div`
  margin: 20px;
`

export default function Movies() {
  return (
    <MovieContainer>
      <MovieLists />
    </MovieContainer>
  )
}

import React, { useState, useEffect } from "react"
import SearchBar from "../../moluculues/SearchBar"
import styled from "styled-components"
import axios from "axios"

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
`

const MovieListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`

const MovieCardContainer = styled.li`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const MovieTitle = styled.h2`
  font-size: 1.2rem;
  margin: 8px;
`

const MovieYear = styled.p`
  font-size: 0.8rem;
  margin: 8px;
`

const MovieGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
`

const MovieGenre = styled.li`
  background-color: #e0e0e0;
  color: #333;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`

export default function MovieList({ sortByLabel, sortByValue }) {
  const [movies, setMovies] = useState([])
  const [inputText, setInputText] = useState("")
  const [filterText, setFilterText] = useState("")

  const onChange = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }

  const onClick = () => {
    setFilterText(inputText)
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?sort_by=${sortByValue}`
      )
      console.log(response)
      setMovies(response.data.data.movies)
    }
    fetchMovie()
  }, [sortByValue])

  console.log(movies)

  const searchedMovie =
    filterText !== ""
      ? movies.filter((item) => item.title.includes(filterText))
      : movies

  const render = searchedMovie.map((item) => (
    <MovieCardContainer key={item.id}>
      <MovieImage src={item.medium_cover_image} alt={item.title} />
      <MovieTitle>{item.title}</MovieTitle>
      <MovieYear>{item.year}</MovieYear>
      <MovieGenres>
        {item.genres.map((genre) => (
          <MovieGenre key={genre}>{genre}</MovieGenre>
        ))}
      </MovieGenres>
    </MovieCardContainer>
  ))

  if (!movies) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <SearchBar
        value={inputText}
        onChange={onChange}
        onClick={onClick}
        placeholder={"검색어를 입력해주세요."}
      />
      <MovieListContainer>{render}</MovieListContainer>
    </Container>
  )
}

import React from "react"
import { storiesOf } from "@storybook/react"
import MovieList from "./"

storiesOf("organisms/MovieList", module)
  .add("default", () => <MovieList />)
  .add("sort by rating", () => (
    <MovieList sortByLabel="Rating" sortByValue="rating" />
  ))
  .add("sort by date added", () => (
    <MovieList sortByLabel="Date Added" sortByValue="date_added" />
  ))

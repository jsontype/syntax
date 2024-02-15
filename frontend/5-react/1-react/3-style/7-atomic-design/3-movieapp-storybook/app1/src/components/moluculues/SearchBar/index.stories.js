import React from "react"
import { storiesOf } from "@storybook/react"
import SearchBar from "./"

storiesOf("moluculues/SearchBar", module)
  .add("default", () => (
    <SearchBar
      placeholder="영화 제목을 입력하세요"
      onClick={() => alert("search")}
    />
  ))
  .add("with value", () => (
    <SearchBar
      value="Iron man"
      onChange={(e) => console.log(e.target.value)}
      onClick={() => alert("search")}
    />
  ))
  .add("small", () => (
    <SearchBar
      small
      placeholder="영화 제목을 입력하세요"
      onClick={() => alert("search")}
    />
  ))

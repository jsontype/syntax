import "./App.css"
import Button from "./components/atoms/Button"
import SearchBar from "./components/moluculues/SearchBar"
import MovieList from "./components/organisms/MovieList"
import MovieLists from "./components/templates/MovieLists"
import Movies from "./pages/Movies"

export default function App() {
  return (
    <div className="App">
      <h1>아톰즈</h1>
      <Button>버튼</Button>
      <h1>몰큘러스</h1>
      <SearchBar />
      <h1>오가니즘스</h1>
      <MovieList />
      <h1>템플릿츠</h1>
      <MovieLists />
      <h1>페이지스</h1>
      <Movies />
    </div>
  )
}

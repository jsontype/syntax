import React from "react"
import axios from "axios"
import Movie from "./Movie"

// 앱
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  // axios : fetch 위에 있는 작은 layer, 설치 후 사용가능. npm i axios 후 사용.
  // jsonview : 크롬 확장프로그램 설치.
  // async, await의 의미 : axios가 끝날 때까지 기다렸다가 계속한다. axios가 시간이 좀 걸리기 때문.
  getMovies = async () => {
    const {
      data: {
        data : { movies }
      }
    }  = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating") // JSON 취득 : https://yts.lt/api#ist_movies 에서 파라미터 조작 확인
    console.log(movies) // {data: {data : { movies }}} = movies.data.data.movies
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state // { } 안에 movies를 넣지 않으면 아래를 this.state.movies라고 해야한다.
    return <div>
      {
        isLoading ? "Loading..." : 
          movies.map(movie => (
            <Movie
              key={movie.id} // key를 넣지 않으면 다음의 메시지가 뜬다. => Warning: Each child in a list should have a unique "key" prop.
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))
      }
    </div>
  }
}

// 아래 코딩을 해두면 App.js를 임포트했을 때, <App /> 로 꺼낼 수 있음 : index.js에서 꺼내고 있음
export default App

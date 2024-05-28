import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Count from "./pages/Count"
import News from "./pages/News"
import Todos from "./pages/Todos"
// Jotai: Provider, store 임포트
import { Provider } from "jotai"
import { store } from "./stores"

export default function App() {
  return (
    <div className="m-[20px]">
      <span>
        <Link to="/">Home</Link>/
      </span>
      <span>
        <Link to="/movie">Movies</Link>/
      </span>
      <span>
        <Link to="/count">Count</Link>/
      </span>
      <span>
        <Link to="/news">News</Link>/
      </span>
      <span>
        <Link to="/todos">Todos</Link>
      </span>
      <hr />

      {/* Jotai: Provider로 감싼 뒤, 프롭으로 store를 건넨다. */}
      <Routes>
        <Route
          path="/"
          element={
            <Provider>
              <Home store={store} />
            </Provider>
          }
        />
        <Route
          path="/movie"
          element={
            <Provider>
              <Movies store={store} />
            </Provider>
          }
        />
        <Route
          path="/count"
          element={
            <Provider>
              <Count store={store} />
            </Provider>
          }
        />
        <Route
          path="/news"
          element={
            <Provider>
              <News store={store} />
            </Provider>
          }
        />
        <Route
          path="/todos"
          element={
            <Provider>
              <Todos store={store} />
            </Provider>
          }
        />
      </Routes>
    </div>
  )
}

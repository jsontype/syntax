import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AddWord from "./pages/AddWord"
import EditWord from "./pages/EditWord"
import Learn from "./pages/Learn"

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <div style={{ flex: 1 }}>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/add-word">add-word</Link>
            </li>
            <li>
              <Link to="/edit-word:1">edit-word</Link>
            </li>
            <li>
              <Link to="/learn">learn</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/add-word" element={<AddWord />} />
          <Route path="/edit-word" element={<EditWord />}>
            <Route path=":id" element={<EditWord />} />
          </Route>
          <Route path="/learn" element={<Learn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

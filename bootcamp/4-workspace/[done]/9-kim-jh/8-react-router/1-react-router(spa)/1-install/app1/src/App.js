import './App.css'
import Home from './Home'
import About from './About'
import { Routes, Route, Link } from 'react-router-dom'

export default function App() {
    return (
        <div className="App">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>

            <hr />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </div>
    )
}

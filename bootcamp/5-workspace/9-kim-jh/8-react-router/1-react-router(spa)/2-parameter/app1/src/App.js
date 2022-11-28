import './App.css'
import Home from './Home'
import About from './About'
import { Routes, Route, Link } from 'react-router-dom'
import Profiles from './Profiles'
import Profile from './Profile'

export default function App() {
    return (
        <div className="App">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profiles">Profiles</Link></li>
            </ul>

            <hr />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles" element={<Profiles />} />

                <Route path="/profile" element={<Profile />}>
                    <Route path=":username" element={<Profile />} />
                </Route>
            </Routes>
        </div>
    )
}

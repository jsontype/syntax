import React from 'react'
import Navbar from './components/Navbar'
import Users from './pages/Users'
import Home from './pages/Home'
import Movies from './pages/Movies'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/movies" exact>
              <Movies />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

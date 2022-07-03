import Users from './pages/Users'
import Home from './pages/Home'
import Movies from './pages/Movies'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/users',
        component: Users
    }
]

export default routes
import Users from './pages/Users'
import Home from './pages/Home'
import Movies from './pages/Movies'
import User from './pages/User'

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
    },
    {
        path: '/users/:id',
        component: User
    }
]

export default routes
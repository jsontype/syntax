import axios from './index'

export default {
  login (userData) {
    return axios.post('/api/login', userData)
  },
  register (userData) {
    return axios.post('/api/register', userData)
  }
}

import axios from 'axios'
import constant from '../config/constant'

const token = document.head.querySelector('meta[name="csrf-token"]') || ''

export default axios.create({
  baseURL: constant.webBaseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': token
  }
})

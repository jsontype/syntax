import axios from "axios"

// JSONPlaceholder API를 위한 인스턴스 생성
export const jsonPlaceholderApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
})

// OpenWeather API를 위한 인스턴스 생성
export const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-Type": "application/json",
  },
})

// API 키 (환경 변수로 관리)
const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
console.log(OPENWEATHER_API_KEY)

// JSONPlaceholder API 서비스
export const jsonPlaceholderService = {
  getPosts: async () => {
    try {
      const response = await jsonPlaceholderApi.get("/posts")
      return response.data
    } catch (error) {
      console.error("Error fetching posts:", error)
      throw error
    }
  },

  getPostById: async (id: number) => {
    try {
      const response = await jsonPlaceholderApi.get(`/posts/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error)
      throw error
    }
  },

  getUsers: async () => {
    try {
      const response = await jsonPlaceholderApi.get("/users")
      return response.data
    } catch (error) {
      console.error("Error fetching users:", error)
      throw error
    }
  },
}

// OpenWeather API 서비스
export const weatherService = {
  getCurrentWeather: async (city: string) => {
    try {
      const response = await openWeatherApi.get(
        `/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
      )
      return response.data
    } catch (error) {
      console.error(`Error fetching weather for ${city}:`, error)
      throw error
    }
  },
}

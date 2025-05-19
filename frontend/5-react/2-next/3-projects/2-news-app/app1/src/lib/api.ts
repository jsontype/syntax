import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

export interface Album {
  id: number
  userId: number
  title: string
}

export interface Photo {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface NewsItem {
  id: number
  title: string
  points: number
  user: string
  time: number
  time_ago: string
  comments_count: number
  type: string
  url: string
  domain: string
}

export const api = {
  // 사용자 관련 API
  getUsers: async (): Promise<User[]> => {
    const response = await axios.get(`${BASE_URL}/users`)
    return response.data
  },

  getUser: async (id: number): Promise<User> => {
    const response = await axios.get(`${BASE_URL}/users/${id}`)
    return response.data
  },

  // 게시물 관련 API
  getPosts: async (): Promise<Post[]> => {
    const response = await axios.get(`${BASE_URL}/posts`)
    return response.data
  },

  getUserPosts: async (userId: number): Promise<Post[]> => {
    const response = await axios.get(`${BASE_URL}/users/${userId}/posts`)
    return response.data
  },

  // 할일 관련 API
  getTodos: async (): Promise<Todo[]> => {
    const response = await axios.get(`${BASE_URL}/todos`)
    return response.data
  },

  getUserTodos: async (userId: number): Promise<Todo[]> => {
    const response = await axios.get(`${BASE_URL}/users/${userId}/todos`)
    return response.data
  },

  // 앨범 관련 API
  getAlbums: async (): Promise<Album[]> => {
    const response = await axios.get(`${BASE_URL}/albums`)
    return response.data
  },

  getUserAlbums: async (userId: number): Promise<Album[]> => {
    const response = await axios.get(`${BASE_URL}/users/${userId}/albums`)
    return response.data
  },

  async getAlbumPhotos(albumId: number): Promise<Photo[]> {
    const response = await fetch(`${BASE_URL}/photos?albumId=${albumId}`)
    if (!response.ok) {
      throw new Error("Failed to fetch album photos")
    }
    return response.json()
  },
}

export async function getNews(): Promise<NewsItem[]> {
  const res = await fetch("https://api.hnpwa.com/v0/news.json")
  return res.json()
}

export async function getNewsItem(id: string): Promise<NewsItem> {
  const res = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
  return res.json()
}

export async function getAsk(): Promise<NewsItem[]> {
  const res = await fetch("https://api.hnpwa.com/v0/ask.json")
  return res.json()
}

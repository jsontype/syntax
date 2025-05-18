'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

interface User {
  id: number
  name: string
  username: string
}

async function getData() {
  const [posts, users] = await Promise.all([
    api.getPosts(),
    api.getUsers()
  ]);

  return {
    posts,
    users: users.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {} as Record<number, User>)
  };
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<Record<number, User>>({})
  const [loading, setLoading] = useState(true)
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const { posts, users } = await getData()
        setPosts(posts)
        setUsers(users)

        // 로그인 상태 확인
        const res = await fetch('/api/auth/check')
        const data = await res.json()
        setCurrentUserId(data.user?.id || null)
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // 게시물 필터링
  const filteredPosts = currentUserId
    ? posts.filter(post => post.userId === currentUserId)
    : []

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="ml-3">
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="flex items-center space-x-4">
                    <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    <div className="h-6 w-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!currentUserId) {
    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">로그인이 필요합니다</h2>
          <p className="text-gray-600">게시물을 보려면 로그인해주세요.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">내 게시물</h2>
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-black font-semibold">
                    {users[post.userId]?.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-black">{users[post.userId]?.name}</p>
                  <p className="text-sm text-black">@{users[post.userId]?.username}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-black mb-4">{post.body}</p>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4"></div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-pink-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-pink-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

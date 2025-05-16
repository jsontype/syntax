"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api, type Album } from "@/lib/api"

export default function Albums() {
  const router = useRouter()
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 로그인 상태 확인
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => {
        if (!data.user) {
          router.push('/')
        } else {
          // 앨범 목록 가져오기
          api.getAlbums().then(setAlbums)
        }
      })
      .finally(() => setLoading(false))
  }, [router])

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-24 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">앨범</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map(album => (
            <div key={album.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-black mb-2">{album.title}</h2>
                <p className="text-gray-600 text-sm">앨범 ID: {album.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
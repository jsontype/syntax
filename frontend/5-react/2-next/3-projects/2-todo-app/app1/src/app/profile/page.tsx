'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { api, type User } from '@/lib/api'

export default function Profile() {
  const router = useRouter()
  const [profile, setProfile] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 로그인 상태 확인
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => {
        if (!data.user) {
          router.push('/')
        } else {
          // 프로필 정보 가져오기
          api.getUser(data.user.id).then(setProfile)
        }
      })
      .finally(() => setLoading(false))
  }, [router])

  if (loading || !profile) {
    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-24 mb-6"></div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">프로필</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">
                {profile.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">{profile.name}</h1>
              <p className="text-gray-600">@{profile.username}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">이메일</h3>
              <p className="text-gray-600">{profile.email}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">전화번호</h3>
              <p className="text-gray-600">{profile.phone}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">웹사이트</h3>
              <p className="text-gray-600">{profile.website}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">회사</h3>
              <p className="text-gray-600">{profile.company.name}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-black mb-2">주소</h3>
            <p className="text-gray-600">
              {profile.address.street}, {profile.address.suite}
            </p>
            <p className="text-gray-600">
              {profile.address.city}, {profile.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
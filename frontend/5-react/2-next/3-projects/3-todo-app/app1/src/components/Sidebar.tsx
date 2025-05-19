'use client'

import { HomeIcon, UserIcon, PhotoIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AuthUser } from '@/lib/auth'

interface SidebarProps {
  user: AuthUser | null
  onLogout: () => void
  onLoginClick: () => void
}

export default function Sidebar({ user, onLogout, onLoginClick }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 fixed h-full">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-pink-600 mb-8">Todo App</h1>
        <nav className="space-y-2">
          <Link
            href="/"
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-black ${pathname === '/' ? 'bg-gray-100' : ''
              }`}
          >
            <HomeIcon className="w-6 h-6" />
            <span>홈</span>
          </Link>
          <Link
            href="/profile"
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-black ${pathname === '/profile' ? 'bg-gray-100' : ''
              }`}
          >
            <UserIcon className="w-6 h-6" />
            <span>프로필</span>
          </Link>
          <Link
            href="/albums"
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-black ${pathname === '/albums' ? 'bg-gray-100' : ''
              }`}
          >
            <PhotoIcon className="w-6 h-6" />
            <span>앨범</span>
          </Link>
          <Link
            href="/todos"
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-black ${pathname === '/todos' ? 'bg-gray-100' : ''
              }`}
          >
            <ClipboardDocumentListIcon className="w-6 h-6" />
            <span>할일</span>
          </Link>
        </nav>

        <div className="mt-8 p-4 border-t border-gray-200">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm text-black font-semibold">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-black">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="mt-4 w-full text-sm text-gray-600 hover:text-gray-800"
              >
                로그아웃
              </button>
            </>
          ) : (
            <button
              onClick={onLoginClick}
              className="block w-full text-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 
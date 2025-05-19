'use client'

import { HomeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 fixed h-full">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-pink-600 mb-8">News App</h1>
        <nav className="space-y-2">
          <Link
            href="/"
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-black ${pathname === '/' ? 'bg-gray-100' : ''}`}
          >
            <HomeIcon className="w-6 h-6" />
            <span>News</span>
          </Link>
          <Link
            href="/ask"
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-black ${pathname === '/ask' ? 'bg-gray-100' : ''}`}
          >
            <QuestionMarkCircleIcon className="w-6 h-6" />
            <span>Ask</span>
          </Link>
        </nav>
      </div>
    </div>
  )
} 
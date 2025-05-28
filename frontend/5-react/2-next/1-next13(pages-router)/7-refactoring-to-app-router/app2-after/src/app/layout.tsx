import '@/styles/globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js App Router 예제',
  description: 'Pages Router에서 App Router로 리팩토링된 예제 앱입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <nav className="w-full py-4 px-2 border-b flex gap-4">
          <Link href="/">홈</Link>
          <Link href="/movies">무비앱(SSR)</Link>
        </nav>
        {children}
      </body>
    </html>
  )
} 
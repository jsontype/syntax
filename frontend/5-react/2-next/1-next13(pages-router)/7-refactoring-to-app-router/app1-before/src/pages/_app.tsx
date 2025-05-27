import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="w-full py-4 px-2 border-b flex gap-4">
        <Link href="/">홈</Link>
        <Link href="/movies">무비앱(SSR)</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

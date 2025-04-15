import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>무비 리스트 보기 (Next 15)</h1>
      <ul>
        <li><Link href="/csr">CSR</Link></li>
        <li><Link href="/ssr">SSR</Link></li>
        <li><Link href="/ssg">SSG</Link></li>
      </ul>
    </div>
  )
}

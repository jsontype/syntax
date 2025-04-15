import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>무비 리스트 보기</h1>
      <ul>
        <li><Link href="/csr">CSR 페이지</Link></li>
        <li><Link href="/ssr">SSR 페이지</Link></li>
        <li><Link href="/ssg">SSG 페이지</Link></li>
      </ul>
    </div>
  )
}

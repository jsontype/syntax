import Link from "next/link"

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/csr">CSR 페이지</Link>
        </li>
        <li>
          <Link href="/ssr">SSR 페이지</Link>
        </li>
        <li>
          <Link href="/ssg">SSG 페이지</Link>
        </li>
      </ul>
    </div>
  )
}
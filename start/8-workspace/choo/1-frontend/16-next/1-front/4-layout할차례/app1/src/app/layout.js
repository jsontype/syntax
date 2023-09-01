import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

// SEO 대응
export const metadata = {
  title: "넥스트JS 앱",
  description: "넥스트JS 학습용 앱",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link className="navItem" href="/">
            홈
          </Link>{" "}
          /
          <Link className="navItem" href="/list">
            상품목록
          </Link>
        </header>

        <div>{children}</div>

        <footer>
          Copyright © 모든 권리 보유. 이 웹사이트의 콘텐츠는 저작권법에 의해
          보호됩니다. 무단 전재, 복사, 배포 금지.
        </footer>
      </body>
    </html>
  )
}

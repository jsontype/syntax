import './globals.css'
import Link from 'next/link'

// SEO 대응 부분
export const metadata = {
  title: '넥스트JS 앱',
  description: '넥스트JS 학습용 앱',
}

// 헤더, 푸터 연결 부분
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>넥스트JS</title>
      </head>
      <body>
        <header>
          <Link className="navItem" href="/">
            홈
          </Link>
          <Link className="navItem" href="/list">
            상품목록
          </Link>
        </header>
        <content>{children}</content>
        <footer>
          <div>
            Copyright © 모든 권리 보유. 이 웹사이트의 콘텐츠는 저작권법에 의해
            보호됩니다. 무단 전재, 복사, 배포 금지.
          </div>
        </footer>
      </body>
    </html>
  )
}

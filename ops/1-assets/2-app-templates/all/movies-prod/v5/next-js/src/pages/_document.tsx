import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const style = {
    '--header-height': '74px'
  }
  return (
    <Html lang="en" data-bs-theme="dark" style={{ '--header-height': '74px'} as React.CSSProperties}>
      <Head />
      <meta />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Streamit - Responsive Bootstrap 5 Admin Dashboard Template</title>
      <link rel="stylesheet" href="/vendor/font-awesome/css/all.min.css" />
      <link rel="stylesheet" href="/vendor/iconly/css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&amp;display=swap"
        rel="stylesheet" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

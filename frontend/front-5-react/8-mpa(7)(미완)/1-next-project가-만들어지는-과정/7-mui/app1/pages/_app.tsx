import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// 1. MUI 임포트
import { ThemeProvider } from '@mui/material'
// 2. 작성한 MUI 테마 임포트
import { theme } from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 3. ThemeProvider로 Component 감싸기
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

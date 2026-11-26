// 환율 데이터 타입
export interface ExchangeRates {
  base: string
  date: string
  rates: {
    [currency: string]: number
  }
  success: boolean
}

export interface CurrencyConversion {
  from: string
  to: string
  amount: number
  result: number
  date: string
}

export interface HistoricalRate {
  date: string
  rate: number
}

// 뉴스 데이터 타입
export interface NewsArticle {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export interface NewsResponse {
  status: string
  totalResults: number
  articles: NewsArticle[]
}

// 통화 타입
export interface Currency {
  code: string
  name: string
  symbol?: string
}

// 주요 통화 목록
export const popularCurrencies: Currency[] = [
  { code: "USD", name: "미국 달러", symbol: "$" },
  { code: "EUR", name: "유로", symbol: "€" },
  { code: "JPY", name: "일본 엔", symbol: "¥" },
  { code: "GBP", name: "영국 파운드", symbol: "£" },
  { code: "KRW", name: "한국 원", symbol: "₩" },
  { code: "CNY", name: "중국 위안", symbol: "¥" },
  { code: "HKD", name: "홍콩 달러", symbol: "HK$" },
  { code: "AUD", name: "호주 달러", symbol: "A$" },
  { code: "CAD", name: "캐나다 달러", symbol: "C$" },
  { code: "CHF", name: "스위스 프랑", symbol: "Fr" },
]

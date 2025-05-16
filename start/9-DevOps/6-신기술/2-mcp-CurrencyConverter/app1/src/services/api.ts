import axios from "axios"
import {
  ExchangeRates,
  CurrencyConversion,
  HistoricalRate,
  NewsResponse,
} from "../types"

// Exchange Rates API를 위한 인스턴스 생성
export const exchangeRatesApi = axios.create({
  baseURL: "https://api.exchangerate.host",
  headers: {
    "Content-Type": "application/json",
  },
})

// News API를 위한 인스턴스 생성
export const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "Content-Type": "application/json",
  },
})

// News API 키 (실제 사용 시 환경 변수로 관리하는 것이 좋습니다)
const NEWS_API_KEY = "bcdfffab67c144c58f52323524d33cea" // NewsAPI 키 설정

// Exchange Rates API 서비스
export const exchangeRatesService = {
  // 최신 환율 정보 조회
  getLatestRates: async (base: string = "USD"): Promise<ExchangeRates> => {
    try {
      const response = await exchangeRatesApi.get(`/latest?base=${base}`)
      return response.data
    } catch (error) {
      console.error("Error fetching latest rates:", error)
      throw error
    }
  },

  // 통화 변환
  convertCurrency: async (
    from: string,
    to: string,
    amount: number
  ): Promise<CurrencyConversion> => {
    try {
      const response = await exchangeRatesApi.get(
        `/convert?from=${from}&to=${to}&amount=${amount}`
      )
      return response.data
    } catch (error) {
      console.error("Error converting currency:", error)
      throw error
    }
  },

  // 특정 통화 쌍의 기간별 환율 히스토리 조회 (최근 7일)
  getHistoricalRates: async (
    base: string,
    target: string
  ): Promise<HistoricalRate[]> => {
    try {
      // 7일 전 날짜 계산
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(endDate.getDate() - 7)

      // 날짜 포맷 변환 (YYYY-MM-DD)
      const formatDate = (date: Date) => {
        return date.toISOString().split("T")[0]
      }

      const response = await exchangeRatesApi.get(
        `/timeseries?start_date=${formatDate(startDate)}&end_date=${formatDate(
          endDate
        )}&base=${base}&symbols=${target}`
      )

      // 결과 데이터 변환
      const rates: HistoricalRate[] = []
      const data = response.data

      for (const date in data.rates) {
        if (data.rates[date][target]) {
          rates.push({
            date,
            rate: data.rates[date][target],
          })
        }
      }

      return rates.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    } catch (error) {
      console.error("Error fetching historical rates:", error)
      throw error
    }
  },
}

// News API 서비스
export const newsService = {
  // 경제/금융 관련 최신 뉴스 조회
  getFinancialNews: async (
    query: string = "finance OR economy OR currency",
    language: string = "en"
  ): Promise<NewsResponse> => {
    try {
      const response = await newsApi.get(
        `/everything?q=${query}&language=${language}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
      )
      return response.data
    } catch (error) {
      console.error("Error fetching financial news:", error)
      throw error
    }
  },

  // 특정 키워드 관련 뉴스 조회
  getNewsByKeyword: async (
    keyword: string,
    language: string = "en"
  ): Promise<NewsResponse> => {
    try {
      const response = await newsApi.get(
        `/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
      )
      return response.data
    } catch (error) {
      console.error(`Error fetching news for ${keyword}:`, error)
      throw error
    }
  },

  // 특정 통화 관련 뉴스 조회
  getCurrencyNews: async (currencyCode: string): Promise<NewsResponse> => {
    try {
      // 통화 코드와 관련 키워드 조합
      const query = `${currencyCode} currency OR ${currencyCode} exchange rate OR ${currencyCode} forex`
      const response = await newsApi.get(
        `/everything?q=${query}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
      )
      return response.data
    } catch (error) {
      console.error(`Error fetching news for currency ${currencyCode}:`, error)
      throw error
    }
  },
}

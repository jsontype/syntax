// =========================================================
//  데이터 페치 계층 (전부 키 없이 브라우저에서 직접 호출 가능 · CORS 검증 완료)
//   - 현재가/24h: CoinGecko simple/price (폴백: Binance 24hr ticker)
//   - 일봉 히스토리: Binance klines limit=1000 (폴백: CoinGecko market_chart 365d)
//   - 심리: Alternative.me Fear & Greed
//  3단 폴백: PRIMARY → 대체 소스 → localStorage 캐시
//  재시도: 5xx/타임아웃 2회(지수+지터), 429/418은 재시도 금지·즉시 폴백
// =========================================================

const URLS = {
  cgPrice:
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true',
  bnTicker: 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT',
  bnKlines: 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=1000',
  cgChart: 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily',
  fng: 'https://api.alternative.me/fng/?limit=90',
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function fetchJSON(url, timeout = 9000) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeout)
  try {
    const res = await fetch(url, { signal: ctrl.signal })
    if (!res.ok) {
      const e = new Error('HTTP ' + res.status)
      e.status = res.status
      throw e
    }
    return await res.json()
  } finally {
    clearTimeout(t)
  }
}

async function withRetry(fn, retries = 2) {
  let last
  for (let a = 0; a <= retries; a++) {
    try {
      return await fn()
    } catch (e) {
      last = e
      if (e.status === 429 || e.status === 418) throw e // 레이트리밋 → 재시도 금지
      if (a < retries) await sleep(500 * (a + 1) + Math.random() * 300)
    }
  }
  throw last
}

const saveCache = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify({ data, fetchedAt: Date.now() }))
  } catch {
    /* QuotaExceededError 등은 무시 */
  }
}
export const loadCache = (key) => {
  try {
    const r = localStorage.getItem(key)
    return r ? JSON.parse(r) : null
  } catch {
    return null
  }
}

export async function loadPrice() {
  try {
    const j = await withRetry(() => fetchJSON(URLS.cgPrice, 8000))
    const b = j.bitcoin
    const data = { price: b.usd, change24hPct: b.usd_24h_change, marketCap: b.usd_market_cap, vol24h: b.usd_24h_vol, source: 'coingecko' }
    saveCache('btc:price', data)
    return { ...data, status: 'live', fetchedAt: Date.now() }
  } catch {
    try {
      const t = await fetchJSON(URLS.bnTicker, 8000)
      const data = { price: +t.lastPrice, change24hPct: +t.priceChangePercent, marketCap: null, vol24h: +t.quoteVolume, source: 'binance' }
      saveCache('btc:price', data)
      return { ...data, status: 'fallback', fetchedAt: Date.now() }
    } catch {
      const c = loadCache('btc:price')
      if (c) return { ...c.data, status: 'cached', fetchedAt: c.fetchedAt }
      return { status: 'error', fetchedAt: null }
    }
  }
}

export async function loadKlines() {
  try {
    const rows = await withRetry(() => fetchJSON(URLS.bnKlines, 11000))
    const candles = rows
      .map((r) => ({ t: r[0], open: +r[1], high: +r[2], low: +r[3], close: +r[4], volume: +r[5] }))
      .filter((c) => Number.isFinite(c.close))
    const data = { closes: candles.map((c) => c.close), volumes: candles.map((c) => c.volume), times: candles.map((c) => c.t), source: 'binance' }
    saveCache('btc:klines', data)
    return { ...data, status: 'live', fetchedAt: Date.now() }
  } catch {
    try {
      const j = await fetchJSON(URLS.cgChart, 11000)
      const prices = (j.prices || []).slice(0, -1) // 마지막 진행중(partial-day) point 제거
      const data = {
        closes: prices.map((p) => p[1]).filter(Number.isFinite),
        volumes: (j.total_volumes || []).slice(0, -1).map((v) => v[1]),
        times: prices.map((p) => p[0]),
        source: 'coingecko',
      }
      saveCache('btc:klines', data)
      return { ...data, status: 'fallback', fetchedAt: Date.now() }
    } catch {
      const c = loadCache('btc:klines')
      if (c) return { ...c.data, status: 'cached', fetchedAt: c.fetchedAt }
      return { status: 'error', fetchedAt: null }
    }
  }
}

export async function loadFng() {
  try {
    const j = await withRetry(() => fetchJSON(URLS.fng, 8000))
    const list = (j.data || [])
      .map((d) => ({ value: parseInt(d.value, 10), label: d.value_classification, t: Number(d.timestamp) * 1000 }))
      .filter((d) => Number.isFinite(d.value))
    const arr = list.map((d) => d.value).reverse() // 과거→최신
    const data = { arr, latest: list[0] || null, source: 'alternative.me' }
    saveCache('btc:fng', data)
    return { ...data, status: 'live', fetchedAt: Date.now() }
  } catch {
    const c = loadCache('btc:fng')
    if (c) return { ...c.data, status: 'cached', fetchedAt: c.fetchedAt }
    return { status: 'error', fetchedAt: null }
  }
}

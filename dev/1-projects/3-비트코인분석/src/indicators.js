// =========================================================
//  비트코인 매수 타이밍 지표 엔진
//  공식은 멀티에이전트 워크플로로 검증됨:
//   - RSI: Wilder 평활(첫 평균=SMA, 이후 누적 평활)
//   - MACD: 표준 EMA(SMA seed), signal은 macdLine의 EMA9(null 제외)
//   - Mayer Multiple = price / SMA200 (200일 미만이면 가용 전체로 폴백)
//   - Drawdown: 롤링 365일 고점 대비 낙폭
//   - Golden/Death Cross: SMA50 vs SMA200
//   - F&G 합성: 현재50 / 7일30 / 30일20 가중 + 극단 부스트
//  모든 시계열 함수의 입력 배열은 "과거→최신" 순서를 가정한다.
// =========================================================

export function rsiWilder(closes, period = 14) {
  const n = closes.length
  const rsi = new Array(n).fill(null)
  if (n < period + 1) return rsi
  let gainSum = 0,
    lossSum = 0
  for (let i = 1; i <= period; i++) {
    const d = closes[i] - closes[i - 1]
    if (d > 0) gainSum += d
    else lossSum += -d
  }
  let avgGain = gainSum / period,
    avgLoss = lossSum / period
  rsi[period] = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss)
  for (let i = period + 1; i < n; i++) {
    const d = closes[i] - closes[i - 1]
    const gain = d > 0 ? d : 0,
      loss = d < 0 ? -d : 0
    avgGain = (avgGain * (period - 1) + gain) / period
    avgLoss = (avgLoss * (period - 1) + loss) / period
    rsi[i] = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss)
  }
  return rsi
}

export function ema(values, period) {
  const out = new Array(values.length).fill(null)
  if (values.length < period) return out
  const alpha = 2 / (period + 1)
  let seed = 0
  for (let i = 0; i < period; i++) seed += values[i]
  let prev = seed / period
  out[period - 1] = prev
  for (let i = period; i < values.length; i++) {
    prev = values[i] * alpha + prev * (1 - alpha)
    out[i] = prev
  }
  return out
}

export function macd(closes, fast = 12, slow = 26, signalP = 9) {
  const n = closes.length
  const emaFast = ema(closes, fast),
    emaSlow = ema(closes, slow)
  const macdLine = new Array(n).fill(null)
  for (let i = 0; i < n; i++) if (emaFast[i] != null && emaSlow[i] != null) macdLine[i] = emaFast[i] - emaSlow[i]
  const firstValid = macdLine.findIndex((v) => v != null)
  const signal = new Array(n).fill(null),
    histogram = new Array(n).fill(null)
  if (firstValid !== -1) {
    const sig = ema(macdLine.slice(firstValid), signalP)
    for (let j = 0; j < sig.length; j++)
      if (sig[j] != null) {
        const idx = firstValid + j
        signal[idx] = sig[j]
        histogram[idx] = macdLine[idx] - sig[j]
      }
  }
  return { macdLine, signal, histogram }
}

export function fngCompositeScore(fngArr) {
  const arr = (fngArr || []).map(Number).filter((v) => !isNaN(v))
  if (arr.length === 0) return null
  const cur = arr[arr.length - 1]
  const meanLast = (k) => {
    const m = Math.min(k, arr.length)
    let s = 0
    for (let i = arr.length - m; i < arr.length; i++) s += arr[i]
    return s / m
  }
  let score = 0.5 * (100 - cur) + 0.3 * (100 - meanLast(7)) + 0.2 * (100 - meanLast(30))
  if (cur <= 25) score += (25 - cur) * 0.6
  else if (cur >= 75) score -= (cur - 75) * 0.6
  return Math.max(0, Math.min(100, Math.round(score * 10) / 10))
}

export function sma(closes, period) {
  if (!Array.isArray(closes) || closes.length === 0) return null
  const p = Math.min(period, closes.length)
  let sum = 0
  for (let i = closes.length - p; i < closes.length; i++) sum += closes[i]
  return sum / p
}

export function mayerMultiple(closes, livePrice) {
  const ma = sma(closes, 200)
  if (ma == null || ma === 0) return null
  const price = typeof livePrice === 'number' && livePrice > 0 ? livePrice : closes[closes.length - 1]
  return { mayer: price / ma, sma200: ma, usedPeriod: Math.min(200, closes.length), isFallback: closes.length < 200, price }
}

export function drawdownFromHigh(closes, windowDays = 365, livePrice) {
  if (!Array.isArray(closes) || closes.length === 0) return null
  const N = closes.length,
    w = Math.min(windowDays, N)
  let high = -Infinity
  for (let i = N - w; i < N; i++) if (closes[i] > high) high = closes[i]
  const price = typeof livePrice === 'number' && livePrice > 0 ? livePrice : closes[N - 1]
  if (!(high > 0)) return null
  return { rollingHigh: high, windowUsed: w, isFallback: N < windowDays, drawdownPct: Math.min(0, (price / high - 1) * 100) }
}

export function smaAt(closes, period, endIdx) {
  if (endIdx + 1 < period) return null
  let sum = 0
  for (let i = endIdx - period + 1; i <= endIdx; i++) sum += closes[i]
  return sum / period
}

export function goldenDeathCross(closes) {
  const N = closes.length
  if (N < 50) return null
  const fast = smaAt(closes, Math.min(50, N), N - 1),
    slow = smaAt(closes, Math.min(200, N), N - 1)
  if (fast == null || slow == null) return null
  let event = 'NONE'
  if (N >= 201) {
    const fp = smaAt(closes, 50, N - 2),
      sp = smaAt(closes, 200, N - 2)
    if (fp != null && sp != null) {
      if (fp <= sp && fast > slow) event = 'GOLDEN_CROSS'
      else if (fp >= sp && fast < slow) event = 'DEATH_CROSS'
    }
  }
  return {
    sma50: fast,
    sma200: slow,
    crossState: fast > slow ? 'GOLDEN' : 'DEATH',
    event,
    gapPct: (fast / slow - 1) * 100,
    isFallback: N < 200,
  }
}

// 합성 점수 가중치(합 = 1.00)
export const WEIGHTS = { RSI: 0.22, MACD: 0.18, FNG: 0.22, Mayer: 0.18, DD: 0.12, GC_DC: 0.08 }

// 판정 밴드 (점수 높을수록 매수 우호 / color: ok=매수 warn=중립 crit=과열)
export const BANDS = [
  { min: 80, label: 'STRONG BUY', color: 'ok', advice: '과매도+공포+저평가 다중 합류. 분할 매수 적극 구간.' },
  { min: 65, label: 'ACCUMULATE', color: 'ok', advice: '매수 우호. 분할 적립 권장. 추세 필터와 함께 확인.' },
  { min: 45, label: 'NEUTRAL', color: 'warn', advice: '관망/중립. 뚜렷한 우위 없음. 추가 신호 대기.' },
  { min: 25, label: 'CAUTION', color: 'warn', advice: '주의. 탐욕·고평가 진입 초입. 추격 매수 자제.' },
  { min: 0, label: 'OVERHEATED', color: 'crit', advice: '과열. 극탐욕/고평가/고점 근접. 신규 매수 금지.' },
]
export const bandFor = (score) => BANDS.find((b) => score >= b.min) || BANDS[BANDS.length - 1]
export const fngLabel = (v) =>
  v == null ? '—' : v <= 25 ? 'Extreme Fear' : v <= 45 ? 'Fear' : v < 55 ? 'Neutral' : v < 75 ? 'Greed' : 'Extreme Greed'

export const INDICATOR_META = [
  { key: 'RSI', short: 'RSI·14', name: 'Relative Strength Index (Wilder)', desc: '과매도(<30) = 매수 / 과매수(>70) = 경계' },
  { key: 'MACD', short: 'MACD', name: 'MACD 12·26·9 히스토그램', desc: '음→양 / 바닥 상향전환 = 매수 모멘텀' },
  { key: 'FNG', short: 'F&G', name: '공포·탐욕 지수 (역발상)', desc: '극공포 = 매수 기회 / 극탐욕 = 과열' },
  { key: 'Mayer', short: 'MAYER', name: 'Mayer Multiple (가격 / 200일선)', desc: '<0.8 강한 매수 / >2.4 과열' },
  { key: 'DD', short: 'DD·365', name: '365일 고점 대비 낙폭', desc: '-30% 관심 / -50% 강한 매수' },
  { key: 'GC_DC', short: '50/200', name: '골든·데드 크로스 추세', desc: '골든크로스 = 추세 매수 우호' },
]

const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x))

// 모든 지표를 계산하고 0~100 합성 매수 타이밍 점수를 산출한다.
// 결측 지표는 합성에서 제외하고 가중치를 재정규화(부분 실패 허용).
export function computeAnalysis({ closes = [], fngArr = [], livePrice = null }) {
  const parts = {}

  const rsiSeries = rsiWilder(closes, 14)
  const r = closes.length ? rsiSeries[closes.length - 1] : null
  parts.RSI = {
    score: r == null ? null : clamp(((70 - clamp(r, 30, 70)) / 40) * 100, 0, 100),
    value: r == null ? 'N/A' : r.toFixed(1),
    detail: r == null ? '데이터 부족' : r < 30 ? '과매도 ⚑' : r > 70 ? '과매수' : '중립',
    series: rsiSeries.filter((v) => v != null).slice(-120),
  }

  let macdScore = null,
    macdVal = 'N/A',
    macdDetail = '데이터 부족',
    macdSeries = []
  if (closes.length >= 35) {
    const { histogram: h } = macd(closes, 12, 26, 9)
    macdSeries = h.filter((v) => v != null).slice(-120)
    const cur = h[closes.length - 1],
      prev = h[closes.length - 2]
    if (cur != null && prev != null) {
      const base = cur > 0 ? 60 : 40,
        delta = cur > prev ? 40 : -40
      macdScore = clamp(base + delta, 0, 100)
      macdVal = (cur > prev ? '▲' : '▼') + ' ' + (Math.abs(cur) >= 1 ? cur.toFixed(0) : cur.toFixed(2))
      macdDetail = (cur > 0 ? '+영역' : '−영역') + (cur > prev ? ' · 상승전환' : ' · 하락')
    }
  }
  parts.MACD = { score: macdScore, value: macdVal, detail: macdDetail, series: macdSeries }

  const fngScore = fngCompositeScore(fngArr)
  const fngCur = fngArr.length ? fngArr[fngArr.length - 1] : null
  parts.FNG = {
    score: fngScore,
    value: fngCur == null ? 'N/A' : String(fngCur),
    detail: fngLabel(fngCur),
    series: fngArr.slice(-120),
  }

  const mm = mayerMultiple(closes, livePrice)
  parts.Mayer = {
    score: mm == null ? null : clamp(((2.4 - mm.mayer) / 1.6) * 100, 0, 100),
    value: mm == null ? 'N/A' : mm.mayer.toFixed(2) + '×',
    detail: mm == null ? '데이터 부족' : mm.isFallback ? `200D 폴백(${mm.usedPeriod}d)` : 'vs 200일선',
  }

  const dd = drawdownFromHigh(closes, 365, livePrice)
  parts.DD = {
    score: dd == null ? null : clamp((-dd.drawdownPct / 50) * 100, 0, 100),
    value: dd == null ? 'N/A' : dd.drawdownPct.toFixed(1) + '%',
    detail: dd == null ? '데이터 부족' : `고점 $${dd.rollingHigh.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
  }

  const gc = goldenDeathCross(closes)
  parts.GC_DC = {
    score: gc == null ? 50 : gc.event === 'GOLDEN_CROSS' ? 100 : gc.event === 'DEATH_CROSS' ? 0 : gc.crossState === 'GOLDEN' ? 75 : 25,
    value: gc == null ? 'N/A' : gc.crossState + (gc.event !== 'NONE' ? ' ⚡' : ''),
    detail: gc == null ? '데이터 부족' : `gap ${gc.gapPct.toFixed(1)}%` + (gc.event !== 'NONE' ? ' · ' + gc.event : ''),
  }

  let acc = 0,
    wsum = 0,
    online = 0
  for (const k in WEIGHTS) {
    const v = parts[k].score
    if (v != null && !isNaN(v)) {
      acc += v * WEIGHTS[k]
      wsum += WEIGHTS[k]
      online++
    }
  }
  const score = wsum === 0 ? null : Math.round((acc / wsum) * 10) / 10
  return {
    score,
    coverage: Math.round(wsum * 100) / 100,
    online,
    band: score == null ? null : bandFor(score),
    parts,
    livePrice,
  }
}

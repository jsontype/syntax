// 지표 엔진을 라이브 데이터 + 정준 테스트벡터로 검증한다.
// 실행: ELECTRON_RUN_AS_NODE=1 <cursor node> scripts/verify.mjs
import { rsiWilder, macd, computeAnalysis, mayerMultiple, drawdownFromHigh, goldenDeathCross } from '../src/indicators.js'

let pass = 0, fail = 0
const ok = (cond, msg) => { if (cond) { pass++; console.log('  ✓', msg) } else { fail++; console.log('  ✗ FAIL:', msg) } }

// 1) RSI 정준 테스트벡터 (StockCharts/Wilder 표준 데이터, 첫 14 평균 후)
const canonical = [
  44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.10, 45.42, 45.84, 46.08,
  45.89, 46.03, 45.61, 46.28, 46.28, 46.00, 46.03, 46.41, 46.22, 45.64,
]
const rsi = rsiWilder(canonical, 14)
const firstRsi = rsi[14], secondRsi = rsi[15]
console.log('\n[1] RSI Wilder 정준벡터')
console.log('    first RSI =', firstRsi?.toFixed(2), '(기대 ≈ 70.46)')
console.log('    second RSI =', secondRsi?.toFixed(2), '(기대 ≈ 66.25)')
ok(Math.abs(firstRsi - 70.46) < 0.1, 'RSI[14] ≈ 70.46')
ok(Math.abs(secondRsi - 66.25) < 0.2, 'RSI[15] ≈ 66.25')

// 2) MACD 정상추세 수렴 / 단조증가 입력에서 hist 부호
console.log('\n[2] MACD 구조')
const trend = Array.from({ length: 120 }, (_, i) => 100 + i) // 꾸준한 상승
const m = macd(trend)
ok(m.histogram[119] != null, 'MACD hist 최신값 존재')
ok(m.macdLine.slice(0, 25).every((v) => v == null), 'macdLine은 slow-1(25) 이전 null')
console.log('    상승추세 hist 최신 =', m.histogram[119].toFixed(4), '(0 수렴 기대)')

// 3) 라이브 데이터로 전체 분석
console.log('\n[3] 라이브 데이터 분석 (Binance + CoinGecko + Alternative.me)')
async function fetchJSON(url) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 12000)
  try {
    const res = await fetch(url, { signal: ctrl.signal })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    return await res.json()
  } finally { clearTimeout(t) }
}

try {
  const [klRows, fngJson, cgPrice, cgChart] = await Promise.all([
    fetchJSON('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=1000'),
    fetchJSON('https://api.alternative.me/fng/?limit=90'),
    fetchJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'),
    fetchJSON('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily'),
  ])

  const closes = klRows.map((r) => parseFloat(r[4])).filter(Number.isFinite)
  const fngArr = fngJson.data.map((d) => parseInt(d.value, 10)).filter(Number.isFinite).reverse()
  const livePrice = cgPrice.bitcoin.usd
  console.log('    binance closes:', closes.length, '· fng pts:', fngArr.length, '· live $', livePrice.toLocaleString())

  ok(closes.length > 200, 'Binance 히스토리 200+ 확보(SMA200 정상)')
  ok(fngArr.length > 0, 'F&G 데이터 확보')

  const a = computeAnalysis({ closes, fngArr, livePrice })
  console.log('\n    ── 지표 부분점수 ──')
  for (const [k, p] of Object.entries(a.parts)) {
    console.log(`    ${k.padEnd(6)} value=${String(p.value).padEnd(16)} score=${p.score == null ? 'null' : p.score.toFixed(1)}`)
  }
  const mm = mayerMultiple(closes, livePrice)
  const dd = drawdownFromHigh(closes, 365, livePrice)
  const gc = goldenDeathCross(closes)
  console.log('\n    Mayer =', mm.mayer.toFixed(3), '(sma200 $' + mm.sma200.toFixed(0) + ')')
  console.log('    Drawdown365 =', dd.drawdownPct.toFixed(2) + '% (고점 $' + dd.rollingHigh.toFixed(0) + ')')
  console.log('    Cross =', gc.crossState, 'event=' + gc.event, 'gap=' + gc.gapPct.toFixed(2) + '%')
  console.log('\n    >>> BUY TIMING SCORE =', a.score, '[' + a.band.label + ']  coverage', a.coverage, '(' + a.online + '/6)')

  ok(a.score >= 0 && a.score <= 100, '합성 점수 0~100 범위')
  ok(a.coverage === 1, '풀데이터 coverage = 1.0')
  ok(a.online === 6, '6/6 지표 온라인')
  ok(Object.values(a.parts).every((p) => p.score == null || (p.score >= 0 && p.score <= 100)), '모든 부분점수 0~100')

  // 4) CoinGecko 폴백 파싱 (마지막 partial-day point 제거)
  console.log('\n[4] CoinGecko 폴백 파싱')
  const cgCloses = cgChart.prices.slice(0, -1).map((p) => p[1]).filter(Number.isFinite)
  console.log('    coingecko closes(폴백):', cgCloses.length)
  const aCg = computeAnalysis({ closes: cgCloses, fngArr, livePrice })
  ok(aCg.score >= 0 && aCg.score <= 100, 'CoinGecko 폴백으로도 점수 산출')

  // 5) 부분 실패 재정규화 (FNG만)
  console.log('\n[5] 부분 실패 재정규화 (closes 없음, FNG만)')
  const aPartial = computeAnalysis({ closes: [], fngArr, livePrice: null })
  console.log('    score=', aPartial.score, 'coverage=', aPartial.coverage, 'online=', aPartial.online)
  ok(aPartial.score != null && aPartial.coverage < 1, '결측 시 살아있는 지표로 재정규화')
} catch (e) {
  fail++
  console.log('  ✗ 라이브 페치 실패:', e.message)
}

console.log(`\n=== 결과: ${pass} pass / ${fail} fail ===`)
process.exit(fail ? 1 : 0)

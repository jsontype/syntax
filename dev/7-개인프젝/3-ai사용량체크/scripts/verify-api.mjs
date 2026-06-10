// api.js의 실제 프로덕션 페치 코드를 라이브 API에 대해 실행 검증한다.
// (브라우저 localStorage 를 메모리 스텁으로 대체)
const store = new Map()
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, v),
  removeItem: (k) => store.delete(k),
}

const { loadPrice, loadKlines, loadFng, loadCache } = await import('../src/api.js')
const { computeAnalysis } = await import('../src/indicators.js')

let pass = 0, fail = 0
const ok = (c, m) => { if (c) { pass++; console.log('  ✓', m) } else { fail++; console.log('  ✗ FAIL:', m) } }

console.log('[api] loadPrice / loadKlines / loadFng 라이브 호출')
const [price, klines, fng] = await Promise.all([loadPrice(), loadKlines(), loadFng()])

console.log('  price  =', price.status, price.source, '$' + (price.price?.toLocaleString() ?? '—'), 'chg', price.change24hPct?.toFixed(2) + '%')
console.log('  klines =', klines.status, klines.source, klines.closes?.length + ' closes')
console.log('  fng    =', fng.status, fng.source, fng.arr?.length + ' pts · latest', fng.latest?.value, fng.latest?.label)

ok(price.status === 'live' && price.price > 0, 'price 라이브 + 양수')
ok(klines.status === 'live' && klines.closes.length > 200, 'klines 라이브 + 200+ closes')
ok(fng.status === 'live' && fng.arr.length > 0, 'fng 라이브')
ok(fng.arr[fng.arr.length - 1] === fng.latest.value, 'fng 배열 마지막 = 최신값 (reverse 정확)')

console.log('\n[api] localStorage 캐시 기록 확인')
ok(loadCache('btc:price') != null, 'btc:price 캐시 저장됨')
ok(loadCache('btc:klines') != null, 'btc:klines 캐시 저장됨')
ok(loadCache('btc:fng') != null, 'btc:fng 캐시 저장됨')

console.log('\n[api] 페치 결과로 합성 분석')
const a = computeAnalysis({ closes: klines.closes, fngArr: fng.arr, livePrice: price.price })
console.log('  >>> SCORE', a.score, '[' + a.band.label + ']  coverage', a.coverage, '(' + a.online + '/6)')
for (const [k, p] of Object.entries(a.parts)) console.log(`     ${k.padEnd(6)} ${String(p.value).padEnd(16)} → ${p.score == null ? 'null' : p.score.toFixed(1)}`)
ok(a.score >= 0 && a.score <= 100 && a.online === 6, '프로덕션 페치 경로로 6/6 점수 산출')

console.log(`\n=== api 검증: ${pass} pass / ${fail} fail ===`)
process.exit(fail ? 1 : 0)

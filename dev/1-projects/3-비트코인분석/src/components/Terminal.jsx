import { useEffect, useRef, useState } from 'react'
import { WEIGHTS, BANDS, INDICATOR_META } from '../indicators.js'
import { ago } from '../format.js'

const TERM_HELP = [
  'commands:',
  '  score              현재 매수 타이밍 점수 + 판정',
  '  why                무엇이 점수를 끌어올리/내리는지(가중 기여도)',
  '  show <ind>         지표 상세 (rsi|macd|fng|mayer|dd|cross)',
  '  bands              5단계 판정 밴드 표',
  '  sources            데이터 소스 상태/신선도',
  '  refresh            전체 재조회',
  '  theme <green|cyan|amber|red> · matrix <on|off>',
  '  clear · help · whoami',
]
const SHOW_MAP = { rsi: 'RSI', macd: 'MACD', fng: 'FNG', mayer: 'Mayer', dd: 'DD', cross: 'GC_DC' }

export default function Terminal({ ctx }) {
  const [lines, setLines] = useState(['// btc_signal shell — `help` 입력으로 시작'])
  const [input, setInput] = useState('')
  const [hist, setHist] = useState([])
  const [hi, setHi] = useState(-1)
  const bodyRef = useRef(null)
  const print = (...out) => setLines((p) => [...p, ...out.flat()])

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  function run(raw) {
    const cmd = raw.trim()
    if (!cmd) return
    print(`satoshi@btc:~$ ${cmd}`)
    setHist((h) => [...h, cmd])
    setHi(-1)
    const [name, ...args] = cmd.split(/\s+/)
    const a = ctx.analysisRef.current
    switch (name.toLowerCase()) {
      case 'help':
        print(TERM_HELP)
        break
      case 'score':
        if (!a || a.score == null) {
          print('  ! 분석 데이터 없음 — `refresh`')
          break
        }
        print(
          `  BUY TIMING SCORE: ${a.score.toFixed(1)} / 100   [${a.band.label}]`,
          `  ${a.band.advice}`,
          `  coverage: ${a.online}/6 indicators (${Math.round(a.coverage * 100)}% weight)`,
        )
        break
      case 'why': {
        if (!a || a.score == null) {
          print('  ! 데이터 없음')
          break
        }
        const contribs = Object.keys(WEIGHTS)
          .map((k) => ({ k, v: a.parts[k].score, w: WEIGHTS[k] }))
          .filter((c) => c.v != null)
        const wsum = contribs.reduce((s, c) => s + c.w, 0)
        contribs
          .map((c) => ({ ...c, contr: (c.v * c.w) / wsum }))
          .sort((x, y) => y.contr - x.contr)
          .forEach((c) => print(`  ${c.k.padEnd(6)} score ${c.v.toFixed(0).padStart(3)} ×${c.w.toFixed(2)} → ${c.contr >= 0 ? '+' : ''}${c.contr.toFixed(1)}`))
        print(`  ── 합계 ${a.score.toFixed(1)} (높을수록 매수 우호)`)
        break
      }
      case 'show': {
        const key = SHOW_MAP[(args[0] || '').toLowerCase()]
        if (!key || !a) {
          print('  ! show rsi|macd|fng|mayer|dd|cross')
          break
        }
        const m = INDICATOR_META.find((x) => x.key === key)
        const p = a.parts[key]
        print(
          `  ${m.short} — ${m.name}`,
          `    값: ${p.value}  (${p.detail})`,
          `    부분점수: ${p.score == null ? 'N/A' : p.score.toFixed(1) + '/100'}  · 가중치 ${Math.round(WEIGHTS[key] * 100)}%`,
          `    ${m.desc}`,
        )
        break
      }
      case 'bands':
        BANDS.forEach((b) => print(`  ${String(b.min).padStart(3)}~  ${b.label.padEnd(11)} ${b.advice}`))
        break
      case 'sources': {
        const f = (s, label) =>
          `  ${label.padEnd(7)} ${s ? s.status + (s.source ? ' · ' + s.source : '') + (s.fetchedAt ? ' · ' + ago(s.fetchedAt) + ' ago' : '') : 'n/a'}`
        print(f(ctx.price, 'price'), f(ctx.klines, 'klines'), f(ctx.fng, 'fng'))
        break
      }
      case 'refresh':
        print('  ↻ refetching all sources...')
        ctx.api.refresh()
        break
      case 'theme': {
        const ok = ctx.api.theme(args[0])
        print(ok ? `  ✓ theme → ${args[0]}` : '  ! theme: green | cyan | amber | red')
        break
      }
      case 'matrix':
        ctx.api.matrix(args[0] !== 'off')
        print(`  ✓ matrix ${args[0] !== 'off' ? 'ON' : 'OFF'}`)
        break
      case 'clear':
        setLines([])
        break
      case 'whoami':
        print('  satoshi // HODL responsibly. DYOR. 신호는 참고용입니다.')
        break
      default:
        print(`  command not found: ${name} — \`help\``)
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!hist.length) return
      const i = hi < 0 ? hist.length - 1 : Math.max(0, hi - 1)
      setHi(i)
      setInput(hist[i])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (hi < 0) return
      const i = hi + 1
      if (i >= hist.length) {
        setHi(-1)
        setInput('')
      } else {
        setHi(i)
        setInput(hist[i])
      }
    }
  }

  return (
    <section className="terminal">
      <div className="term-head">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="term-title">~/btc-signal — shell</span>
      </div>
      <div className="term-body" ref={bodyRef} onClick={() => bodyRef.current?.querySelector('input')?.focus()}>
        {lines.map((l, i) => (
          <div key={i} className="term-line">
            {l}
          </div>
        ))}
        <div className="term-input-row">
          <span className="term-prompt">satoshi@btc:~$</span>
          <input autoFocus value={input} spellCheck={false} onChange={(e) => setInput(e.target.value)} onKeyDown={onKeyDown} />
        </div>
      </div>
    </section>
  )
}

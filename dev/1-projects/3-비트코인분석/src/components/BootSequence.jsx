import { useEffect, useRef, useState } from 'react'

const LINES = [
  '> initializing btc_signal_terminal v1.0 ...',
  '> linking market feeds: coingecko / binance / alternative.me',
  '> establishing secure uplink ............ [ OK ]',
  '> loading indicator engine: rsi · macd · mayer · drawdown · f&g',
  '> computing buy-timing composite ........ [ OK ]',
  '> ACCESS GRANTED. // signal only — not financial advice',
]

// 한 글자씩 타이핑되는 부팅 시퀀스. 끝나면 onDone 호출.
export default function BootSequence({ onDone }) {
  const [rendered, setRendered] = useState([])
  const [current, setCurrent] = useState('')
  const doneRef = useRef(false)

  useEffect(() => {
    let line = 0
    let char = 0
    let timer

    function tick() {
      if (line >= LINES.length) {
        if (!doneRef.current) {
          doneRef.current = true
          timer = setTimeout(onDone, 450)
        }
        return
      }
      const target = LINES[line]
      if (char <= target.length) {
        setCurrent(target.slice(0, char))
        char += 1
        timer = setTimeout(tick, 12 + Math.random() * 22)
      } else {
        setRendered((prev) => [...prev, target])
        setCurrent('')
        line += 1
        char = 0
        timer = setTimeout(tick, 90)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="boot" onClick={onDone} title="클릭하면 건너뜁니다">
      <pre className="boot-text">
        {rendered.map((l, i) => (
          <div key={i} className="boot-line">
            {l}
          </div>
        ))}
        {current && (
          <div className="boot-line">
            {current}
            <span className="cursor-blink">█</span>
          </div>
        )}
      </pre>
      <div className="boot-skip">[ click / 아무 키나 눌러 건너뛰기 ]</div>
    </div>
  )
}

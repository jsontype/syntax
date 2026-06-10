// 라인 스파크라인 + (MACD용) 히스토그램. 모두 순수 SVG.

export function Sparkline({ data = [], color = '#00ff9c', height = 64, refLines = [], baseline }) {
  const W = 600
  if (!data || data.length < 2) return <div className="spark-empty">// 데이터 부족</div>
  const pad = 3
  const max = Math.max(...data)
  const min = Math.min(...data, baseline != null ? baseline : Infinity)
  const span = max - min || 1
  const stepX = (W - pad * 2) / (data.length - 1)
  const Y = (v) => height - pad - ((v - min) / span) * (height - pad * 2)
  const pts = data.map((v, i) => [pad + i * stepX, Y(v)])
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `${pad},${height - pad} ${line} ${(W - pad).toFixed(1)},${height - pad}`
  const [lx, ly] = pts[pts.length - 1]
  return (
    <svg className="spark" viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="none">
      {refLines.map((rl, i) => {
        const y = Y(rl.v)
        return <line key={i} x1="0" x2={W} y1={y} y2={y} stroke={rl.color || 'rgba(255,255,255,.15)'} strokeWidth="1" strokeDasharray="4 4" />
      })}
      <polygon points={area} fill={color} opacity="0.12" />
      <polyline points={line} fill="none" stroke={color} strokeWidth="1.6" />
      <circle cx={lx} cy={ly} r="2.8" fill={color}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function Histogram({ data = [], height = 40 }) {
  const W = 600
  if (!data || data.length < 2) return <div className="spark-empty spark-sm">// 데이터 부족</div>
  const maxAbs = Math.max(...data.map((v) => Math.abs(v))) || 1
  const bw = W / data.length
  const mid = height / 2
  return (
    <svg className="spark spark-sm" viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="none">
      <line x1="0" x2={W} y1={mid} y2={mid} stroke="rgba(255,255,255,.15)" strokeWidth="1" />
      {data.map((v, i) => {
        const h = (Math.abs(v) / maxAbs) * (mid - 2)
        return (
          <rect
            key={i}
            x={i * bw}
            y={v >= 0 ? mid - h : mid}
            width={Math.max(1, bw - 0.5)}
            height={h}
            fill={v >= 0 ? 'var(--ok)' : 'var(--crit)'}
            opacity="0.85"
          />
        )
      })}
    </svg>
  )
}

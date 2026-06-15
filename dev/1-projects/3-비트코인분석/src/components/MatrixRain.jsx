import { useEffect, useRef } from 'react'

// 배경 매트릭스 레인. accent 색상으로 떨어진다.
export default function MatrixRain({ enabled = true, accent = '#00ff9c' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const glyphs = '₿0123456789ABCDEF↑↓<>/\\{}[]=$#@サトシ'.split('')
    const fontSize = 14
    let columns = 0
    let drops = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / fontSize)
      drops = new Array(columns).fill(0).map(() => Math.random() * -50)
    }
    resize()
    window.addEventListener('resize', resize)

    let lastDraw = 0
    function draw(ts) {
      rafRef.current = requestAnimationFrame(draw)
      if (ts - lastDraw < 55) return // ~18fps, 가볍게
      lastDraw = ts

      ctx.fillStyle = 'rgba(5, 8, 10, 0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        // 선두 글자는 밝게
        ctx.fillStyle = Math.random() > 0.975 ? '#ffffff' : accent
        ctx.fillText(ch, x, y)
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i] += 1
      }
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [enabled, accent])

  if (!enabled) return null
  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />
}

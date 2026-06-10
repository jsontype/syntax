// 표시용 포맷 헬퍼
export const fmtUsd = (n, d = 0) =>
  n == null ? '—' : '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d })
export const fmtPct = (n) => (n == null ? '—' : (n >= 0 ? '+' : '') + Number(n).toFixed(2) + '%')
export const fmtCompact = (n) =>
  n == null ? '—' : '$' + new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(n)
export const ago = (ts) => {
  if (!ts) return '—'
  const s = Math.floor((Date.now() - ts) / 1000)
  if (s < 60) return s + 's'
  if (s < 3600) return Math.floor(s / 60) + 'm'
  if (s < 86400) return Math.floor(s / 3600) + 'h'
  return Math.floor(s / 86400) + 'd'
}

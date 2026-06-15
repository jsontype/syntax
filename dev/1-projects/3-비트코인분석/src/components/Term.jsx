import { createContext, useContext } from 'react'
import { GLOSSARY } from '../glossary.js'

// 툴팁 표시 여부 전역 컨텍스트 (헤더 체크박스로 토글)
export const TipsContext = createContext(true)

// 어려운 용어를 감싸 hover/focus 시 쉬운 설명 툴팁을 띄운다.
// tips가 꺼져 있거나 사전에 없는 key면 그냥 children만 렌더.
export default function Term({ k, children, align = 'left', underline = true }) {
  const tips = useContext(TipsContext)
  const g = GLOSSARY[k]
  if (!tips || !g) return children ?? g?.title ?? null
  return (
    <span className={`term${underline ? ' u' : ''}`} tabIndex={0}>
      {children ?? g.title}
      <span className={`tip${align === 'right' ? ' tip-r' : ''}`} role="tooltip">
        <span className="tip-title">{g.title}</span>
        <span className="tip-body">{g.body}</span>
      </span>
    </span>
  )
}

import { useEffect, useState } from 'react'

/**
 * localStorage에 영속되는 상태. 첫 렌더 시 저장된 값이 있으면 그것을,
 * 없으면 initialValue를 사용한다.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key)
      return raw != null ? JSON.parse(raw) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* 저장 실패는 조용히 무시 (시크릿 모드 등) */
    }
  }, [key, value])

  return [value, setValue]
}

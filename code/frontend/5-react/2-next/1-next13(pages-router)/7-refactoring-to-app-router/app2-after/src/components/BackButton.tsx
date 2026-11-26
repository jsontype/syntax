'use client'

import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

const BackButton = memo(() => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.back()
  }, [router])

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors text-black"
    >
      돌아가기
    </button>
  )
})

BackButton.displayName = 'BackButton'

export default BackButton

'use client'

import { useState, memo, useCallback, useMemo } from 'react'
import { useParams } from 'next/navigation'

const MovieDetailComment = memo(() => {
  const [comment, setComment] = useState('')
  const params = useParams()
  const id = params.id

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }, [])

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (!comment) {
      alert('댓글을 입력하세요.')
      return
    }

    alert(`TODO: 댓글이 등록되었습니다. \n 댓글 내용: ${comment} \n 영화 ID: ${id}`)
    setComment('')
  }, [comment, id])

  const title = useMemo(() => `# ${id} 영화의 댓글`, [id])

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full px-4 py-2 text-black border rounded"
          placeholder="댓글을 입력하세요."
          value={comment}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          등록
        </button>
      </form>
    </div>
  )
})

MovieDetailComment.displayName = 'MovieDetailComment'

export default MovieDetailComment 
'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'

export default function MovieDetailComment() {
  const [comment, setComment] = useState('')

  // CSR에서는 useRouter의 query를 통해서 params 정보를 추출한다.
  const router = useRouter()
  const { id } = router.query

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment) {
      alert('댓글을 입력하세요.')
      return
    }

    alert(`TODO: 댓글이 등록되었습니다. \n 댓글 내용: ${comment} \n 영화 ID: ${id}`)
    setComment('')
  }

  return (
    <div>
      <h2># {id} 영화의 댓글</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="text-black"
          placeholder="댓글을 입력하세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  )
} 
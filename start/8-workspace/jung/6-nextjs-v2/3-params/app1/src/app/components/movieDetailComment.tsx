'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function MovieDetailComment() {
  const [comment, setComment] = useState('')

  // (중요) Next15에서는 클라이언트컴포넌트에서는 종전대로 useParams()를 사용한다. import { useParams } from 'next/navigation'
  // 이렇게 하면, [slug]에 있던 [id]를 비구조화할당(destructuring)으로 가져올 수 있다.
  // 여기는 이렇게 취득해서, onSubmit에서 INSERT POST API를 호출할 때, id를 키로 활용하는 흐름이다.
  const { id } = useParams()

  const onSubmit = () => {
    if (!comment) {
      alert('댓글을 입력하세요.')
      return
    }

    alert(`댓글이 등록되었습니다. \n 댓글 내용: ${comment} \n 영화 ID: ${id}`)
    setComment('')
  }

  return (
    <div>
      <h2>댓글</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="댓글을 입력하세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  )
}

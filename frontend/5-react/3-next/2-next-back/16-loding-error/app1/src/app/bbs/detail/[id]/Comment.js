"use client"

import { useState, useEffect } from "react"

export default function Comment(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`/api/comment/list?id=${props.parentsId}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result)
      })
  }, [])

  return (
    <div>
      <div>댓글목록</div>
      <div>
        {data.length > 0
          ? data.map((item, index) => <p key={index}>{item.content}</p>)
          : "댓글없음"}
      </div>

      <form action="/api/comment/write" method="POST">
        {/* _id는 자동저장이므로 보낼 필요 없음 */}
        <input type="text" name="comment" placeholder="코멘트" />
        <input type="hidden" name="parent" value={props.parentsId} />
        <button type="submit">전송</button>
      </form>
    </div>
  )
}

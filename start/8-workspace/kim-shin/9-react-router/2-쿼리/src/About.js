import React from "react"
// 쿼리값을 받기 위해 useSearchParams 임포트
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function About() {
  const [searchParams] = useSearchParams()
  const detail = searchParams.get("detail")
  // localhost:3000/about?detail=true

  return (
    <div>
      <h2>About</h2>
      <p>
        추가설명 :{" "}
        {detail
          ? `추가적인 정보가 어쩌고.... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto obcaecati aliquid quae sequi rerum cum
              laboriosam reiciendis fugit quasi ducimus nam eligendi assumenda,
              dolor, placeat corporis, optio laborum sapiente natus!`
          : "없음"}
      </p>
      <Link to="/about">세부정보 닫기</Link> /
      <Link to="/about?detail=true">세부정보 열기</Link>
    </div>
  )
}

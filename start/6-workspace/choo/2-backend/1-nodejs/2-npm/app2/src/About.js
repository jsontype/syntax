import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function About() {
  const [searchParams] = useSearchParams()
  const detail = searchParams.get("detail") // http://localhost:3000/about?detail=true
  console.log("detail: ", detail)

  return (
    <div>
      <h1>소개페이지</h1>
      {detail === "true" ? (
        <>
          <p>
            상세 설명 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati reprehenderit hic quod, fugiat quisquam perferendis ullam
            eos, iusto odio modi libero et aliquam incidunt a quidem culpa.
            Fugiat, molestiae alias.
          </p>
          <Link to="/about?detail=false">디테일닫기</Link>
        </>
      ) : (
        <p>
          <Link to="/about?detail=true">디테일보기</Link>
        </p>
      )}
    </div>
  )
}

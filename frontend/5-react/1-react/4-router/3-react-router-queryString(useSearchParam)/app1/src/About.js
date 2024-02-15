// localhost:3000/about?detail=true
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function About() {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("detail");

  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지 컨텐츠</p>

      {!detail && <Link to="/about?detail=true">세부정보 보기</Link>}

      {detail && (
        <>
          <p>
            추가적인 정보가 어쩌고.... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto obcaecati aliquid quae sequi rerum cum
            laboriosam reiciendis fugit quasi ducimus nam eligendi assumenda,
            dolor, placeat corporis, optio laborum sapiente natus!
          </p>
          <Link to="/about">세부정보 닫기</Link>
        </>
      )}
    </div>
  );
}

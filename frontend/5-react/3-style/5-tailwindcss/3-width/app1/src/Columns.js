// columns-1, -2, -3 : 몇줄의 Columns로 표시하는지 설정
// break-inside-avoid-column : 이 태그안에서는 열 나누기 방지
// md:break-inside-avoid-column : md 사이즈일 때는 열 나누기 방지
// hover:break-inside-avoid-column : 후버링할 때는 열 나누기 방지

import React from "react"

export default function Columns() {
  return (
    <>
      <div className="columns-1">
        <p>Well, let me tell you something, ...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <hr />
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-inside-avoid-column">
          열 나누기 방지된 태그 : 여기는 나눠져선 안된다.
        </p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <hr />
      <div className="columns-3">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">
          열 나누기 방지된 태그 : 여기는 나눠져선 안된다.
        </p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <hr />
      <div className="columns-4">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">
          열 나누기 방지된 태그 : 여기는 나눠져선 안된다.
        </p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
    </>
  )
}

/*
  사이트 루트경로에 있는 layout.js 에서 에러났을 때 다른 UI를 보여주고 싶으면 
  그 옆에 global-error.js 파일 만들어두면 에러시 그거를 보여준다.
*/

"use client"

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>(글로벌) 에러 발생 : {error}</h4>
      <button
        onClick={() => {
          reset()
        }}
      >
        다시시도
      </button>
    </div>
  )
}

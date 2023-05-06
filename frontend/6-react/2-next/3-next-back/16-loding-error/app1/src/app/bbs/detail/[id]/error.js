/*
  페이지 로드시 에러가 나는 경우가 있다. 
    서버가 죽거나, DB에서 이상한 이유로 데이터를 못가져오거나 그런 경우에 에러가 발생할텐데 
    그 경우 직접 if문으로, try catch 문법으로 처리해도 되겠지만
    page.js 파일 옆에 error.js 라는 이름으로 파일 만들어둬도 된다.
    그럼 page.js에서 에러날 경우 error.js 내용을 옆의 page.js 대신 보여준다.
    중요한 페이지마다 error.js를 추가해두면 좋다.  

  error.js 페이지에는 다음과 같은 룰이 있다.
    무조건, 'use client' 컴포넌트로 만들어야한다.
    error, reset 두개의 프롭을 자동으로 사용할 수 있다. (필요없으면 빼도 됨)
    개발 서버에서만 확인이 가능하다.
*/

"use client"

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러 발생 : {error}</h4>
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

/* 
  리액트에서의 <Suspense fallback={<h4>로딩중</h4>}> 이거랑 똑같은 역할이다.
  Next.js 에선 개발자 편하라고 loading.js 파일에 적으면 자동으로 <Suspense> 로 바꿔줘서 이게 가능한 것이다.
*/
export default function Loading() {
  return <h4>로딩중</h4>
}

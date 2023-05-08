/*
  실은 없는 URL 입력하면 Next.js에선 자동으로 404 page not found 페이지가 출현하므로 직접 만들 필요는 없다.
  하지만 상세페이지 URL을 이상하게 입력하면 404가 아니라 에러메세지가 나온다.
  상세페이지는 /detail/(글_id) 입력해야 접속이 가능한데
  (글 _id) 부분을 틀리게 입력하는 경우 필요한 변수에 null이 담겨서 에러가 뜨는 것이다.
  아무튼 이런 경우 404라든지 다른 레이아웃을 보여주고 싶으면 
  아래처럼 if 조건문을 써서 처리를 해도 되고,
    if (result == null) {
      return <h4>404 에러 : 해당 페이지가 없음</h4>
    } else {
      return (상세페이지)
    }
  아니면 아래와 같이 not-found.js 파일을 생성해서 자동처리로 넘겨주어도 된다.
*/

export default function NotFound() {
  return <h4>404 에러 : 해당 페이지가 없음</h4>
}

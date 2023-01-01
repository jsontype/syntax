// styled : CSS in JS 기술법의 Styled Components에서 styled를 임포트해 쓰면, 아래 color와 같이, props나 변수도 사용 가능
// { css } : 아래 huge와 같이, CSS 코드를 조건부로 보여주고 싶다면 { css }를 사용해서 스타일 내부에 중첩
import styled, { css } from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

// 하나씩 스위칭해서 확인
function App() {
  // return <Circle />; // 검은색 원
  // return <Circle color="red" />; // 빨간색 원
  return (
    <>
      <Circle />
      <Circle huge />
      <Circle color="red" />
      <Circle huge color="blue" />
    </>
  );
}

export default App;

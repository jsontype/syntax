import { StatusBar } from "expo-status-bar"
import styled, { css } from "styled-components/native"

const Container = styled.View`
  flex: 1;
  background-color: "pink";
  align-items: center;
  justify-content: center;
`

const cssText = css`
  font-size: 20px;
  font-weight: 600;
`

const StyledText = styled.Text`
  ${cssText}
  color: blue;
`

// 스타일드컴포넌트를 상속받아서 새 스타일드컴포넌트 만들기
const ErrorText = styled(StyledText)`
  ${cssText}
  color: red;
`

const StyledButton = styled.Button``

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <StyledText>Styled Components</StyledText>
      <ErrorText>Error</ErrorText>
      <StyledButton
        title="Button"
        onPress={() => alert("스타일컴포넌트 버튼!")}
      ></StyledButton>
    </Container>
  )
}

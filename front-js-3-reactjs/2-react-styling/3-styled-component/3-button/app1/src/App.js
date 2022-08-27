import React from 'react'
// 1. 일반 버튼 임포트
import Button from './components/Button'
// 3. ThemeProvider 임포트 : 전역 값 설정
import styled, { ThemeProvider } from 'styled-components'

// 1. 앱 윤곽
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`

// 1. 버튼 간의 여백 설정
const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
  > Button {
    margin-right: 0.5rem;
    align-items: center;
  }
`

function App() {
  return (
    // 3. ThemeProvider 사용 : 전역 값 설정. 이렇게 에서 theme 을 설정하면 ThemeProvider 내부에 렌더링된 styled-components 로 만든 컴포넌트에서 palette 를 조회하여 사용할 수 있다. 
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >

      {/* 1. 일반 버튼 */}
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </ButtonGroup>
        {/* 3. ThemeProvider 사용 버튼 */}
        {/* 4. color, size : 버튼의 색상, 크기를 조절 */}
        <ButtonGroup>
          <Button color="gray" size="large">
            BUTTON
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large">
            BUTTON
          </Button>
          <Button color="pink">BUTTON</Button>
          <Button color="pink" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        {/* 4. outline : Boolean 값으로 true일 경우 "윤곽만 있는 버튼"이 됨 */}
        <ButtonGroup>
          <Button size="large" outline>
            BUTTON
          </Button>
          <Button color="gray" outline>
            BUTTON
          </Button>
          <Button color="pink" size="small" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        {/* 4. fullWidth : Boolean 값으로 true일 경우 "풀(100%) 너비의 버튼"이 됨 */}
        <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="gray" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  )
}

export default App

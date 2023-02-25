import { useState } from "react"
import { StatusBar } from "react-native"
import styled, { ThemeProvider } from "styled-components/native"
import { theme } from "./theme"
import Input from "./components/Input"

// SafeAreaView : 노치 패딩 적용
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  margin-top: 50px;
  color: ${({ theme }) => theme.main};
  width: 90%;
  align-items: flex-end;
  padding: 0 20px;
`

export default function App() {
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    alert("제출됨")
    setNewTodo("")
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />

        <Title>TODOS</Title>

        <Input
          placeholder="+ Add a task"
          value={newTodo}
          onChangeText={(e) => setNewTodo(e)}
          onSubmitEditing={addTodo}
        />
      </Container>
    </ThemeProvider>
  )
}

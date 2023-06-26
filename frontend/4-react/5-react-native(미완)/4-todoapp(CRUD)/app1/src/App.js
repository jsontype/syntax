import { useState } from "react"
import { StatusBar, Dimensions } from "react-native"
import styled, { ThemeProvider } from "styled-components/native"
import { theme } from "./theme"
import Input from "./components/Input"
import Task from "./components/Task"
// 사용자의 로컬에 데이터를 저장시키는 라이브러리
import AsyncStorage from "@react-native-async-storage/async-storage"
// 앱이 구동될 때 저장된 데이터를 불러오기 위해 사용할 로딩중 여부 파악 라이브러리
import AppLoading from "expo-app-loading"

// SafeAreaView : 노치 패딩 적용
const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background};
  flex: 1;
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

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`

export default function App() {
  const width = Dimensions.get("window").width

  const [todos, setTodos] = useState({})
  // Input 입력값
  const [createInput, setCreateInput] = useState("")
  // Loading 완료여부
  const [isReady, setIsReady] = useState(false)

  // const tempData = {
  //   1: { id: "1", text: "React Native", completed: false },
  //   2: { id: "2", text: "Expo", completed: true },
  //   3: { id: "3", text: "Javascript", completed: false },
  // }

  const saveData = async (todos) => {
    await AsyncStorage.setItem("todos", JSON.stringify(todos))
    setTodos(todos)
  }

  const getData = async () => {
    const loadedData = await AsyncStorage.getItem("todos")
    setTodos(JSON.parse(loadedData || {}))
  }

  // Todo 추가
  const createTodo = () => {
    // Todo 인풋에 아무것도 입력을 하지 않으면 추가가 되지 않도록 함
    if (createInput.length < 1) {
      return
    }
    const ID = Date.now().toString()
    const createInputObj = {
      [ID]: { id: ID, text: createInput, completed: false },
    }
    setCreateInput("")
    saveData({ ...todos, ...createInputObj })
  }

  // Todo 삭제
  const deleteTodo = (id) => {
    const currentTodos = { ...todos }
    delete currentTodos[id]
    saveData(currentTodos)
  }

  // Todo 토글
  const checkTodo = (id) => {
    const currentTodos = { ...todos }
    currentTodos[id].completed = !currentTodos[id].completed
    saveData(currentTodos)
  }

  // Todo 수정
  const updateTodo = (item) => {
    const currentTodos = { ...todos }
    currentTodos[item.id] = item
    saveData(currentTodos)
  }

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        /> */}

        <Title>TODOS</Title>

        <Input
          placeholder="+ Add a task"
          value={createInput}
          onChangeText={(e) => setCreateInput(e)}
          onSubmitEditing={createTodo}
          onBlur={() => setCreateInput("")}
        />

        <List width={width}>
          {Object.values(todos)
            // .reverse() // 최신순
            .map((item) => (
              <Task
                key={item.id}
                item={item}
                deleteTodo={deleteTodo}
                checkTodo={checkTodo}
                updateTodo={updateTodo}
              />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={getData}
      // 로딩화면 이미지 수정 작업을 할 때는 아래를 setIsReady(false)로 해서 작업하기
      onFinish={() => setIsReady(true)}
      onError={() => {}}
    />
  )
}

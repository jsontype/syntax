import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"
import Input from "./Input"

const Container = styled.View`
  flex: 1;
  background-color: "pink";
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Input />
    </Container>
  )
}

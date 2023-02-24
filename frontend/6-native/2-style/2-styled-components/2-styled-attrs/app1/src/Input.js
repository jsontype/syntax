import React, { useState } from "react"
import styled from "styled-components/native"

// styled.input.attrs({})``의 형태라면, {}안에 해당 태그의 attributes들을 넣을 수 있다.
const StyledInput = styled.TextInput.attrs({
  placeholder: "텍스트를 입력하세요.",
  placeholderTextColor: "pink",
})`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({ text }) => (text ? "gray" : "pink")};
`

export default function Input() {
  const [text, setText] = useState("")

  return (
    <>
      <StyledInput onChangeText={(text) => setText(text)} text={text} />
    </>
  )
}

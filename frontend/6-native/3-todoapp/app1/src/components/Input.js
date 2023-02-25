import React from "react"
import styled from "styled-components/native"
import { useWindowDimensions } from "react-native"

const StyledInput = styled.TextInput`
  width: 80%;
  height: 60px;
  margin-top: 40px;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 15px;
  background-color: white;
  color: black;
`

export default function Input({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
}) {
  // useWindowDimensions : 기기별 width를 계산해줌 + 기기 너비가 바뀔 때 자동업데이트
  const width = useWindowDimensions().width

  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      // maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="send" // "done" | "go" | "next" | "search" | "send"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  )
}

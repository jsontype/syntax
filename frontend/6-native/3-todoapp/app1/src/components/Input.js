import React from "react"
import styled from "styled-components/native"
import { Dimensions } from "react-native"

const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: "gray",
})`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 20px;
  width: ${({ width }) => width - 40}px;
  height: 60px;
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 10px;
`

export default function Input({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) {
  // useWindowDimensions : 기기별 width를 계산해줌 + 기기 너비가 바뀔 때 자동업데이트
  const width = Dimensions.get("window").width

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
      onBlur={onBlur}
    />
  )
}

import React from "react"
import { TextInput } from "react-native"

export default function MyTextInput() {
  return (
    <TextInput
      // 이벤트 Props
      onChange={(e) => console.log(e.nativeEvent.text)} // e.target.value와 같은 효과
      onChangeText={(e) => console.log(e)} // e.target.value와 같은 효과
      // 플레이스홀더 Props
      placeholder="값을 입력하세요."
      // 스타일 Props
      style={{
        backgroundColor: "pink",
        color: "white",
        fontSize: 20,
        border: "1px solid white",
        borderRadius: 10,
        padding: 10,
        width: "50%",
      }}
    />
  )
}

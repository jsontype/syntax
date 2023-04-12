import React from "react"
import { Text, View } from "react-native"

export default function Box({ style, content }) {
  return (
    <View style={[{ borderWidth: 2, width: "100%" }, style]}>
      <Text>{content}</Text>
    </View>
  )
}

// defaultProps를 설정하면 Props를 전달하지 않았을 때의 기본값을 정할 수 있다.
Box.defaultProps = {
  content: "default",
}

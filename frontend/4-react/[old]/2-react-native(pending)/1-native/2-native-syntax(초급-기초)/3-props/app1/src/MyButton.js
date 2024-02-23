import React from "react"
import { TouchableOpacity, View, Text } from "react-native"

export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
        margin: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 20, color: "white" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

// defaultProps를 설정하면 Props를 전달하지 않았을 때의 기본값을 정할 수 있다.
MyButton.defaultProps = {
  title: "default",
  onPress: () => alert("default"),
}

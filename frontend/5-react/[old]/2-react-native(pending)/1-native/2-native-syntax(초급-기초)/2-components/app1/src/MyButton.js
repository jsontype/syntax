import React from "react"
import { TouchableOpacity, View, Text } from "react-native"

export default function MyButton() {
  return (
    <TouchableOpacity
      onPress={() => alert("MyButton")} // https://reactnative.dev/docs/touchableopacity 설명에 의하면, TouchableWithoutFeedback로부터 상속받고 있고, TouchableWithoutFeedback에는 onPress가 있다.
      style={{
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
        margin: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 20, color: "white" }}>MyButton</Text>
      </View>
    </TouchableOpacity>
  )
}

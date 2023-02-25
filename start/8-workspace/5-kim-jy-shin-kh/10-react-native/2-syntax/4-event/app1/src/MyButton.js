import React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

export default function MyButton({ title }) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPressIn={() => console.log("onPressIn 발생")} // 버튼을 손가락으로 누르는 순간
      onPressOut={() => console.log("onPressOut 발생")} // 버튼으로부터 손가락을 떼는 순간
      onPress={() => console.log("<<< onPress 발생!!! >>>")}
      onLongPress={() => console.log("onLongPress 발생")} // 버튼을 손가락으로 500ms 이상(기본값) 누르는 순간
      delayLongPress={3000} // onLongPress가 일어나는 기준 시간을 3000ms으로 변경
    >
      <View>
        <Text style={{ color: "white" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 100,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
})

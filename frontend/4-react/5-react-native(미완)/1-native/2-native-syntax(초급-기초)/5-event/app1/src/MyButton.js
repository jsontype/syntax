import React from "react"
import { TouchableOpacity, View, Text } from "react-native"

export default function MyButton({ title, onPress }) {
  return (
    <>
      <TouchableOpacity
        // https://reactnative.dev/docs/pressable에 가면 press 이벤트에 대한 그림 설명 있음
        // 이벤트 Props
        onPressIn={() => console.log("onPressIn 발생")} // 버튼을 손가락으로 누르는 순간
        onPressOut={() => console.log("onPressOut 발생")} // 버튼으로부터 손가락을 떼는 순간
        onLongPress={() => console.log("onLongPress 발생")} // 버튼을 손가락으로 500ms 이상(기본값) 누르는 순간
        delayLongPress={3000} // onLongPress가 일어나는 기준 시간을 3000ms으로 변경
        onPress={() => {
          onPress()
          console.log("<onPress 발생 !!!>")
        }} // onPressIn과 onPressOut이 함께 일어났을 때
        // 스타일 Props
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, color: "white" }}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

MyButton.defaultProps = {
  title: "default",
  onPress: () => alert("default"),
}

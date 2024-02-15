import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { styles } from "./style"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* 스타일을 적용할 때는 style.js 안에 내용을 추가한다. */}
      <Text style={styles.text}>일반메시지</Text>
      {/* 여러개의 스타일을 적용할 때는 배열을 이용한다. */}
      <Text style={[styles.text, styles.errorText]}>에러메시지</Text>
    </View>
  )
}

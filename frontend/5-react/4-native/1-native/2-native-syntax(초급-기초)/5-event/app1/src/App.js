import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"
import MyButton from "./MyButton"
import MyTextInput from "./MyTextInput"

export default function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(1)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>{a}</Text>
      <Text>{b}</Text>

      <MyButton title="2 더하기" onPress={() => setA(a + 2)} />
      <MyButton title="2 곱하기" onPress={() => setB(b * 2)} />

      <MyTextInput />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

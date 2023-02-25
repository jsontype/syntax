import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import MyButton from "./MyButton"
import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>{count}</Text>

      <MyButton
        title="+"
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <MyButton
        title="-"
        onPress={() => {
          setCount(count - 1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

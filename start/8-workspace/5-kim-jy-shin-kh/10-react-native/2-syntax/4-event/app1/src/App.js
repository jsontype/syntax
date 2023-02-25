import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import MyButton from "./MyButton"
import MyInput from "./MyInput"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MyButton title="버튼" />
      <MyInput />
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

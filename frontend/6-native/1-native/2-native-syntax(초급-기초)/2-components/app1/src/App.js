import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"
import MyButton from "./MyButton"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, React Native</Text>
      <StatusBar style="auto" />
      <Button title="Button" onPress={() => alert("Click!")} />
      <MyButton />
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

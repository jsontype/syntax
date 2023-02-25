import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"
import MyButton from "./MyButton"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello, React Native</Text>
      <Button title="Button" onPress={() => alert("Click!")} />
      <MyButton title="MyButton 1" onPress={() => alert("버튼 1이 눌렸다.")} />
      <MyButton title="MyButton 2" onPress={() => alert("버튼 2가 눌렸다.")} />
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

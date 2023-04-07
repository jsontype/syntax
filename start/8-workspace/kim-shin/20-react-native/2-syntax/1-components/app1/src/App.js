import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>안녕하세요 코딩카페 어플리케이션입니다.</Text>
      <Button title="Press me" onPress={() => alert("Simple Button pressed")} />
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

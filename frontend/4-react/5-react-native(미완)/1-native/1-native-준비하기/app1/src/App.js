import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello, Dongwha!</Text>
      <Text>Hello, Dongwha!</Text>
      <Text>Hello, Dongwha!</Text>
      <Text>Hello, Dongwha!</Text>
      <Text>Hello, Dongwha!</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
})

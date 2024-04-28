import { StatusBar } from "expo-status-bar"
import { styles } from "./style"
import { View } from "react-native"
import Shadow from "./Shadow"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Shadow />
    </View>
  )
}

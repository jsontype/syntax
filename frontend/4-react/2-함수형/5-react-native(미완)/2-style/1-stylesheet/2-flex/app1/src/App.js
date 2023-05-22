import { StatusBar } from "expo-status-bar"
import { styles } from "./style"
import { View } from "react-native"
import Box from "./Box"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Box style={{ backgroundColor: "red", height: 100 }} />
      {/* 아래에 height가 아닌 flex 1을 주면 어떤 화면에서도 위아래 100을 제외한 영역이 아래 영역이 된다. */}
      <Box
        style={{ backgroundColor: "green", flex: 1 }}
        content="Hello, Flex!"
      />
      <Box style={{ backgroundColor: "blue", height: 100 }} />
    </View>
  )
}

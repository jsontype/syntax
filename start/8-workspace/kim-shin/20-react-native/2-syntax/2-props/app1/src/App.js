import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import MyButton from "./MyButton"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>안녕하세요 코딩카페 어플리케이션입니다.</Text>
      <MyButton
        title="버튼1"
        onPress={() => {
          alert("버튼1 눌렸음")
        }}
      />
      <MyButton
        title="버튼2"
        onPress={() => {
          alert("버튼2 눌렸음")
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

import React from "react"
import { StyleSheet, TextInput, View } from "react-native"

export default function MyInput() {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="값을 넣으세요"
        onChange={() => console.log("onChange 발생")}
        onChangeText={(e) => console.log(e)}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    padding: 10,
  },
})

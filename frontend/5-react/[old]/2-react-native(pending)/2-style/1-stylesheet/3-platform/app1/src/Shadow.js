import React from "react"
import { View, Text, Platform } from "react-native"
import { styles } from "./style"

export default function Shadow() {
  return (
    <View style={styles.shadow}>
      <Text>
        {Platform.OS === "ios" && "iOS에서 출력된다."}
        {Platform.OS === "android" && "android에서 출력된다."}
      </Text>
    </View>
  )
}

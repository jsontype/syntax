import React from "react"
import { StyleSheet, View, Button } from "react-native"

export default function MyButton({ title, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
  },
})

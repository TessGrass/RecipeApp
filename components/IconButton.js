import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'


function IconButton({ icon, color, press }) {
  return (
    <Pressable onPress={press} style={({ pressed }) => [
      pressed ? styles.pressed : null
    ]}
      >
      <Ionicons name={icon} size={24} color={color}></Ionicons>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5
  }
})
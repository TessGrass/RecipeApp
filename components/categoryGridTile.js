import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function categoryGridTile({ title, color, onPress }) {

  return (
    <View style={styles.outerContainer}>
     {/*  <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}> */}
     <Pressable
      style={({ pressed }) => [
      styles.button, pressed ? styles.buttonPressed : null]}
      onPress={onPress}
      >
        
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default categoryGridTile

const styles = StyleSheet.create({ // can be changed to Dimensions API
  outerContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // to hide that the android_ripple goes outside the Pressable view
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontFamily: 'poppins-medium',
    fontSize: 16,
  },
})
import { Pressable, StyleSheet, Text, View } from "react-native";

function categoryGridTile({ title, color }) {
  return (
    <View style={styles.gridContainer} backgroundColor={color}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default categoryGridTile

const styles = StyleSheet.create({ // change to Dimensions API
  gridContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
})
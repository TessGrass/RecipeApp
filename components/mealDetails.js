import { View, Text, StyleSheet } from 'react-native'

function MealDetails({duration, complexity, affordability}) {
  return (
  <View style={styles.detailsView}>
    <Text style={styles.detailsText}>{duration}m </Text>
    <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
    <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
  </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  detailsText: {
    marginHorizontal: 4,
    fontSize: 12,
  }

})
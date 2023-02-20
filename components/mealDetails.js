import { View, Text, StyleSheet } from 'react-native'

function MealDetails({duration, complexity, affordability, style, textStyle}) { // style/textStyle is a way to flexible style the component according to different needs.
  return (
  <View style={[styles.detailsView, style]}>
    <Text style={[styles.detailsText, textStyle]}>{duration}m </Text>
    <Text style={[styles.detailsText, textStyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailsText, textStyle]}>{affordability.toUpperCase()}</Text>
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
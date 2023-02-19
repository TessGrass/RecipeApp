import { View, Text, StyleSheet } from 'react-native'

function MealsDetailsScreen({ route }) {
  const mealId = route.params.mealId
  
  return (
   <View>
    <Text>Details Screen {mealId}</Text>
   </View>
  )

}

export default MealsDetailsScreen
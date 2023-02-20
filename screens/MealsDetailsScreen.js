import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import MealDetails from '../components/mealDetails'
import { MEALS } from '../data/dummy-data'

function MealsDetailsScreen({ route }) {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  
  // When using an url based image, we need to set a width and height or else the image will not be visible.
  return (
   <View>
    <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} /> 
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <MealDetails
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      textStyle={styles.detailText}
    />
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>Ingredients</Text>
    </View>
      {selectedMeal.ingredients.map((ingredient) => (
      <Text key={ingredient}>{ingredient}</Text>
    ))}
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>Steps</Text>
    </View>
      {selectedMeal.steps.map((step) => (
      <Text key={step}>{step}</Text>
    ))}
   </View>
  )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  subtitle: {
    color: '#c9ab99',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    margin: 6,
    paddingBottom: 6,
    marginHorizontal: 60,
    marginVertical: 4,
    borderBottomColor: '#c9ab99',
    borderBottomWidth: 2,
  },
})
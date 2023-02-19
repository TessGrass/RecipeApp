import { View, Text, Image, StyleSheet } from 'react-native'
import MealDetails from '../components/mealDetails'
import { MEALS } from '../data/dummy-data'

function MealsDetailsScreen({ route }) {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  
  // When using an url based image, we need to set a width and height or else the image will not be visible.
  return (
   <View>
    <Image source={{uri: selectedMeal.imageUrl}} /> 
    <Text>{selectedMeal.title}</Text>
    <MealDetails
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability} 
    />
    <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
      <Text key={ingredient}>{ingredient}</Text>
    ))}
    <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
      <Text key={step}>{step}</Text>
    ))}
   </View>
  )
}

export default MealsDetailsScreen
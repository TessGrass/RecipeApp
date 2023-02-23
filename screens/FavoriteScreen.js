import { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FavoritesContext } from '../store/context/favorites-context.js'
import { MEALS } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'


function FavoriteScreen() {
  
  const favoriteMealCtx = useContext(FavoritesContext)
  const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id)) // returns an array with all meals.id that matches id's found in the favoritMealsCtx
  
  if (favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.infoText}>You have no favorite meals yet</Text>
    </View>
  } else {
  return <MealsList items={favoriteMeals} />
  }  
}

export default FavoriteScreen

const styles = StyleSheet.create({

  rootContainer: {
    flex: 1,
    justifyContent: 'center', // Vertically
    alignItems: 'center'     // Horizontally
  },

  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }

})
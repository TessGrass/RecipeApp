import { useLayoutEffect, useContext } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import IconButton from '../components/IconButton'
import MealDetails from '../components/mealDetails'
import List from '../components/MealsDetails/List'
import Subtitle from '../components/MealsDetails/Subtitle'
import { MEALS } from '../data/dummy-data'
import { FavoritesContext } from '../store/context/favorites-context'

function MealsDetailsScreen({ route, navigation }) {
  const favoriteMealCtx = useContext(FavoritesContext) // FavoriteContext points to the variable with the same name in favorite-context.js
  
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId) // returns true if the mealId is found in the favoriteMeal array

  function headerButtonHandler() {
    console.log('press')
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton 
            icon='star'
            color='white' 
            press={headerButtonHandler} 
          />
        )
      }
    })
  }, [navigation, headerButtonHandler])
  
  // When using an url based image, we need to set a width and height or else the image will not be visible.
  return (
   <ScrollView style={styles.rootContainer}>
    <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} /> 
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <MealDetails
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      textStyle={styles.detailText}
    />

    <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
      <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients}></List>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps}></List>
      </View>
    </View>

   </ScrollView>
  )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
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
  listOuterContainer: {
  alignItems: 'center'
  },

  listContainer: {
    width: '80%',
  },


})
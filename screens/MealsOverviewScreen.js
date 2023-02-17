import { View, StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

function MealsOverViewScreen({ route }) { // route comes from mealsoverview being registered as a screen in app.js
  const categoryId = route.params.categoryId // params - an optional object containing params which is defined while navigating. In this case it's itemData.item.id.

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0 // returns true if categoryId matches MEALS.categoryIds, if the index doesnt match it will return -1.
  })

  function renderMealItem(itemData) {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability
    }
    return (
     <MealItem {...mealItemProps}/>
    )
  }

  return (
  <View style={styles.container}>
    <FlatList data={displayMeals}
    keyExtractor={(item) => item.id}
    renderItem={renderMealItem} // Is called for each item in Categories
    /> 
  </View>
  )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
  }
})
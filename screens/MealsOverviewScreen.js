
import { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'

function MealsOverViewScreen({ route, navigation }) { // route con comes from mealsoverview being registered as a screen in app.js
  const categoryId = route.params.categoryId // params - an optional object containing params which is defined while navigating. In this case it's itemData.item.id.

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0 // returns true if categoryId matches MEALS.categoryIds, if the index doesnt match it will return -1.
  })

  useLayoutEffect(() => { //setOptions creates a sideffect and we use useLayoutEffect to handle that. We can also use useEffect but useLayoutEffect allows us to make change to the screen before it updates, in this case making the dynamic title load instantly.
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
  
    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryId, navigation])


  return <MealsList items={displayMeals}/>
}


export default MealsOverViewScreen

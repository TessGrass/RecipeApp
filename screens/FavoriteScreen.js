import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context.js'
import { MEALS } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'

function FavoriteScreen() {
  
  const favoriteMealCtx = useContext(FavoritesContext)
  const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id)) // returns an array with all meals.id that matches id's found in the favoritMealsCtx
  
  return <MealsList items={favoriteMeals} />
  
}

export default FavoriteScreen
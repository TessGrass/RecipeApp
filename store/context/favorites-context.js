import { createContext, useState } from 'react'


const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remoteFavorite: () => {}
})

function FavoritesContextProvider({ children }) {

  const [favoritMealIds, setFavoriteMealIds] = useState([])

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]) //currentFavIds -> prev state snapschot.
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => 
    currentFavIds.filter(mealId => mealId !== id)) // filter out the id
  }

  const value = {
    ids: favoritMealIds,
    addFavorite: addFavorite, // points to the function with the same name
    removeFavorite: removeFavorite // points to the function with the same name
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}


export default FavoritesContextProvider


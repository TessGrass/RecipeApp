import { createContext, useState } from 'react'


export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: () => {},
})

function FavoritesContextProvider({ children }) {

  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]) //currentFavIds -> prev state snapschot.
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => 
    currentFavIds.filter(mealId => mealId !== id)) // filter out the id
  }

  
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite, // points to the function with the same name
    removeFavorite: removeFavorite, // points to the function with the same name
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}


export default FavoritesContextProvider

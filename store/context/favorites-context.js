import { createContext } from 'react'

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remoteFavorite: () => {}
})

function FavoritesContextProvider({ children }) {
  
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
}


export default FavoritesContextProvider
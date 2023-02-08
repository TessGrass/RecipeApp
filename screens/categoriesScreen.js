import { FlatList } from 'react-native';
import CategoryGridTile from '../components/categoryGridTile'
import { CATEGORIES } from '../data/dummy-data';


//Flatlist makes it scrollable, flatlist isn't neccessary here due to the fact that the list is a fixed size, scrollview could work as well.
function categoriesScreen({ navigation }) { // navigation is provided through the stack.screen in App.js. By bind the CategoriesScreen to a screen(stack.screen) the prop navigation is available.
  function renderCategoryItem(itemData) { 
    function pressHandler() {
      navigation.navigate('MealsOverView') //Define to which screen we want to navigate
    }
  
    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={pressHandler} 
      />
    )
  }
  
  
  
  return (
    <FlatList data={CATEGORIES}
    keyExtractor={(category) => category.id} 
    renderItem={renderCategoryItem} // Is called for each item in Categories
    numColumns={2}
    /> 
  )

}

export default categoriesScreen
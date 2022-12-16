import { FlatList } from 'react-native';
import CategoryGridTile from '../components/categoryGridTile'
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(itemData) { // declared outside component because it doesn't need to be re-created when the component is re-rendered.
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  )
}

//Flatlist makes it scrollable, flatlist isn't neccessary here due to the fact that the list is a fixed size, scrollview could work as well.
function categoriesScreen() {
  return (
    <FlatList data={CATEGORIES}
    keyExtractor={(category) => category.id} 
    renderItem={renderCategoryItem} 
    numColumns={2}
    /> 
  )

}

export default categoriesScreen
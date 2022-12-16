import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(item) { // declared outside component because it doesn't need to be re-created when the component is re-rendered.
  return (
    
  )
}

function categoriesScreen() {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(category) => category.id} /> 
  )

}

export default categoriesScreen
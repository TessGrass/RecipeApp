import { View, Text, StyleSheet } from 'react-native'

function List({ data }) {

  return (
    data.map((element) => (
      <View key={element} style={styles.listItem}>
        <Text style={styles.itemText}>{element}</Text>
      </View>
    ))
  )
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#c9ab99',
  },

  itemText: {
    color: '#351401',
    textAlign: 'center'
  }




})
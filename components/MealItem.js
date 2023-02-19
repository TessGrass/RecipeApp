import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation()

  function selectMealHandler() {
    navigation.navigate('MealsDetails', {
      mealId: id
    })
  }

  return (
  <View style={styles.mealItem}>
    <Pressable android_ripple={{ color: '#eee' }}
      onPress={selectMealHandler}>
      <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} /> 
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.detailsText}>{duration}m </Text>
          <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </Pressable>
  </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({

  mealItem: {
    margin: 16,
    borderRadius: 10,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // to hide that the android_ripple goes outside the Pressable view
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.30,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: 200
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12,
    fontSize: 18
  },

  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  detailsText: {
    marginHorizontal: 4,
    fontSize: 12,
  }
})